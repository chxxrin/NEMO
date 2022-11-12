import React, { useState } from "react";
import styled from "styled-components";
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
          <h5>{user.photos[idx].title}</h5>
          <p>
            {user.photos[idx].location} {user.photos[idx].date}
          </p>
        </section>
        <section id="pic">
          <img src={image}></img>
        </section>
      </div>
    );
  } else if (trace === "Create") {
    return (
      <div>
        <section id="title">
          <input
            defaultValue={""}
            placeholder="제목을 입력해주세요!"
            onChange={onChangeTitleText}
          />
          <p style={{ textAlign: "center" }}>
            {user.photos[idx].location} {user.photos[idx].date}
          </p>
        </section>
        <section id="newpic">+</section>
      </div>
    );
  } else {
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
          <p style={{ textAlign: "center" }}>
            {user.photos[idx].location} {user.photos[idx].date}
          </p>
        </section>
        <section id="pic">
          <img src={image}></img>
        </section>
      </div>
    );
  }
};

export default History;
