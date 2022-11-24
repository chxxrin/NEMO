import { useState, useEffect } from "react";
import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps"; // 패키지 불러오기
import "../css/Map.css";
import "../css/Navbar.css";
import jsonData from "./map_info.json";
import Storelogo from "../assets/naecut.png";
import { json } from "react-router";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import NavbarMap from "../components/NavbarMap";
import { IoMdNotificationsOff } from "react-icons/io";
import * as MdIcons from "react-icons/md";
import axios from "axios";
const NAVERMAP_API_ID = process.env.REACT_APP_NAVERMAP_API_KEY;

//test
export function Zido() {
  var jeju = new window.naver.maps.LatLng(33.3590628, 126.534361);
  return <div>{jeju}</div>;
}
//마커띄우기
export function GetMarker({ parentGetmarkerIndex }) {
  let [markers, setMarkers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = { search: "서울" };

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        setError(null);
        setMarkers(null);
        setLoading(true);
        //const response = await axios.get(API + "/studio/");
        const response = await axios.get("studio/", { params });
        setMarkers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchMarkers();
  }, []);
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!markers) return <div>no studios</div>;
  return (
    <div>
      {markers.map((a) => (
        <Marker
          key={a.id}
          position={new window.naver.maps.LatLng(a.latitude, a.longitude)}
          animation={0}
          onClick={() => {
            console.log(a.id);
            parentGetmarkerIndex(a.id);
          }} // console.log 필수
        ></Marker>
      ))}
    </div>
  );
}
// 아래꺼 무시
export function SearchBar({ parentFunction }) {
  let [search, setSearch] = useState("");
  return (
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
          검색
        </button>
      </div>
    </div>
  );
}
export function NaverMapAPI() {
  let [diff, setDiff] = useState(0); // 마커 인덱스 구분하기 위한 state 변수
  let [index, setIndex] = useState(0); // all 마커 인덱스 구분하기 위한 state 변수
  let [modal, setModal] = useState(false);
  let [trick, setTrick] = useState(0);
  let navigate = useNavigate();
  let [markers, setMarkers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let [result, setResult] = useState(null);
  let [flag, setFlag] = useState(false);
  let [storeresult, setStoreresult] = useState(0);
  const parentFunction = (x) => {
    console.log(x);
  };

  const parentGetmarkerIndex = (x) => {
    setIndex(x);
    console.log(index);
    setFlag(true);
    console.log(flag);
    //const URL = API + "/studio/"+x+"/";

    const onestudio = async () => {
      try {
        setError(null);
        //setStoreresult(null);
        setLoading(true);
        const response = await axios.get("studio/" + x);
        setStoreresult(response.data);
        console.log(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    onestudio();
    //const response = axios.get(URL);
    //console.log(response.data.id);
    //setStoreresult(response.data);
    //console.log(storeresult);
  };
  const onTrick = () => {
    if (trick == 0) {
      setTrick(2);
    } else {
      setTrick(0);
    }
  };
  const navermaps = window.naver.maps;
  const [flipped, setFlipped] = useState(true);
  const onFlip = () => {
    setFlipped((current) => !current);
    console.log(flipped);
  };

  const clickedMarker = () => {};
  const params = { search: "서울" };
  const URL = "/studio/";
  // useEffect(() => {
  //   const fetchMarkers = async () => {
  //     try {
  //       setError(null);
  //       setMarkers(null);
  //       setLoading(true);
  //       //const response = await axios.get(API + "/studio/");
  //       const response = await axios.get(URL,{params});
  //       setResult(response.data);
  //       console.log(result[0].address)
  //     } catch (e) {
  //       setError(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchMarkers();
  // }, []);
  //여기서부터 빡코딩

  // const dataList = jsonData.positions;
  // {
  //   dataList.map(function(a,i){
  //     return(
  //       <div>
  //         {a[i].index}
  //       </div>
  //     )
  //   })
  // }
  //
  const aaa = () => {
    console.log(result[0].address);
  };

  return (
    <div>
      <div>
        <div className="map-navbar">
          <NavbarMap>
            <SearchBar parentFunction={parentFunction}></SearchBar>
          </NavbarMap>
        </div>
        <div className="btns">
          <button className="like-btn">즐겨찾기</button>
          <button className="brand-btn">브랜드</button>
        </div>
      </div>
      <div className="navermap">
        {/* id="overmap"  */}
        <NaverMap
          mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
          style={{
            width: "100%", // 네이버지도 가로 길이
            height: "100vh", // 네이버지도 세로 길이 원래는 75%
            position: "relative",
            hidden: flipped,
          }}
          defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
          defaultZoom={13} // 지도 초기 확대 배율
        >
          <div id="undermap" style={{ position: "absolute" }}></div>

          <div onClick={() => setTrick(!trick)}>
            <p>{trick}</p>
            {jsonData.positions.map((a) => (
              <Marker
                key={a.index}
                position={new window.naver.maps.LatLng(a.lat, a.lng)}
                animation={trick}
                onClick={() => {
                  setDiff(a.index);
                }}
              ></Marker>
            ))}
          </div>
          <GetMarker parentGetmarkerIndex={parentGetmarkerIndex}></GetMarker>
        </NaverMap>
      </div>
      {/* 강제랜더링/새로고침버튼 */}
      {/* <div className="new-box">
        <button
          onClick={() => {
            onTrick();
          }}
          className="new-btn"
        >
          <MdIcons.MdAutorenew />
        </button>
      </div> */}



      {/* 상세페이지요약 */}
      {flag === true ? (
        <div className="StoreBigBox" storeresult={storeresult}>
          <div className="StoreContainer">
            <button
              className="StoreBorder"
              onClick={() => {
                navigate(`/maphis/${storeresult.id}`, {
                  state: { storeresult: storeresult },
                });
              }}
            >
              <div className="leftbox">
                <div className="StoreCompany">{storeresult.company}</div>
                <div className="StoreName">{storeresult.name}</div>
                <div>{storeresult.address}</div>
                <div>TEL : {storeresult.contact}</div>
              </div>

              <div className="rightbox">
                <img id="StoreImg" src={Storelogo}></img>
              </div>
            </button>
          </div>

          {/* <div className="StoreContainer">
            <button
              className="StoreBorder"
              onClick={() => {
                navigate("/maphis", { state: { storeresult: storeresult } });
              }}
            >
              <div className="StoreLeftBox">
                <img id="StoreImg" src={Storelogo}></img>
              </div>
              <div className="StoreRightBox">
                <ul id="StoreList">
                  <li id="StoreName">
                    <p>{storeresult.company}</p>
                  </li>
                  <li id="StoreName">
                    <p>{storeresult.name}</p>
                  </li>
                  <li>
                    <p>{storeresult.address}</p>
                  </li>
                  <li>
                    <p>TEL : {storeresult.contact}</p>
                  </li>
                </ul>
              </div> */}
          {/* <button onClick={() => {navigate('/maphis', {state:{diff:diff}})}} >상세</button> */}
          {/* </button>
          </div> */}
        </div>
      ) : null}
    </div>
  );
}
export default function Map() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={NAVERMAP_API_ID} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}
