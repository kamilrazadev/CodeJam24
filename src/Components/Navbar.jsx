import React from "react";
import ThemeToggler from "./ThemeToggler";
import LightGlassyBtn from "./LightGlassyBtn";
import { GoHome } from "react-icons/go";

const Navbar = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <div className="sticky z-50 top-0 left-0 w-full flex justify-end items-center gap-5 px-5 py-3">
      <a href="/">
        <GoHome className="theme-text text-[24px]" />
      </a>
      <a href="/login">
        <LightGlassyBtn title={"LOGIN"} />
      </a>
      <div className="">
        <ThemeToggler
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
      </div>
    </div>
  );
};

export default Navbar;
