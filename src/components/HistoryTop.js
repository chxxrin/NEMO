import React from "react";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

const HistoryTop = (props) => {
  return (
    <div className="historyTop">
      <Top>
        HISTORY
        {/* <FaCamera /> 히스토리 */}
      </Top>
    </div>
  );
};

export default HistoryTop;

const Top = styled.h2`
  color: #8861c2;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  margin: auto;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;
