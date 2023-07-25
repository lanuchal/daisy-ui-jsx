import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { active } from "../stores/MenuStateSlice";
import {
  BiSolidHome,
  BiSolidIdCard,
  BiSolidNote,
  BiSolidWidget,
  BiLogOut,
} from "react-icons/bi";

function Menu() {
  const menuStateStore = useSelector((state) => state.menuStateStore);
  const dispatch = useDispatch();

  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  useEffect(() => {
    const parts = currentPath.split("/");
    const result = parts[parts.length - 1];

    dispatch(active({ key: result }));
    setMenuPage(result === "login" || result === "register");
  }, [currentPath]);

  const [menuPage, setMenuPage] = useState(false);

  return (
    <div className="box-menu bg-base-100 rounded-box text-center py-5 shadow-xl">
      <span className="text-5xl">
        <b className="flex justify-center items-center">
          <BiSolidWidget />
          <span className="text-lg ms-2">ระบบจัดการภายใน</span>
        </b>
      </span>
      <div className="ul-menu">
        <ul className="menu w-64">
          <li className="mt-2">
            <Link
              to={"/system/home"}
              className={`${
                menuStateStore.home || currentPath == "" ? "active" : ""
              }`}
            >
              <BiSolidHome /> Home
            </Link>
          </li>

          <li className="mt-1">
            <Link
              to={"/system/card"}
              className={`${
                menuStateStore.card || currentPath == "" ? "active" : ""
              }`}
            >
              <BiSolidIdCard /> Card
            </Link>
          </li>
          <li className="mt-1">
            <details open={menuPage}>
              <summary>
                <BiSolidNote /> Pages
              </summary>
              <ul>
                <li className="mt-1">
                  <Link
                    to={"/system/login"}
                    className={`${
                      menuStateStore.login || currentPath == "" ? "active" : ""
                    }`}
                  >
                    login
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/system/register"}
                    className={`${
                      menuStateStore.register || currentPath == ""
                        ? "active"
                        : ""
                    }`}
                  >
                    register
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <button className="btn btn-sm  absolute bottom-3 left-2 z-40 w-60">
        <BiLogOut /> logout
      </button>
    </div>
  );
}

export default Menu;
