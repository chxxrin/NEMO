import React, { useEffect, useState, useRef } from "react";
import History from "../components/History";
import HistoryTop from "../components/HistoryTop";
import NavbarNone from "../components/NavbarNone";
import HistoryImageViewer from "../components/HistoryImageViewer";
import HistoryInfoViewer from "../components/HistoryInfoViewer";
import HistoryListViewer from "../components/HistoryListViewer";
import "../css/History.css";
import "../css/Navbar.css";
import axios from "axios";

const HistoryList = () => {
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let printHistories;
  useEffect(() => {
    const fetchHistories = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios
          .get(
            "history/all",
            {
              headers: { "Access-Control-Allow-Origin": "*" },
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log("1", res.data);
            setHistories(res.data);
            console.log("2", histories);

            for (const data of res.data) {
              console.log(data.history.title);
            }
          });
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setLoading(false);
    };
    fetchHistories();
  }, []);
  let i = 0;

  console.log(histories);

  // console.log(Object.keys(histories[0].history.title));
  return (
    <div className="container">
      <NavbarNone />
      <HistoryTop />
      <div>
        {Object.values(histories).map((value, i) => {
          return (
            <div>
              {/* <HistoryInfoViewer historyObj={value} trace="list" />{" "} */}
              <HistoryListViewer historyObj={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryList;
