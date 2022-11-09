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
  color: #7016ff;
  padding: 10px 10px 10px 20px;
`;
