import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import History from "../components/History";
import HistoryTop from "../components/HistoryTop";
import NavbarNone from "../components/NavbarNone";
import styled from "styled-components";
import axios from "axios";
import imgHolder from "../assets/add_image.png";
import HistoryImageUploader from "../components/HistoryImageUploader";
import HistoryInfo from "../components/HistoryInfo";
import "../css/History.css";
import "../css/Navbar.css";
import { BsWindowSidebar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const HistoryCreate = ({ user }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: imgHolder,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("history_date", date);
    formData.append("studio_id", 1);
    formData.append("fileObj", image.image_file);
    console.log(image.image_file);
    console.log(image.image_file instanceof Blob);
    axios
      .post("/history/", formData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        const hashed_history_id = res.data.hashed_history_id;
        window.alert("히스토리가 등록되었습니다.");
        navigate(`/history/view/${hashed_history_id}`);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  return (
    <div className="container">
      <NavbarNone />
      <HistoryTop />
      <HistoryInfo
        setTitle={setTitle}
        setDate={setDate}
        title={title}
        date={date}
        user={user}
        idx={0}
      />
      <HistoryImageUploader
        setImage={setImage}
        image={image}
        preview_URL={image.preview_URL}
      />
      <ButtonPostDiv>
        <Link to="/history/view">
          <BtnPost onClick={handleSubmit}>히스토리 등록하기</BtnPost>
        </Link>
      </ButtonPostDiv>
    </div>
  );
};

export default HistoryCreate;

const BtnPost = styled.button`
  border: none;
  outline: none;
  width: 276px;
  height: 41px;
  color: white;
  background-color: #8861c2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const ButtonPostDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
