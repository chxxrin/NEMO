import React, { Component } from "react";
import { Link } from "react-router-dom";
import History from "../components/History";
import HistoryEdit from "./HistoryEdit";
import HistoryTop from "../components/HistoryTop";
import { MdPersonAddAlt1 } from "react-icons/md";

const HistoryView = ({ user }) => {
  return (
    <div>
      <HistoryTop />
      <History user={user} trace="View" />
      <button type="button" id="invite">
        <MdPersonAddAlt1 />
      </button>
      <Link to="/history/edit">
        <button type="button" id="edit">
          수정하기
        </button>
      </Link>
    </div>
  );
};

export default HistoryView;
