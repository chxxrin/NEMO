import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryEdit from "../pages/HistoryEdit";
import HistoryView from "../pages/HistoryView";

const Router = ({ user }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/history/view" element={<HistoryView user={user} />} />
        <Route path="/history/edit" element={<HistoryEdit user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
