import React, { useState } from "react";
import styled from "styled-components";
import DateSelect from "./DateSelect";
import DateView from "./DateView";
import "../css/History.css";

const History = (props) => {
  const { user, idx, trace } = props;
  const onChangeTitleText = (e) => {
    setEditTitle(e.target.value);
    user.photos[idx].title = editTitle;
  };
  const image = user.photos[idx].img;
  const [editTitle, setEditTitle] = useState("");
  if (trace === "View") {
    return (
      <div>
        <section id="title">
          <h5 style={{ marginTop: "5px" }}>{user.photos[idx].title}</h5>
          <Info>
            {user.photos[idx].location} <DateView />
          </Info>
        </section>
      </div>
    );
  } else {
    // trace === "edit"
    return (
      <div>
        <section id="title">
          {editTitle ? (
            <input value={editTitle} onChange={onChangeTitleText} />
          ) : (
            <input
              defaultValue={user.photos[idx].title}
              onChange={onChangeTitleText}
            />
          )}
          <Info>
            {user.photos[idx].location} <DateSelect />
          </Info>
        </section>
      </div>
    );
  }
};

export default History;

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
