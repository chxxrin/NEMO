import { useState,useEffect } from 'react';
import React from 'react';
import { json } from 'react-router';
import jsonData from "./map_info.json";
import Storelogo from '../assets/naecut.png';
import { Routes, Route, Link , useNavigate, Outlet,useLocation } from 'react-router-dom'
import '../css/MapHis.css';


export function MapHis(){
    const location = useLocation();
    const diff = location.state.diff;
  

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
                        <p className="StoreName">{jsonData.positions[diff].name}</p>
                    </li>
                    <li>
                        <p>{jsonData.positions[diff].address}</p>
                    </li>
                    <li>
                        <p>TEL : {jsonData.positions[diff].contact}</p>
                    </li>
                </ul>
                </div>
                </div>
                
            </div>
            
            <div className="PictureList">
            <div id="HistoryTitle">History</div>

            

                <div id="Picture1">사진1</div>
                <div id="Picture2">사진2</div>
                <div id="Picture3">사진3</div>
                <div id="Picture4">사진 추가</div> 
            </div>

        </div>
    )
}

function HistoryPicture(props) {
    return (
        <div>
            사진1
        </div>
    )
}
export default MapHis;