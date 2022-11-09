// import '../css/Help.css';
import * as BsIcons from "react-icons/bs";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'; 

let PageBox = styled.div` 
    display: block;
    text-align: right;
    margin: 10px;
    `

let PageBtn = styled.button` 
    background-color: #ffffff;
    border: none;
    font-size: 20px;
    color: #8d4bf6;
    cursor: pointer;
    float: right;
`
let PageNum = styled.div` 
    text-align: right;
    float: right;
`
function Help(){
    const navigate = useNavigate();
          
    return (
        

        <div>
            <PageBox>
                <PageBtn>
                    <Nav.Link onClick={()=>{ navigate('1')}}><BsIcons.BsCaretRightFill /></Nav.Link>
                </PageBtn>
                <PageNum>
                    1/5
                </PageNum>
            </PageBox>
            <div>
            내용설명스크린샷
            </div>
        </div>
    )
};


export default Help;