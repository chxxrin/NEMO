import React from "react";
import History from "../components/History";
import HistoryTop from "../components/HistoryTop";
import NavbarNone from "../components/NavbarNone";
import "../css/History.css";
import "../css/Navbar.css";

const HistoryList = ({ user }) => {
  return (
    <div className="container">
      <NavbarNone />
      <HistoryTop />
      <History user={user} trace="View" idx={0} />
      <History user={user} trace="View" idx={1} />
    </div>
  );
};

export default HistoryList;
