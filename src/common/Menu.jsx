import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { active } from "../stores/MenuStateSlice";
import {
  BiSolidHome,
  BiSolidIdCard,
  BiSolidNote,
  BiSolidWidget,
  BiLogOut,
} from "react-icons/bi";
import WarningAlert from "../containers/alerts/WarningAlert";
import { handleLogout } from "../stores/LoginSlice";

function Menu() {
  const menuStateStore = useSelector((state) => state.menuStateStore);

  const menuStore = useSelector((state) => state.menuStore);

  console.log("menuStore", menuStore);
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  useEffect(() => {
    const parts = currentPath.split("/");
    const result = parts[parts.length - 1];

    dispatch(active({ key: result }));
    setMenuPage(result === "login" || result === "register");
  }, [currentPath]);

  const [menuPage, setMenuPage] = useState(false);

  const clickLogout = () => {
    dispatch(handleLogout());
  };

  return (
    <div
      // style={menuStore}
      className="box-menu bg-base-100 rounded-box text-center py-5 shadow-xl transition duration-300"
    >
      <span className="text-5xl">
        <div className="text-center">
          <div className="">
            <BiSolidWidget className="menu-head" />
          </div>

          <b className=" ms-2 text-2xl">ระบบจัดการภายใน</b>
        </div>
        <div className="mt-3 px-2">
          <hr />
        </div>
      </span>
      <div className="ul-menu">
        <ul className="menu w-64 menu-md ">
          <li className="mt-2">
            <Link
              to={"/home"}
              className={`${
                menuStateStore.home || currentPath == "" ? "active" : ""
              }`}
            >
              <BiSolidHome /> Home
            </Link>
          </li>

          <li className="mt-1">
            <Link
              to={"/card"}
              className={`${menuStateStore.card ? "active" : ""}`}
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
                    to={"/login"}
                    className={`${menuStateStore.login && "active"}`}
                  >
                    login
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/register"}
                    className={`${menuStateStore.register && "active"}`}
                  >
                    register
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-sm  absolute bottom-3 left-2 z-40 w-60"
        onClick={() => window.modal_warning.showModal()}
      >
        <BiLogOut /> ออกจากระบบ
      </button>

      <WarningAlert msg="ยืนยันการออกจากระบบ" actions={clickLogout} />
    </div>
  );
}

export default Menu;
