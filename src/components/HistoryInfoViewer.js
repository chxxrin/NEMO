import React, { useReducer } from "react";
import styled from "styled-components";
import DateSelect from "./DateSelect";

const HistoryInfoViewer = ({ historyObj, trace }) => {
  if (trace === "list") {
    return (
      <div className="info-wrapper">
        <section id="title">
          <h5
            style={{
              marginTop: "5px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {historyObj.history.title}
          </h5>
          <Info className="info">{historyObj.history.history_date}</Info>
        </section>
      </div>
    );
  } else {
    return (
      <div className="info-wrapper">
        <section id="title">
          <h5
            style={{
              marginTop: "5px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {historyObj.history.title}
          </h5>
          <Info className="info">
            {historyObj.studio.company === "하루필름" ||
            historyObj.studio.company === "포토이즘" ? (
              <div></div>
            ) : (
              <div>{historyObj.studio.company}</div>
            )}
            {/* {historyObj.studio.company} */}
            {historyObj.studio.name + " "}
            {historyObj.history.history_date}
          </Info>
        </section>
      </div>
    );
  }
};

export default HistoryInfoViewer;

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
