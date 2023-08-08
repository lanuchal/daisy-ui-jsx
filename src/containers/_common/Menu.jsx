import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { active } from "../../stores/MenuStateSlice";
import { BiSolidWidget, BiLogOut } from "react-icons/bi";
import { handleLogout } from "../../stores/LoginSlice";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { hiddenMenu, showMenu } from "../../stores/MenuSlice";
import WarningAlert from "../../utils/WarningAlert";
import Loading from "./Loading";

function Menu() {
  const menuStateStore = useSelector((state) => state.menuStateStore);

  const menuStore = JSON.parse(useSelector((state) => state.menuStore.value));

  const dispatch = useDispatch();

  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  useEffect(() => {
    const parts = currentPath.split("/");
    const subPath = parts.length == 2 ? parts[1] : false;
    const title = parts[0];
    dispatch(active({ title: title, open: subPath }));
  }, [currentPath]);

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
          menuStore ? "-right-3  top-16 mt-2.5" : "-right-3  top-12 mt-7"
        }  duration-300 menu-icons-switch`}
      >
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handelSwapMenu}
            checked={!menuStore}
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
          {menuStateStore.map((index, key) => {
            var routeMain = index.route;
            if (index.sub.length > 0) {
              return (
                <li className="mt-1" key={key}>
                  <details open={index.open}>
                    <summary
                      className={`${!menuStore ? "w-10 ps-3.5" : "w-full"}`}
                    >
                      {index.icons}
                      <p className={`${!menuStore && "scale-0"} duration-300`}>
                        {index.title}
                      </p>
                    </summary>
                    <ul className={`${!menuStore && "-ms-2"} `}>
                      {index.sub.map((index, key) => {
                        return (
                          <li className="mt-1" key={key}>
                            <Link
                              to={routeMain + "/" + index.route}
                              className={`${
                                !menuStore ? "w-10 ps-3.5" : "w-full"
                              } ${index.open && "active"}`}
                            >
                              {" "}
                              {index.icons}
                              <p
                                className={`${
                                  !menuStore && "scale-0"
                                } duration-300`}
                              >
                                {index.title}
                              </p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            }

            return (
              <li className="mt-1" key={key}>
                <Link
                  to={routeMain}
                  className={` transition ${
                    !menuStore ? "w-10 ps-3.5" : "w-full"
                  } ${!index.open == "" ? "active" : ""}   duration-300`}
                >
                  {index.icons}
                  <p className={`${!menuStore && "scale-0"} duration-300`}>
                    {index.title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className={`btn btn-sm  absolute bottom-3 left-2 z-40 ${
          !menuStore ? "w-10 pt-2" : "w-60"
        } duration-300`}
        onClick={() => window.modal_warning.showModal()}
      >
        <BiLogOut />

        <p className={`${!menuStore ? "scale-0" : "duration-300"}`}>
          ออกจากระบบ
        </p>
      </button>

      <WarningAlert msg="ยืนยันการออกจากระบบ" actions={clickLogout} />
    </div>
  );
}

export default Menu;
