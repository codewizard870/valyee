import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { BsDiscord } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 z-20 flex justify-between w-full px-6 py-6 border-b md:px-10 md:px-20 bg-gray-2 border-b-gray-1/10">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span className="text-xl font-semibold md:text-2xl">Valyee</span>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 md:gap-8">
          {Routes.map((route, index) => (
            <a href={route.href} key={index}>
              <span className="hidden text-sm md:block md:text-base">{route.label}</span>
              <img src={route.icon} className="w-6 md:hidden" />
            </a>
          ))}
        </div>
        <button className="justify-center items-center px-3 md:px-[15px] py-2 md:py-[14px] text-xs md:text-base text-white font-normal md:font-medium bg-primary-default hover:bg-primary-default/70 rounded-xl cursor-pointer">
          Sign Up for Free!
        </button>
      </div>
    </div>
  );
};

export default Header;

const Routes = [
  {
    label: "Pricing",
    href: "/pricing",
    icon: "/assets/header/pricing.png"
  },
  {
    label: "Blog",
    href: "/blog",
    icon: "/assets/header/blog.png"
  },
  {
    label: "Log In",
    href: "/#",
    icon: "/assets/header/login.png"
  },
];
