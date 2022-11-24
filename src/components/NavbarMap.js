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
import "../css/Map.css";
import { BsMusicNote, BsMusicNoteList } from "react-icons/bs";

// Context API
import { useAuthContext } from "../contexts/AuthContext";

export default function NavbarMap({ parentFunction }) {
  const { isAuth, userData, logout } = useAuthContext();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  const navigateToAlarm = () => {
    navigate("/alarm");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };
  let [search, setSearch] = useState("");

  return (
    <>
      <IconContext.Provider value={{ color: "#8861c2" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="map-menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className="SearchContainer">
            <div className="SearchBar">
              <input
                className="SearchInput"
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></input>
              <button
                className="SearchButton"
                onClick={() => {
                  parentFunction(search);
                }}
              >
                <AiIcons.AiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
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

            <hr class="solid"></hr>

            {SidebarData.map((item, index) => {
              return (
                <div>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </div>
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
