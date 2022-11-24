// import '../css/Help.css';
import * as BsIcons from "react-icons/bs";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {useRef, useState, useEffect } from 'react'
import help1 from '../assets/help1.jpg'
import help2 from '../assets/help2.jpg'
import help3 from '../assets/help3.jpg'
import help4 from '../assets/help4.jpg'
import help5 from '../assets/help5.jpg'
import help6 from '../assets/info6.png'

import '../css/Help.css'
const helpingimages = [
  help2,
  help3,
  help4,
  help5,
]
const helpingtext = [
  "궁금한 네컷 사진점을 검색해 보세요! \n 위치와 정보를 알려줄거에요 ^.^",
  "검색 기능으로 다양한 네컷 사진관들의 \n검색결과를 확인해볼까요?",
  "히스토리에 사진을 추가해서 \n나만의 히스토리를 모아보세요!",
  "카카오톡 아이디로 친구를 추가하고 \n히스토리를 공유하세요!"
]

let PageBox = styled.div`
  display: block;
  text-align: right;
  margin: 10px;
`;

let PageBtn = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 20px;
  color: #8861c2;
  cursor: pointer;
  float: right;
`;
let PageNum = styled.div`
  text-align: right;
  float: right;
`;

function Help() {
  const navigate = useNavigate();
  let[i,setI]= useState(1);
  
  return (
    
    <div style={{overflow:"hidden", scroll:"none", height:"80%"}}>
      <div id="outer">
      <div id="HelpBtn">
        <div style={{float:"left"}}>
      <PageBtn onClick={()=>{
          if(i>1){setI(i-1);}
        }} ><BsIcons.BsCaretLeftFill /></PageBtn>
        </div>
        <div style={{float:"left"}}>
        <PageNum>{i} / 4</PageNum>
        </div>
        <div style={{float:"left"}}>
        <PageBtn onClick={()=>{
          if(i<4){
            setI(i+1);
          }
        }} ><BsIcons.BsCaretRightFill /></PageBtn>
        </div>
      </div>
      </div>
      <div id="HelpImg" style={{display:"flex" ,height:"80%"}}>
        <img id="imgs"src = {helpingimages[i-1]}></img>
        {/* <img src = {help1}></img> */}
      </div>
      <div id="helpingtext" style={{justifyContent: "center" ,float:"center"}}>
        {helpingtext[i-1]}
      </div>
    </div>
    
  );
}

export default Help;