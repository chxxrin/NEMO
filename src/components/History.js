import React, { useState } from "react";
import styled from "styled-components";
import "../css/History.css";

const History = ({ historyObj, trace }) => {
  const onChangeTitleText = (e) => {
    setEditTitle(e.target.value);
    // user.photos[idx].title = editTitle
  };
  // const image = user.photos[idx].img
  const [editTitle, setEditTitle] = useState("");
  //   return (
  //     <div>
  //       <section id="title">
  //         {editTitle ? (
  //           <input value={editTitle} onChange={onChangeTitleText} />
  //         ) : (
  //           <input
  //             defaultValue={user.photos[idx].title}
  //             onChange={onChangeTitleText}
  //           />
  //         )}
  //         <Info>
  //           {user.photos[idx].location} <DateSelect />
  //         </Info>
  //       </section>
  //     </div>
  //   )
};

export default History;

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
