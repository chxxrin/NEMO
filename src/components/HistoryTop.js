import React from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const HistoryTop = (props) => {
  return (
    <div className="historyTop">
      <Top>
        <FaCamera /> 히스토리
      </Top>
    </div>
  );
};

export default HistoryTop;

const Top = styled.h2`
  color: #8d4bf6;
  padding: 10px 10px 10px 10px;
  font-weight: bold;
  margin-top: 5px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;
