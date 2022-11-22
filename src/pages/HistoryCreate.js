import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import History from "../components/History";
import HistoryTop from "../components/HistoryTop";
import MemberModal from "../components/MemberModal";
import styled from "styled-components";
import NavbarNone from "../components/NavbarNone";
import axios from "axios";
import imgHolder from "../assets/add_image.png";
import "../css/History.css";
import "../css/Navbar.css";

const API = process.env.REACT_APP_API;

const HistoryCreate = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: imgHolder,
  });

  let inputRef;
  const saveImage = (e) => {
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

  const sendImageToServer = async () => {
    if (image.image_file) {
      const formData = new FormData();
      formData.append("file", image.image_file);
      await axios.post(API + "/image/upload");
    }
  };

  return (
    <div className="container">
      <NavbarNone />
      <HistoryTop />
      <div>
        <History user={user} trace="Create" idx={0} />

        <section id="pic">
          <img src={image.preview_URL} onClick={() => inputRef.click()}></img>
        </section>
      </div>

      <section id="btn">
        <BtnPurple onClick={openModal}>초대</BtnPurple>
        <BtnGray onClick={() => inputRef.click()}>사진 변경</BtnGray>
        <Link to="/history/view">
          <BtnPurple onClick={sendImageToServer}>완료</BtnPurple>
        </Link>
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
      ></MemberModal>
    </div>
  );

  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const fileInput = React.useRef();

  // const [imgUpload, setImgUpload] = useState();

  // const handleImgButtonClick = (event) => {
  //   event.preventDefault();
  //   fileInput.current.click();
  // };

  // const handleChange = (event) => {
  //   if (event.target.files.length !== 0) {
  //     const formData = new FormData();
  //     formData.append("img", event.target.files[0]);
  //     const imgSrc = URL.createObjectURL(event.target.files[0]);
  //     setImgUpload(imgSrc);
  //     user.photos[0].img = imgSrc;
  //   }
  // };

  // return (
  //   <div className="container">
  //     <NavbarNone />
  //     <HistoryTop />
  //     <div onClick={handleImgButtonClick}>
  //       <History user={user} trace="Create" idx={0} />
  //     </div>

  //     <section id="btn">
  //       <BtnPurple onClick={openModal}>초대</BtnPurple>
  //       <Link to="/history/view">
  //         <BtnPurple type="BtnPurple">완료</BtnPurple>
  //       </Link>
  //     </section>
  //     <input
  //       type="file"
  //       accept="image/jpg, image/jpeg, image/png"
  //       ref={fileInput}
  //       onChange={handleChange}
  //       style={{ display: "none" }}
  //     />
  //     <MemberModal
  //       open={modalOpen}
  //       close={closeModal}
  //       header="사용자 초대하기"
  //     ></MemberModal>
  //   </div>
  // );
};

export default HistoryCreate;

const BtnPurple = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 41px;
  color: white;
  background-color: #7D6E83;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const BtnGray = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 41px;
  color: black;
  background-color: #e7e7e7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;
