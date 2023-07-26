import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Menu from "../common/Menu";

function DashboardLayout() {
  return (
    <div className="bg-base-200 box-dashboard">
      <Menu />
      <div className="box-content bg-base-200">
        <Navbar />
        <div className="p-2 box-content-in">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
