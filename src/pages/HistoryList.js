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
  const [histories, setHistories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  let printHistories
  useEffect(() => {
    const fetchHistories = async () => {
      try {
        setError(null)
        setLoading(true)
        const response = await axios
          .get(
            'history/all',
            {
              headers: { 'Access-Control-Allow-Origin': '*' },
            },
            { withCredentials: true }
          )
          .then((res) => {
            setHistories(res.data);
          });
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    fetchHistories()
  }, [])
  let i = 0

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
          )
        })}
      </div>
    </div>
  )
}

export default HistoryList
