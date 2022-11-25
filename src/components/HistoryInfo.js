import React from "react";
import axios from "axios";
import styled from "styled-components";
import DateSelect from "./DateSelect";
import "../css/History.css";

const HistoryInfo = (props) => {
  const { user, idx, setTitle, setDate, title, date, studio, location } = props;
  return (
    <div className="info-wrapper">
      <section id="title">
        <Input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="hisTitle"
          placeholder="제목을 입력하세요!"
          value={title}
        />
        <Info className="info">
          {studio === "하루필름" || studio === "포토이즘" ? (
            <div />
          ) : (
            <div>{studio}</div>
          )}
          {location} <DateSelect setDate={setDate} date={date} />
        </Info>
      </section>
    </div>
  );
};

export default HistoryInfo;

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`;

const Input = styled.input`
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  width: 100%;
  height: 32px;
  font-size: 17px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: rgb(233, 233, 233);
`;
