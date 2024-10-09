import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFn, color, icon, dotColor }) => {
  return (
    <>
      <TooltipComponent content={title} position="BottomCenter">
        <button
          type="button"
          onClick={customFn}
          style={{ color }}
          className="relative text-xl rounded-full p-3 hover:bg-light-gray "
        >
          <span
            style={{ background: dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          />
          {icon}
        </button>
      </TooltipComponent>
    </>
  );
};

function Navbar() {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton
          title="Menu"
          customFn={() => {
            setActiveMenu((prev) => !prev);
          }}
          color="blue"
          icon={<AiOutlineMenu />}
        />
        <div className="flex">
          <NavButton
            title="Cart"
            color="blue"
            customFn={() => handleClick("cart")}
            icon={<FiShoppingCart />}
          />
          <NavButton
            title="Chat"
            customFn={() => handleClick("chat")}
            color="blue"
            dotColor="#03C9D7"
            icon={<BsChatLeft />}
          />
          <NavButton
            title="Notifications"
            customFn={() => handleClick("notification")}
            color="blue"
            dotColor="#03C9D7"
            icon={<RiNotification3Line />}
          />

          <TooltipComponent content="Profile" position="BottomCenter">
            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="avatar"
              />

              <div className="flex gap-1 items-center">
                <span className="text-gray-400 text-14">Hi,</span>
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Micheal
                </span>
                <MdKeyboardArrowDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </TooltipComponent>

          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
