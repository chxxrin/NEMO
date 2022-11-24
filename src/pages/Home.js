//pages>Home.js

import { useNavigate } from 'react-router-dom'
// import '../css/Home.css';
import { useState } from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'
import KakaoLoginBtn from '../components/KakaoLoginBtn'
import logo from '../assets/nemo-logo.png'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

//color : 진한보라 #8861c2,#7F669D, #827397, 연한보라 #B5A8BF
let MainBtn_Purple = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #8861c2;
  width: 250px;
  margin: 20px auto;
  cursor: pointer;
  padding: 10px;
  background-color: #8861c2;
  color: white;
  font-size: 16px;
  border-radius: 10px;
`

let MainBtn_Gray = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #d9d9d9;
  width: 250px;
  margin: 20px auto;
  cursor: pointer;
  padding: 10px;
  background-color: #d9d9d9;
  color: black;
  font-size: 16px;
  border-radius: 10px;
`

const LogoImg = styled.img`
  margin-top: 120px;
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
`

function Home() {
  const navigate = useNavigate()

  //카카오톡 로그인으로 시작하기 버튼을 누르면 /login 페이지로 이동
  const navigateToLogin = () => {
    navigate('/login')
  }

  const navigateToMap = () => {
    navigate('/map')
  }

  const navigateToHelp = () => {
    navigate('/help')
  }

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Div>
      {/* <Logo>NEMO</Logo> */}
      <LogoImg src={logo}></LogoImg>
      <KakaoLoginBtn></KakaoLoginBtn>
      <MainBtn_Purple onClick={navigateToMap}>시작하기</MainBtn_Purple>
      <MainBtn_Gray onClick={openModal}>도움말</MainBtn_Gray>
      <Modal open={modalOpen} close={closeModal} header="4cut 사용방법">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.” The purpose of lorem ipsum is to create a
        natural looking block of text (sentence, paragraph, page, etc.) that
        doesn't distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be very useful when
        the focus is meant to be on design, not content.
      </Modal>
    </Div>
  )
}

export default Home
