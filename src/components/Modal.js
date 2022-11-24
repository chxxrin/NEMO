import React from "react";
import "../css/Modal.css";
import { useState } from "react";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'; 
import { HelpData } from "./HelpData";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, next } = props;
  const navigate = useNavigate();
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {/* {header} */}
            <div className="pre-next">
            
             {HelpData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.img}
                  </Link>
                </li>
              );
            })}

            <Nav.Link onClick={()=>{ navigate('-1')}}>
              <IoIcons.IoIosArrowBack/>
            </Nav.Link>

            <Nav.Link onClick={()=>{ navigate('1')}}>
              <IoIcons.IoIosArrowForward/>
            </Nav.Link>
            </div>

          </header>
          <main>{props.children}</main>
          <footer>
            {/* <button className="close" onClick={close}>
              close
            </button> */}
            <button className="close" onClick={close}>
              &times;
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;