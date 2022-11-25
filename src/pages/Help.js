// import '../css/Help.css';
import * as BsIcons from "react-icons/bs";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {useRef, useState, useEffect } from 'react'
import help1 from '../assets/lib1.jpg'
import help2 from '../assets/lib2.jpg'
import help3 from '../assets/lib3.jpg'
import help4 from '../assets/lib4.jpg'
import help5 from '../assets/lib5.jpg'
import help6 from '../assets/last6.jpg'
import help7 from "../assets/lib7.jpg"
import * as MdIcons from "react-icons/md";
import '../css/Help.css'
const helpingimages = [
  help1,
  help2,
  help3,
  help4,
  help5,
  help6,
  help7
]
const helpingtext = [
  "모두의 추억을 '네모'에 담아보세요!",
  "지도에서 원하는 네 컷 사진점의 \n위치를 확인할 수 있어요!",
  "검색 기능으로 다양한 네컷 사진관들의\n 검색 결과를 확인해볼까요? ^.^",
  "전에 찍었던 사진의 히스토리를\n 조회하고 등록할 수 있어요!",
  "앨범에 있는 사진도, 방금 찍은 네컷도\n 올릴 수 있답니다",
  "그러면 카카오톡 친구 초대로\n 히스토리를 공유해볼까요?",
  "짜잔! 친구와 네 컷을 공유했어요\n 이제 직접 네모를 경험해보세요!"
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
  // float: right;
  margin-bottom: 20px;
`;
let PageNum = styled.div`
  // text-align: right;
  // float: right;
  margin-top: 4px;
`;

function Help() {
  const navigate = useNavigate();
  let[i,setI]= useState(1);
  
  return (
    
    <div style={{overflow:"hidden", scroll:"none", height:"80%"}}>
      <div id="outer">
      <div id="HelpBtn">
        <div>
      <PageBtn onClick={()=>{
          if(i>1){setI(i-1);}
        }} ><MdIcons.MdArrowBackIos/></PageBtn>
        </div>
        <div>
        <PageNum>{i} / 7</PageNum>
        </div>
        <div>
        <PageBtn onClick={()=>{
          if(i<7){
            setI(i+1);
          }
        }} ><MdIcons.MdArrowForwardIos/></PageBtn>
        </div>
      </div>
      </div>
      <div id="HelpImg" style={{display:"flex" ,height:"400px"}}>
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