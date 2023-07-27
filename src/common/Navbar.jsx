import React from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../stores/LoginSlice";
import { handleChangeTheme } from "../stores/ThemeSlice";
import { showMenu, hiddenMenu } from "../stores/MenuSlice";

import profile from "/src/assets/img/eskimo_496436.png";

import {
  BiSolidBrushAlt,
  BiBrush,
  BiLogOut,
  BiUser,
  BiSolidKey,
} from "react-icons/bi";
import { FcTemplate } from "react-icons/fc";

function Navbar() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.themeStore.value);

  const clickChangeTheme = (data) => {
    dispatch(handleChangeTheme(data));
  };

  const clickShowMenu = () => {
    dispatch(showMenu());
  };

  const dataTheme = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  return (
    <div className="box-nav ">
      <div className="navbar rounded-box box-nav-in">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => clickShowMenu()}
          >
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>

                <span className="badge badge-sm indicator-item bg-orange-600 text-white">
                  8
                </span>
              </div>
            </label>

            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn  btn-ghost btn-circle text-primary text-2xl"
              >
                <BiBrush />
              </label>
            </div>
            <div className="drawer-side z-40">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

              <div className="menu p-4  h-full    p-1.5 ">
                <div className="bg-base-100 h-full text-base-content w-80 block rounded-box">
                  <h2 className="text-center my-4 px-5">
                    {" "}
                    <span className="flex justify-center items-center text-5xl mt-3">
                      <FcTemplate />{" "}
                      <b className="ms-3 text-2xl">Theme Custom</b>
                      <br />
                    </span>{" "}
                    <span className="flex justify-center items-center mb-3">
                    theme : <b className="text-primary ms-2"> {theme}</b>
                    </span>{" "}
                    <hr />
                  </h2>

                  <div className="flex flex-wrap justify-between m-3 px-4">
                    {dataTheme.map((themeInArray, key) => {
                      const maxLength = 7;
                      var valTheme;
                      if (themeInArray.length > maxLength) {
                        valTheme = themeInArray.slice(0, 5) + "..";
                      } else {
                        valTheme = themeInArray;
                      }

                      if (themeInArray) {
                        return (
                          <div
                            className="tooltip w-28 m-1 "
                            data-tip={themeInArray}
                            key={key}
                          >
                            <button
                              className={`btn btn-sm btn-block ${
                                themeInArray == theme && "btn-primary"
                              }`}
                              onClick={() => clickChangeTheme(themeInArray)}
                            >
                              <BiSolidBrushAlt />
                              {valTheme}
                            </button>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profile} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  <BiUser />
                  โปรไฟล์
                </a>
              </li>
              <li>
                <a className="justify-between">
                  <BiSolidKey />
                  เปลี่ยนรหัสผ่าน
                </a>
              </li>
              <li>
                <button
                  onClick={() => window.modal_warning.showModal()}
                  className="justify-between"
                >
                  <BiLogOut /> ออกจากระบบ
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
