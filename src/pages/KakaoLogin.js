import React from "react";
import styled from "styled-components";
import { BsFillChatFill } from "react-icons/bs";
import axios from "axios";

const API = process.env.REACT_APP_API;
const REACT_APP_KAKAO_RESTAPI_KEY = process.env.REACT_APP_KAKAO_RESTAPI_KEY

const REDIRECT_URI_DEV= "http://localhost:3000/oauth/kakao/callback" // 개발버전
const REDIRECT_URI_PROD= "" // 배포버전버전

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_RESTAPI_KEY}&response_type=code&redirect_uri=${REDIRECT_URI_DEV}`

const KakaoLogin = () => {

  return (
    
    <DivBtn>
      <a href={KAKAO_AUTH_URL}>
        <LoginBtn>
          <BsFillChatFill className="logo"/> 카카오 로그인
        </LoginBtn>
      </a>
    </DivBtn>
  );
};

export default KakaoLogin;

const LoginBtn = styled.button`
  position: relative;
  top: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 270px;
  height: 50px;
  margin: 20px auto;
  cursor: pointer;
  padding: 10px;
  background-color: #fee500;
  color: #181602;
  border: none;
  font-size: 16px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  border-radius: 12px;
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .logo {
    justify-self: start;
    margin-right: 20px;
  }
`;
