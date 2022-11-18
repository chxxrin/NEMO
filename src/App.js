import React from "react";
import Router from "./components/Router";
import "./App.css";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";

const userDummy = {
  name: "지우", //user table , photo table 따로 -> user 정보가 foreign key ->
  id: "JeeWoo",
  photoCnt: 2,
  photos: [
    {
      title: "동아리 개총 뒷풀이",
      location: "인생네컷 홍대점",
      sharedUser: ["사람1ID", "사람2ID", "사람3ID"],
      date: 20201104,
      img: photo1,
    },
    {
      title: "회의 끝나고 찰칵~",
      location: "인생네컷 강남점",
      sharedUser: ["사람1ID", "사람2ID", "사람3ID"],
      date: 20221111,
      img: photo2,
    },
  ],
};

function App() {
  return (
    <React.StrictMode>
      <Router user={userDummy} />
    </React.StrictMode>
  );
}

export default App;
