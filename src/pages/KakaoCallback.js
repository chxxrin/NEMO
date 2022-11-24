import React from 'react'
import styled from 'styled-components'
import { BsFillChatFill } from 'react-icons/bs'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { useHashHistoryIdContext } from '../contexts/HashHistoryIdContext'

const REACT_APP_KAKAO_RESTAPI_KEY = process.env.REACT_APP_KAKAO_RESTAPI_KEY

// 카카오 로그인 후, 리다이렉트 되는 페이지
const KakaoCallback = () => {
  const { setIsAuth, setUserData } = useAuthContext()
  // const { hashHistoryId, setHashHistoryId } = useHashHistoryIdContext()

  const navigate = useNavigate()

  const href = window.location.href
  let params = new URL(document.URL).searchParams
  let code = params.get('code')

  useEffect(() => {
    if (code) {
      getKakaoToken(code)
    }
  }, [])

  const getKakaoToken = (code) => {
    const data = {
      grant_type: 'authorization_code',
      client_id: REACT_APP_KAKAO_RESTAPI_KEY,
      // redirect_url: 'http://localhost:3000',
      code: code,
    }

    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&')

    //토큰 발급 REST API
    axios
      .post('https://kauth.kakao.com/oauth/token', queryString)
      .then((res) => {
        //서버에 토큰 전송
        console.log(res.data.access_token)
        sendKakaoTokenToServer(res.data.access_token)
      })
  }

  const sendKakaoTokenToServer = (token) => {
    axios.post('/oauth/kakao', { access_token: token }).then((res) => {
      if (res.status === 201) {
        // 로컬스토리지에 토큰 저장
        localStorage.setItem('token', res.data.access_token)
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + res.data.access_token
        axios
          .get('/oauth/user')
          .then((res) => {
            // res.data : 유저 데이터 객체
            setIsAuth(true)
            setUserData(res.data)
            // console.log(res.data)
            const hashHistoryId = localStorage.getItem('hashed_history_id')
            console.log('hashHistoryId', hashHistoryId)
            if (hashHistoryId) {
              navigate(`/history/view/${hashHistoryId}?is_newUser=0`)
              localStorage.setItem('hashed_history_id', '')
            } else {
              navigate('/map') // 로그인 완료 후 /map 으로 이동
            }
          })
          .catch((err) => {
            window.alert('로그인에 실패하였습니다.') // 여유되면 모달로 표시
            navigate('/') // 로그인 실패하면 /login 으로 이동
          })
      } else {
        window.alert('로그인에 실패하였습니다.') // 여유되면 모달로 표시
        navigate('/') // 로그인 실패하면 /login 으로 이동
      }
    })
  }

  return <></>
}

export default KakaoCallback
