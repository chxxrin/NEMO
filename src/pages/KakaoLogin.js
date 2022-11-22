import React from "react";
import styled from "styled-components";
import { BsFillChatFill } from "react-icons/bs";

const KakaoLogin = () => {
  return (
    <DivBtn>
      <LoginBtn>
        <BsFillChatFill className="logo" /> 카카오 로그인
      </LoginBtn>
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
