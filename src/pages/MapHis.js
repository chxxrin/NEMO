import { useState,useEffect } from 'react';
import React from 'react';
import { json } from 'react-router';
import jsonData from "./map_info.json";
import Storelogo from '../assets/naecut.png';
import History from "../components/History";
import HistoryView from "./HistoryView";
import * as AiIcons from "react-icons/ai";
import { Routes, Route, Link , useNavigate, Outlet,useLocation } from 'react-router-dom'
import '../css/MapHis.css';
import "../css/History.css";



export function MapHis(){
    const location = useLocation();
    const storeresult = location.state.storeresult;
  

    return(
        <div>
            <div className="flex-container" >
                <div id="StoreInfo">
                    <div>
                <img src={Storelogo} style={{width: 300, height: 200}}></img>
                </div>
                <div>
                <ul id="StoreList">
                    <li>
                        <p className="StoreName">{storeresult.name}</p>
                    </li>
                    <li>
                        <p>{storeresult.address}</p>
                    </li>
                    <li>
                        <p>TEL : {storeresult.contact}</p>
                    </li>
                </ul>
                </div>
                </div>
                
            </div>
            
            <div className="PictureList">
                <div className="HistoryTitle">History</div>
                <div className="picture-container">
                    <div className="picture-item">
                        <Link to="/history/create">
                            <AiIcons.AiOutlinePlus className="icon-plus"/>
                        </Link>
                    </div>
                    <div className="picture-item"></div>
                    <div className="picture-item"></div>
                    <div className="picture-item"></div>
                </div>
            </div>
        </div>
    )
}



export default MapHis;