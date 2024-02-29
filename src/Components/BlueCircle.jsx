import React from "react";

const BlueCircle = () => {
  localStorage.getItem("isDarkTheme");

  return (
    <div className="absolute top-[-200px] left-[-150px] rounded-full w-[300px] h-[300px] bg-gradient-to-r from-[#2CD1D199] to-[#6425EC1A]"></div>
  );
};

export default BlueCircle;
