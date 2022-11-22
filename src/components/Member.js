import React from "react";
import styled from "styled-components";

const Member = (props) => {
  const removeUser = () => {
    console.log("hi");
  };
  return (
    <div>
      <MemberBox>
        {props.name}
        <XButton onClick={removeUser}>&times;</XButton>
      </MemberBox>
    </div>
  );
};

export default Member;

const MemberBox = styled.section`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #ffffff;
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
  border: 1px solid #e2e2e2;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const XButton = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  color: #7D6E83;
  text-align: right;
`;
