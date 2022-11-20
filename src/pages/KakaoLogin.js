import React from "react";
import styled from "styled-components";
import btn from "../assets/kakao_login_medium_wide.png";

const KakaoLogin = () => {
  return (
    <DivBtn>
      <LoginBtn>
        <img src={btn} />
      </LoginBtn>
    </DivBtn>
  );
};

export default KakaoLogin;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 12px;
  background-color: #fee500;
  font-size: 15px;
  position: relative;
  top: 600px;
`;

const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
