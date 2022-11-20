import { useState,useEffect } from 'react';
import React from 'react';
import { json } from 'react-router';
import jsonData from "./map_info.json";
import Storelogo from '../assets/naecut.png';
import '../css/MapHis.css';


export function MapHis(){
    return(
        <div>
            <div className="flex-container" >
                <div className="flex-item">
                    <div>
                <img src={Storelogo} style={{width: 400, height: 200}}></img>
                </div>
                <div>
                <ul id="StoreList">
                    <li>
                        <p>{jsonData.positions[0].name}</p>
                    </li>
                    <li>
                        <p>{jsonData.positions[0].address}</p>
                    </li>
                    <li>
                        <p>TEL : {jsonData.positions[0].contact}</p>
                    </li>
                </ul>
                </div>
                </div>
                
            </div>

            <div className="flex-container">
                <div>사진1</div>
                <div>사진2</div>
                <div>사진3</div>
                <div>사진 추가</div>
            </div>

        </div>
    )
}

export default MapHis;