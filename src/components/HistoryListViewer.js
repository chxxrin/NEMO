import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DateView from "./DateView";
import "../css/History.css";

const HistoryListViewer = ({ historyObj }) => {
  const navigate = useNavigate();
  const hashed_history_id = historyObj.history.hashed_history_id;
  return (
    <div>
      <section id="pic">
        <div style={{ textAlign: "center" }}>
          {" "}
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {historyObj.history.title}
          </p>{" "}
          {historyObj.history.history_date}
        </div>

        <img
          style={{
            marginTop: "10px",
            width: "350px",
            height: "400px",
            objectFit: "contain",
          }}
          src={historyObj.files[0].url}
        ></img>
      </section>

      {/* <section id="btn">
        <Link to="/history/view/">
          <BtnPurple onClick={navigate(`/history/view/${hashed_history_id}`)}>
            상세보기
          </BtnPurple>
        </Link>
      </section> */}
    </div>
  );
};

export default HistoryListViewer;

const BtnPurple = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 41px;
  color: white;
  background-color: #8861c2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;
