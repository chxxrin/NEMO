import React from "react";
import axios from "axios";
import styled from "styled-components";
import DateSelect from "./DateSelect";

const HistoryInfo = (props) => {
  const { user, idx, setTitle, setDate, title, date } = props;
  return (
    <div className="info-wrapper">
      <section id="title">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="hisTitle"
          placeholder="제목을 입력하세요"
          value={title}
        />
        <Info className="info">
          {user.photos[idx].location}{" "}
          <DateSelect setDate={setDate} date={date} />
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
`;

const Title = styled.h5`
  margin-top: 5px;
`;
