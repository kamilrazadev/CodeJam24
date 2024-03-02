import React from "react";

const AnimateLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-[#992A89] font-bold text-[50px]">A</h1>
      <img
        src="/images/logoSides.png"
        alt=""
        className="relative top-0 left-0 animate-custom-spin"
      />
    </div>
  );
};

export default AnimateLogo;
