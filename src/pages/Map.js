import { useState,useEffect } from 'react';
import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker,Circle} from 'react-naver-maps'; // 패키지 불러오기
import '../css/Map.css';
import jsonData from "./map_info.json";
import Storelogo from '../assets/naecut.png';
import { json } from 'react-router';
const NAVERMAP_API_ID = process.env.REACT_APP_NAVERMAP_API_KEY;

//test

export function Zido(){
  var jeju = new window.naver.maps.LatLng(33.3590628, 126.534361);
  return(
    <div>{jeju}</div>
  )
}

export function AddMarker({parentMarker}){

    return(
      <div>
        
        {jsonData.positions.map((a) => (
          <Marker key={a.index}
          position={new window.naver.maps.LatLng(a.lat,a.lng)}
        animation={1}
        onClick={() => {console.log(a.index);
          parentMarker(a.index);
        }}
          >
            
          </Marker>
        ))}
        
        </div>
    )
}

export function SearchBar({parentFunction}){
  let [search, setSearch] = useState('');
  return(
    <div className="SearchBar">
    <input className="SearchInput" type="text" onChange={(e) => {
      setSearch(e.target.value);
      
    }}></input>
    <button className="SearchButton" onClick={() =>{
      parentFunction(search);
    }} >검색</button>

    </div>
  )
}

export function NaverMapAPI() {
  let[diff,setDiff] = useState(0); // 마커 인덱스 구분하기 위한 state 변수
  let[modal,setModal] = useState(false);
  let[trick,setTrick] = useState(0);

  
  const parentFunction = (x) => {
    console.log(x);
  };
  const parentMarker = (x) =>{
    console.log(x);
    setDiff(x);
  }
  const onTrick = () =>{
    if(trick==0){
      setTrick(2);
    }
    else{
      setTrick(0);
    }
  }
  const navermaps = window.naver.maps;
  const [flipped,setFlipped] = useState(true);
    const onFlip =() =>{
        setFlipped(current => !current);
        console.log(flipped)
      }
  
    const clickedMarker= () =>{
        
    }

    
  return (
    
    <div>

    <SearchBar parentFunction={parentFunction}></SearchBar>
      <button>즐겨찾기</button>
      <button>브랜드</button>

    
    
    <NaverMap id="overmap" 
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '75vh', // 네이버지도 세로 길이
        position:"relative",
        hidden: flipped,
        zIndex: 1

      }}
      zIndex={1}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
    >

    {/* <div id="undermap" style={{position:"absolute"}}>

        <button >hihi</button>
    </div>
    <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {console.log(this.key)}}
      />
      <Marker
        key={2}
        position={new navermaps.LatLng(37.561229, 126.998205)}
        animation={2}
        onClick={() => {console.log("hi")}}
      />
        <Marker
    position={{ lat: 37.3595704, lng: 127.105399 }}
    onClick={onFlip}
    />
    
    <div onClick={() => setTrick(!trick)} >
        <p>{trick}</p>
        {    
        jsonData.positions.map((a) => (
          
          <Marker key={a.index}
          position={new window.naver.maps.LatLng(a.lat,a.lng)}
        animation={trick}
        onClick={() => {setDiff(a.index);}}
          >
            
          </Marker>
        ))
        }   
    </div>  

    <div className="StoreInfo" style={{ position:"absolute" ,zIndex: 10}}>
            <div id="StoreLeftBox">
                <img id="StoreImg" src = {Storelogo}></img>
            </div>
            <div id="StoreRightBox">
                <ul id="StoreList">
                    <li>
                        <p>{jsonData.positions[diff].name}</p>
                    </li>
                    <li>
                        <p>{jsonData.positions[diff].address}</p>
                    </li>
                    <li>
                        <p>TEL : {jsonData.positions[diff].contact}</p>
                    </li>
                </ul>
            </div>
            <button onClick={()=> {onTrick()}} >강제렌더링 트릭버튼</button>
        </div>
    
    
    </NaverMap>
    
    <div className="StoreInfo">
            <div id="StoreLeftBox">
                <img id="StoreImg" src = {Storelogo}></img>
            </div>
            <div id="StoreRightBox">
                <ul id="StoreList">
                    <li>
                        <p>{jsonData.positions[diff].name}</p>
                    </li>
                    <li>
                        <p>{jsonData.positions[diff].address}</p>
                    </li>
                    <li>
                        <p>TEL : {jsonData.positions[diff].contact}</p>
                    </li>
                </ul>
            </div>
            <button onClick={()=> {onTrick()}} >강제렌더링 트릭버튼</button>
        </div>
    
    </div>
  );
}

export default function Map() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'2nyiyeu9o7'} // 자신의 네이버 계정에서 발급받은 Client ID
      //ncpClientId={process.env.REACT_APP_NAVERMAP_API_KEY}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />

      
      {console.log(jsonData.positions[0].address)}
      {console.log(process.env.REACT_APP_NAVERMAP_API_KEY)}
      
      
      
    </RenderAfterNavermapsLoaded>
  );
}
