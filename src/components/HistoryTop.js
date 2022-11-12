import React from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const HistoryTop = (props) => {
  return (
    <div className="historyTop">
      <Top>
        <FaCamera /> HISTORY
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
`;
