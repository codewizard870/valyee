import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { BsDiscord } from "react-icons/bs";

type HeaderProps = {
  clickWaitlist?: () => void;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Header: React.FC<HeaderProps> = ({ clickWaitlist }) => {
  return (
    <div className="fixed top-0 z-20 flex justify-between w-full px-20 py-6 border-b bg-gray-2 border-b-gray-1/10 md:px-20">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold md:text-2xl">Valyee</span>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        {Routes.map((route, index) => (
          <a
            href={route.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-base md:text-lg">{route.label}</span>
          </a>
        ))}

        <button className="justify-center items-center px-[15px] py-[14px] text-base md:text-lg text-white font-medium bg-primary-default hover:bg-primary-default/70 rounded-xl cursor-pointer">
          Sign Up for Free!
        </button>
      </div>
    </div>
  );
};

export default Header;

const Routes = [
  {
    label: "Features",
    href: "",
  },
  {
    label: "Pricing",
    href: "",
  },
  {
    label: "Log In",
    href: "",
  },
];
