import React from "react";
import Router from "./components/Router";
import "./App.css";

const userDummy = {
  name: "지우", //user table , photo table 따로 -> user 정보가 foreign key ->
  id: "JeeWoo",
  photoCnt: 1,
  photos: [
    {
      title: "동아리 개총 뒷풀이",
      location: "인생네컷 홍대점",
      sharedUser: ["사람1ID", "사람2ID", "사람3ID"],
      date: 20201104,
      img: "../assets/photo1.jpg",
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
