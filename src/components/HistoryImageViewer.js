import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MemberModal from '../components/MemberModal'
import DateView from './DateView'
import '../css/History.css'
import KakaoShareBtn from './KakaoShareBtn'

const HistroyImageViewer = ({ historyObj, hashed_history_id }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <section id="pic">
        <img
          style={{
            marginTop: '10px',
            width: '350px',
            height: '400px',
            objectFit: 'contain',
          }}
          src={historyObj.files[0].url}
        ></img>
      </section>

      <section id="btn">
        <BtnPurple onClick={openModal}>초대</BtnPurple>
        <Link to="/map">
          <BtnPurple id="map">완료</BtnPurple>
        </Link>
        {/* <Link to="/history/edit">
          <BtnPurple id="edit">수정</BtnPurple>
        </Link> */}
      </section>

      <MemberModal
        open={modalOpen}
        close={closeModal}
        header="사용자 초대하기"
      />
      <KakaoShareBtn
        hashed_history_id={hashed_history_id}
        historyObj={historyObj}
      ></KakaoShareBtn>
    </div>
  )
}

export default HistroyImageViewer

const BtnPurple = styled.button`
  border: none;
  outline: none;
  width: 90px;
  height: 41px;
  color: white;
  background-color: #8861c2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`

const Info = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`
