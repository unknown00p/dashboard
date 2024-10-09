import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

function Sidebar() {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-white focus:bg-gray-100 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to={"/"} onClick={() => setActiveMenu(false)}>
              <div className="flex mt-4 ml-4 gap-3 items-center dark:text-white">
                <SiShopware className="w-6 h-6" />
                <span className="text-xl font-extrabold tracking-tight text-slate-900 ">
                  Shoppy
                </span>
              </div>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu((prev) => !prev);
                }}
                className="mt-4 p-4 text-xl hover:bg-light-gray md:hidden block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {links.map((item) => {
              return (
                <div key={item?.id}>
                  <h2 className="text-gray-400 mt-4 m-3 uppercase dark:text-gray-400">
                    {item?.title}
                  </h2>
                  {item?.links?.map((link) => {
                    return (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                        to={`/${link?.name}`}
                        key={link?.id}
                      >
                        {link?.icon}
                        <span className="capitalize">
                          {link?.name}
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
