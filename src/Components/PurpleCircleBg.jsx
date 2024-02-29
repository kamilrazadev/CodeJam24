import React from "react";

const PurpleCircleBg = () => {
  const isDarkTheme = localStorage.getItem("isDarkTheme");

  return (
    <>
      {isDarkTheme === "true" ? (
        <div className="absolute top-[150px] right-[10%] rounded-full screen-620:w-[250px] w-[150px] screen-620:h-[250px] h-[150px]  bg-gradient-to-r from-[#E12CDA99] to-[#E712121A] shadow-form"></div>
      ) : (
        <div className="absolute top-[150px] right-[10%] rounded-full screen-620:w-[250px] w-[150px] screen-620:h-[250px] h-[150px]  bg-gradient-to-r from-[#85145f] to-[#E12CDA99]  shadow-form"></div>
      )}
    </>
  );
};

export default PurpleCircleBg;
