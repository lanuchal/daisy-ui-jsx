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
  BiLock,
  BiUserPlus,
} from "react-icons/bi";
import WarningAlert from "../containers/alerts/WarningAlert";
import { handleLogout } from "../stores/LoginSlice";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { hiddenMenu, showMenu } from "../stores/MenuSlice";
function Menu() {
  const menuStateStore = useSelector((state) => state.menuStateStore);
  const menuStore = JSON.parse(useSelector((state) => state.menuStore.value));
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

  const clickLogout = () => {
    dispatch(handleLogout());
  };

  const handelSwapMenu = (e) => {
    if (e.target.checked) {
      dispatch(hiddenMenu());
    } else {
      dispatch(showMenu());
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowWidth < 980) {
    console.log("asdasd");
  }

  return (
    <div
      className={`box-menu bg-base-100 rounded-box text-center py-5 shadow-xl   ${
        menuStore ? "w-64 " : "w-14"
      } duration-200`}
    >
      <div>
        <div className="flex gap-x-3 items-center justify-cente">
          <div
            className={`cursor-pointer duration-300 text-5xl  ${
              menuStore ? "ps-10" : "ps-1"
            }`}
          >
            <BiSolidWidget className="menu-head" />
          </div>

          <h1
            className={`origin-left font-mededium text-xl duration-100 ${
              !menuStore && "scale-0"
            }  `}
          >
            Dashborad
          </h1>
        </div>
        <div className="mt-5 px-5">
          <hr />
        </div>
      </div>

      <div
        className={`absolute ${
          menuStore ? "-right-3  top-16 mt-2" : "-right-3  top-12 mt-8"
        }  duration-300`}
      >
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handelSwapMenu}
            defaultChecked={!menuStore}
          />

          <div
            className={`swap-on fill-current rounded-full bg-base-100 p-1.5`}
          >
            <AiFillCaretRight />
          </div>

          <div
            className={`swap-off fill-current rounded-full bg-base-100 p-1.5`}
          >
            <AiFillCaretLeft />
          </div>
        </label>
      </div>
      <div className="ul-menu">
        <ul className="menu  menu-md ">
          <li className="mt-1">
            <Link
              to={"/home"}
              className={`duration-300 ${
                !menuStore ? "w-10 ps-3.5" : "w-full"
              } ${
                menuStateStore.home || currentPath == "" ? "active" : ""
              } duration-300`}
            >
              <BiSolidHome />
              <p className={`${!menuStore && "scale-0"} duration-300`}>Home</p>
            </Link>
          </li>

          <li className="mt-1">
            <Link
              to={"/card"}
              className={`duration-300 ${
                !menuStore ? "w-10 ps-3.5" : "w-full"
              } ${menuStateStore.card ? "active" : ""} `}
            >
              <BiSolidIdCard />
              <p className={`${!menuStore && "scale-0"} duration-300`}>Card</p>
            </Link>
          </li>
          <li className="mt-1">
            <details open={menuPage}>
              <summary className={`${!menuStore ? "w-10 ps-3.5" : "w-full"}`}>
                <BiSolidNote />
                <p className={`${!menuStore && "scale-0"} duration-300`}>
                  Pages
                </p>
              </summary>
              <ul className={`${!menuStore && "-ms-2"} `}>
                <li className="mt-1">
                  <Link
                    to={"/login"}
                    className={`${!menuStore ? "w-10 ps-3.5" : "w-full"} ${
                      menuStateStore.login && "active"
                    }`}
                  >
                    <BiLock />
                    <p className={`${!menuStore && "scale-0"} duration-300`}>
                      login
                    </p>
                  </Link>
                </li>
                <li className="mt-1">
                  <Link
                    to={"/register"}
                    className={`${!menuStore ? "w-10 ps-3.5" : "w-full"} ${
                      menuStateStore.register && "active"
                    }`}
                  >
                    <BiUserPlus />
                    <p className={`${!menuStore && "scale-0"} duration-300`}>
                      register
                    </p>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <button
        className={`btn btn-sm  absolute bottom-3 left-2 z-40 ${
          !menuStore ? "w-10 pt-2" : "w-60"
        }`}
        onClick={() => window.modal_warning.showModal()}
      >
        <BiLogOut />

        <p className={`${!menuStore && "scale-0"} duration-300`}>ออกจากระบบ</p>
      </button>

      <WarningAlert msg="ยืนยันการออกจากระบบ" actions={clickLogout} />
    </div>
  );
}

export default Menu;
