import React from "react";
import { ScrollTrigger, Tween } from "react-gsap";
import { BsDiscord } from "react-icons/bs";

type HeaderProps = {
};

const Header: React.FC<HeaderProps> = ({  }) => {
  return (
    <div className="fixed top-0 z-20 flex justify-between w-full px-10 py-6 border-b md:px-20 bg-gray-2 border-b-gray-1/10">
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold md:text-2xl">Valyee</span>
      </div>
      <div className="items-center hidden gap-4 md:flex md:gap-8">
        {Routes.map((route, index) => (
          <a
            href={route.href}
            key={index}
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
    href: "/",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blog",
    href: "/blog"
  },
  {
    label: "Log In",
    href: "/",
  },
];
