import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Menu from "../common/Menu";
import { useSelector } from "react-redux";

function DashboardLayout() {
  const menuStore = JSON.parse(useSelector((state) => state.menuStore.value));
  return (
    <div className="bg-base-200 ">
      <div className="flex">
        <div
          className={`${menuStore ? "w-72" : "w-14"} bg-base-200 duration-300`}
        >
          <Menu />
        </div>
        <div className="box-content bg-base-200 flex-1">
          <Navbar />
          <div
            className={`p-2 box-content-in ${
              menuStore ? "ms-5" : "ms-6"
            } duration-300`}
          >
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
