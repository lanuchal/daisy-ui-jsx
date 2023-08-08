import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../containers/_common/Navbar";
import Footer from "../containers/_common/Footer";
import Menu from "../containers/_common/Menu";
import { useSelector } from "react-redux";

function DashboardLayout() {
  const menuStore = JSON.parse(useSelector((state) => state.menuStore.value));
  return (
    <div className="bg-base-200">
      <div className="flex">
        <div
          className={`${
            menuStore ? "w-80" : "w-14"
          } bg-base-200 duration-300 boxs-menu`}
        >
          <Menu />
        </div>
        <div className=" bg-base-200 flex-1 min-h-screen relative pb-16">
          <Navbar />
          <div
            className={` boxs-content p-2 flex  ${
              menuStore ? "ms-5" : "ms-6"
            } duration-300`}
          >
            <Outlet />
          </div>
          <div className="box-footer w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
