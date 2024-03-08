import React from "react";
import "./Components.css";

const ThemeToggler = ({ isDarkTheme, setIsDarkTheme }) => {
  const handleThemeChange = () => {
    setIsDarkTheme((prevIsDarkTheme) => {
      const newIsDarkTheme = !prevIsDarkTheme;
      localStorage.setItem("isDarkTheme", String(newIsDarkTheme));
      return newIsDarkTheme;
    });
  };

  return <div></div>;
};

export default ThemeToggler;
