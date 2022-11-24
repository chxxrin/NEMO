// import '../css/Help.css';
import * as BsIcons from "react-icons/bs";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {useRef, useState, useEffect } from 'react'
import help1 from '../assets/info1.png'
import help2 from '../assets/info2.png'
import help3 from '../assets/info3.png'
import help4 from '../assets/info4.png'
import help5 from '../assets/info5.png'
import help6 from '../assets/info6.png'
import '../css/Help.css'
const helpingimages = [
  help1,
  help2,
  help3,
  help4,
  help5,
  help6
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
    
    <div style={{overflow:"hidden", scroll:"none"}}>
      <div id="outer">
      <div id="HelpBtn" style={{display:"flex" ,padding: "15% 35% 5% 35%"}}>
      <PageBtn onClick={()=>{
          if(i>1){setI(i-1);}
        }} ><BsIcons.BsCaretLeftFill /></PageBtn>
        
        <PageNum>{i} / 6</PageNum>
        <PageBtn onClick={()=>{
          if(i<6){
            setI(i+1);
          }
        }} ><BsIcons.BsCaretRightFill /></PageBtn>
      </div>
      </div>
      <div id="HelpImg" style={{display:"flex"}}>
        <img  src = {helpingimages[i-1]}></img>
        {/* <img src = {help1}></img> */}
      </div>
    </div>
    
  );
}

export default Help;
