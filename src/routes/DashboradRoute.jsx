import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "../common/Page404";
import Navbar from "../common/Navbar";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import CardController from "../containers/controllers/CardController";

function DashboradRoute() {
  return (
    <div className="bg-base-200 box-dashboard">
      <Menu />
      <Navbar />
      <div className="box-content">
        <div className="p-2">
          <Routes>
            <Route path="/system/card" element={<CardController />} />
            <Route path="/system/*" element={<Page404 />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboradRoute;
