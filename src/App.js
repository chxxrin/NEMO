import React, { useEffect } from 'react'
import Router from './components/Router'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import { useAuthContext } from './contexts/AuthContext'
import styled from 'styled-components'
import axios from 'axios'
import './App.css'

const userDummy = {
  name: '지우', //user table , photo table 따로 -> user 정보가 foreign key ->
  id: 'JeeWoo',
  photoCnt: 2,
  photos: [
    {
      title: '동아리 개총 뒷풀이',
      location: '인생네컷 홍대점',
      sharedUser: ['사람1ID', '사람2ID', '사람3ID'],
      date: 20201104,
      img: photo1,
    },
    {
      title: '회의 끝나고 찰칵~',
      location: '인생네컷 강남점',
      sharedUser: ['사람1ID', '사람2ID', '사람3ID'],
      date: 20221111,
      img: photo2,
    },
  ],
}

function App() {
  const { setIsAuth, setUserData } = useAuthContext()
  const initializeUserInfo = () => {
    const token = localStorage.getItem('token')
    if (!token) return
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    axios.get('/oauth/user').then((res) => {
      // res.data : 유저 데이터 객체
      // avatar, client_id, email, id ,is_member, name
      setIsAuth(true)
      setUserData(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    initializeUserInfo()
  }, [])
  return (
    <AppWrapper>
      <Container>
        <Router user={userDummy} />
      </Container>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 414px;
`

export default App
