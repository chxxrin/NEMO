import React, { useState } from "react";
import KakaoLoginBtn from "./KakaoLoginBtn";
import KakaoLoginNavBtn from "./KakaoLoginNavBtn";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";

import { useNavigate } from "react-router-dom";
// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "../css/Navbar.css";
import { BsMusicNote, BsMusicNoteList } from "react-icons/bs";

// Context API
import { useAuthContext } from "../contexts/AuthContext";

export default function NavbarNone() {
  const { isAuth, userData, logout } = useAuthContext();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const navigateToAlarm = () => {
    navigate("/alarm");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#8861c2" }}>
        {/* All the icons now are white */}
        <div className="navbar-none">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/map" className="map-logo">
              {/* <img id="logo" src={logo} width="100px"></img> */}
              NEMO
            </Link>
          </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={handleClick} />
              </Link>
              {/* <Link to="/alarm" className="alarm">
                <div className="alarm-style">
                  <BiIcons.BiBell />
                </div>
              </Link> */}
            </li>

            {isAuth ? (
              <div className="login-box">
                <img
                  style={{ borderRadius: "50%", marginBottom: "20px" }}
                  src={userData.avatar}
                ></img>
                <div className="user-name">{userData.name}</div>
              </div>
            ) : (
              <div className="profile-box">
                <Link
                  to="/login"
                  className="login"
                  style={{ fontSize: "4rem" }}
                >
                  <BsIcons.BsPersonCircle />
                </Link>
                <KakaoLoginNavBtn />
              </div>
            )}

            <hr className="solid"></hr>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {isAuth ? (
              <div className="logout-btn" onClick={logout}>
                로그아웃
              </div>
            ) : (
              <div></div>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
