import React, { useState ,useEffect} from "react";
import KakaoLoginBtn from "./KakaoLoginBtn";
import KakaoLoginNavBtn from "./KakaoLoginNavBtn";
import axios from 'axios';
import MapHis from "../pages/MapHis";

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
import "../css/NavbarMap.css";

import { BsMusicNote, BsMusicNoteList } from "react-icons/bs";

// Context API
import { useAuthContext } from "../contexts/AuthContext";

const API = process.env.REACT_APP_API_URL_PROD;

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


  const [studios, setStudios] = useState([])  
  const [query, setQuery] = useState(null)
  useEffect(() => {
      let completed = false;

      async function get() {
          const result = await axios(API + `studio/?search=${query}`)
          if(!completed) {
              setStudios(result.data);
          }
      }
      get()
      return () => {
          completed = true
      }
  }, [query])






  let [diff, setDiff] = useState(0); // 마커 인덱스 구분하기 위한 state 변수
  let [index, setIndex] = useState(0); // all 마커 인덱스 구분하기 위한 state 변수
  let [modal, setModal] = useState(false);
  let [trick, setTrick] = useState(0);
  let [markers, setMarkers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let [result, setResult] = useState(null);
  let [flag, setFlag] = useState(false);
  let [storeresult, setStoreresult] = useState(0);

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
  };




  

  return (
    <>
      <IconContext.Provider value={{ color: "#8861c2" }}>

        <div className="navbar">
          <Link to="#" className="map-menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {/* <div className="SearchContainer">
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
          </div> */}


            <div className="SearchBar">

            <input className="SearchInput"
                    value={query}
                    onChange={e => setQuery(e.target.value)} />
            </div>
  

        <div className="SearchOutput">
            <div>
                {studios.map((studio) => (
                <div key={studio.id} className="output-border">

                  <button
                    className="Search-btn"
                    onClick={(value) => {
                    navigate(`/maphis/${studio.id}`, {
                    state: { storeresult: studio },
                    });
                    }}
                    >
                    {studio.company} {studio.name}<br/>
                    ({studio.address})
                    </button>

                </div>
                ))}
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

            <hr className="solid"></hr>

            {SidebarData.map((item) => {
              return (
                <li key={item.title} className={item.cName}>
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
