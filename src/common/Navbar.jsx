import React from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../stores/LoginSlice";
import { handleChangeTheme } from "../stores/ThemeSlice";

import { BiSolidBrushAlt, BiBrush } from "react-icons/bi";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.themeStore.value);

  const clickChangeTheme = (data) => {
    dispatch(handleChangeTheme(data));
  };

  const handelLogout = () => {
    dispatch(handleLogout());
    navigate("/");
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
      <div className="navbar rounded-box">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm  btn-primary text-lg">
              <BiBrush /> <span className="text-sm">{theme}</span>
            </label>

            <div
              tabIndex={0}
              className="mt-3 z-[5] card card-compact dropdown-content w-96 bg-base-100 shadow"
            >
              <div className="card-body">
                <div class="grid grid-cols-3 gap-3">
                  {dataTheme.map((themeInArray, index) => {
                    const maxLength = 7;
                    var valTheme;
                    if (themeInArray.length > maxLength) {
                      valTheme = themeInArray.slice(0, 5) + "..";
                    } else {
                      valTheme = themeInArray;
                    }

                    if (themeInArray) {
                      return (
                        <div className="lg:tooltip" data-tip={themeInArray}>
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

                <span className="badge badge-sm indicator-item">8</span>
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

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/src/assets/img/eskimo_496436.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handelLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
