import React, { useState } from "react";
import { Link } from "react-router-dom";
import History from "../components/History";
import HistoryTop from "../components/HistoryTop";
import MemberModal from "../components/MemberModal";
import styled from "styled-components";
import "../css/History.css";
import NavbarNone from "../components/NavbarNone";
import "../css/Navbar.css";

const HistoryCreate = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const fileInput = React.useRef();

  const [imgUpload, setImgUpload] = useState();

  const handleImgButtonClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleChange = (event) => {
    if (event.target.files.length !== 0) {
      const formData = new FormData();
      formData.append("img", event.target.files[0]);
      const imgSrc = URL.createObjectURL(event.target.files[0]);
      setImgUpload(imgSrc);
      user.photos[0].img = imgSrc;
    }
  };

  return (
    <div className="container">
      <NavbarNone />
      <HistoryTop />
      <div onClick={handleImgButtonClick}>
        <History user={user} trace="Create" idx={0} />
      </div>

      <section id="btn">
        <BtnPurple onClick={openModal}>초대</BtnPurple>
        <Link to="/history/view">
          <BtnPurple type="BtnPurple">완료</BtnPurple>
        </Link>
      </section>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        ref={fileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <MemberModal
        open={modalOpen}
        close={closeModal}
        header="사용자 초대하기"
      ></MemberModal>
    </div>
  );
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
