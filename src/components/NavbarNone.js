import React, { useState } from "react";

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

export default function NavbarNone() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

    const navigateToAlarm = () => {
        navigate("/alarm");
      };

    const navigateToLogin = () => {
        navigate("/login");
      };

  return (
    <>
      <IconContext.Provider value={{ color: "#7D6E83" }}>
        {/* All the icons now are white */}
        <div className="navbar-none">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
              <Link to="/alarm" className="alarm">
                <div className="alarm-style">
                 <BiIcons.BiBell />
                </div>
              </Link>
            </li>

            <div className="profile-box">
              <Link to="/login" className="login" style={{fontSize:"4rem"}}>
                <BsIcons.BsPersonCircle/>
              </Link>
              <Link to="/login" className="letslogin">
                로그인하세요
              </Link>
            </div>

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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}