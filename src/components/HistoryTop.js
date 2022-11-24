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
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;
