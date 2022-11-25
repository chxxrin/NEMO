import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import MemberModal from "../components/MemberModal";
import imgHolder from "../assets/add_image.png";
import { TiDelete } from "react-icons/ti";
import "../css/History.css";

const HistoryImageUploader = ({ preview_URL, setImage, image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  let inputRef;
  const saveImage = async (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      }));
    }
  };

  const deleteImage = () => {
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: "",
      preview_URL: imgHolder,
    });
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  return (
    <div className="uploader-wrapper">
      <section id="pic">
        <BtnDelete className="del" onClick={deleteImage}>
          <TiDelete />
        </BtnDelete>
        <img
          style={{
            width: "300px",
            height: "350px",
            objectFit: "contain",
          }}
          src={image.preview_URL}
          onClick={() => inputRef.click()}
        ></img>
      </section>

      <section id="btn" style={{ justifyContent: "center" }}>
        {/* <BtnPurple onClick={openModal}>초대</BtnPurple> */}
        <BtnGray onClick={() => inputRef.click()}>사진 변경</BtnGray>
      </section>

      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={saveImage}
        onClick={(e) => (e.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />

      <MemberModal
        open={modalOpen}
        close={closeModal}
        header="사용자 초대하기"
      />
    </div>
  );
};

export default HistoryImageUploader;

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

const BtnGray = styled.button`
  border: none;
  outline: none;
  width: 150px;
  height: 41px;
  color: black;
  background-color: #e7e7e7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const BtnDelete = styled.button`
  width: 380px;
  height: 15px;
  font-size: 25px;
  justify-self: right !important;
  align-items: right !important;
  text-align: right !important;
  z-index: 10;
  border: none;
  outline: none;
  color: gray;
  background-color: transparent;
`;
