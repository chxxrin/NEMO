import React, { useState } from "react";

const History = (props) => {
  const onChangeTitleText = (e) => {
    setEditTitle(e.target.value);
    props.user.photos[0].title = editTitle;
  };
  const image = props.user.photos[0].img;
  const [editTitle, setEditTitle] = useState("");
  if (props.trace === "View") {
    return (
      <div>
        <h1 style={{ color: "#8d4bf6", textAlign: "center" }}>
          {props.user.photos[0].title}
        </h1>
        <h2>{props.user.photos[0].coorX}</h2>
        <h3>{props.user.photos[0].date}</h3>
        {console.log(props.user.photos[0].img)}
        <img src={image}></img>
      </div>
    );
  } else {
    return (
      <div>
        {editTitle ? (
          <input value={editTitle} onChange={onChangeTitleText} />
        ) : (
          <input
            defaultValue={props.user.photos[0].title}
            onChange={onChangeTitleText}
          />
        )}
        <h2>{props.user.photos[0].coorX}</h2>
        <h3>{props.user.photos[0].date}</h3>
        <img src={image}></img>
      </div>
    );
  }
};

export default History;
