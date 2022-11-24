import { useState, useEffect } from "react";
import React from "react";
import { json } from "react-router";
import jsonData from "./map_info.json";
import NaecutLogo from "../assets/naecut.png";
import HarufilmLogo from "../assets/harufilm.png";
import PhotograyLogo from "../assets/photogray.png";
import PhotoismLogo from "../assets/photoism.png";
import PhotomaticLogo from "../assets/photomatic.png";
import PhotosignatureLogo from "../assets/signature.png";
import styled from "styled-components";
import History from "../components/History";
import HistoryView from "./HistoryView";
import * as AiIcons from "react-icons/ai";
import NavbarNone from "../components/NavbarNone";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import "../css/MapHis.css";
import "../css/History.css";

export function MapHis() {
  const location = useLocation();
  const storeresult = location.state.storeresult;
  console.log(location);
  console.log("storeresult", storeresult);

  const logoImgSelector = (param) => {
    if (param === "인생네컷") {
      return (
        <img
          style={{ width: "120px", height: "120px", objectfit: "contain" }}
          src={NaecutLogo}
        />
      );
    } else if (param === "하루필름") {
      return <LogoImg src={HarufilmLogo} />;
    } else if (param === "포토그레이") {
      return <LogoImg src={PhotograyLogo} />;
    } else if (param === "포토이즘") {
      return <LogoImg src={PhotoismLogo} />;
    } else if (param === "포토매틱") {
      return <LogoImg src={PhotomaticLogo} />;
    } else if (param === "포토시그니처") {
      return <LogoImg src={PhotosignatureLogo} />;
    }
  };

  return (
    <div>
      <NavbarNone />

      <div id="StoreInfo">
        <div>{logoImgSelector(storeresult.company)}</div>
        <div>
          <div className="leftbox">
            <div className="StoreCompany">{storeresult.company}</div>
            <div className="StoreName">{storeresult.name}</div>
            <div>{storeresult.address}</div>
            <div>TEL : {storeresult.contact}</div>
          </div>
        </div>
      </div>

      <div className="PictureList">
        <div className="HistoryTitle">HISTORY</div>
        <div className="picture-container">
          <div className="picture-item">
            <Link to="/history/create">
              <AiIcons.AiOutlinePlus className="icon-plus" />
            </Link>
          </div>
          <div className="picture-item"></div>
          <div className="picture-item"></div>
          <div className="picture-item"></div>
        </div>
      </div>
    </div>
  );
}

export default MapHis;

const LogoImg = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 150px;
  height: 150px;
  objectfit: "contain";
`;
