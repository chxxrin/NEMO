import React, { useState } from "react";
import { Link } from "react-router-dom";
import History from "../components/History";
import HistoryTop from "../components/HistoryTop";
import MemberModal from "../components/MemberModal";
import styled from "styled-components";
import "../css/History.css";
import NavbarNone from "../components/NavbarNone";
import "../css/Navbar.css";

const HistoryView = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <NavbarNone/>
      <HistoryTop />
      <History user={user} trace="View" idx={0} />
      <section id="btn">
        <BtnPurple id="invite" onClick={openModal}>
          초대
        </BtnPurple>
        <Link to="/history/edit">
          <BtnPurple id="edit">수정</BtnPurple>
        </Link>
      </section>
      <MemberModal open={modalOpen} close={closeModal} header="사용자 초대하기">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book.
      </MemberModal>
    </div>
  );
};

export default HistoryView;

const BtnPurple = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 41px;
  color: white;
  background-color: #8d4bf6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;
