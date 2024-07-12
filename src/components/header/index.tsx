import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { BsDiscord } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleMobileMenu, toggleWaitList } from "../../state/global";
import { ROUTES } from "../../constants";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickSignup = () => {
    dispatch(toggleWaitList(true));
  };

  const onClickMobileMenu = () => {
    dispatch(toggleMobileMenu(true));
  };
  return (
    <div className="fixed top-0 z-20 flex justify-between w-full px-6 py-6 border-b md:px-20 bg-gray-2 border-b-gray-1/10">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span className="text-xl font-semibold md:text-2xl">Valyee</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="items-center hidden gap-2 md:flex md:gap-8">
          {ROUTES.map((route, index) => (
            <a href={route.href} key={index}>
              <span className="text-sm md:block md:text-base">
                {route.label}
              </span>
            </a>
          ))}
          <span
            className="text-sm cursor-pointer md:block md:text-base"
            onClick={onClickSignup}
          >
            Log In
          </span>
        </div>
        <button
          className="justify-center items-center px-3 md:px-[15px] py-2 md:py-[14px] text-xs md:text-base text-white font-normal md:font-medium bg-primary-default hover:bg-primary-default/70 rounded-xl cursor-pointer"
          onClick={onClickSignup}
        >
          Sign Up for Free!
        </button>
        <div className="md:hidden" onClick={onClickMobileMenu}>
          <img src="/assets/header/menu.svg" className="w-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
