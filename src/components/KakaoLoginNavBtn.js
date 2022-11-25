import React from 'react'
import styled from 'styled-components'
// KakaoLogin
import { BsFillChatFill } from 'react-icons/bs'

const REACT_APP_KAKAO_RESTAPI_KEY = process.env.REACT_APP_KAKAO_RESTAPI_KEY

let REDIRECT_URI = ''

if (
  process.env.REACT_APP_ENV === 'development' ||
  process.env.REACT_APP_ENV === 'local'
) {
  // npm run dev ,npm start (로컬환경 테스트)
  REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback'
} else {
  // production
  // npm build (배포환경 테스트)
  REDIRECT_URI = 'http://ne-mo.me/oauth/kakao/callback'
}


const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_RESTAPI_KEY}&response_type=code&redirect_uri=${REDIRECT_URI}`
function KakaoLoginBtn({ trace }) {
  return (
    <div>
      <a href={KAKAO_AUTH_URL} style={{ textDecoration: 'none' }}>
        <LoginBtn>
          <BsFillChatFill
            className="logo"
            style={{ color: '#191604', marginRight: '15px' }}
          />
          카카오 로그인
        </LoginBtn>
      </a>
    </div>
  )
}

export default KakaoLoginBtn

// KakaoLoginBtn
const LoginBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  margin: 20px auto;
  cursor: pointer;
  padding: 10px;
  background-color: #fee500;
  color: #181602;
  border: none;
  font-size: 16px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  border-radius: 12px;
`
