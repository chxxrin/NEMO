import { useNavigate } from 'react-router-dom'
// import '../css/Home.css';
import { useState } from 'react'
import styled from 'styled-components'
import Modal from '../components/Modal'
import KakaoLoginBtn from '../components/KakaoLoginBtn'

import Help from '../pages/Help';
import logo from '../assets/nemo-logo.png'


function InnerHelp(){
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

    return(
    <Modal open={modalOpen} close={closeModal} header="4cut 사용방법" style={{}}>
        <Help></Help>
    </Modal>
    )
}