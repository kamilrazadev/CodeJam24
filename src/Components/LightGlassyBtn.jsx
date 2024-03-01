import React from "react";

const LightGlassyBtn = ({ title, onClickAction }) => {
  return (
    <button onClick={onClickAction} className="light-glassy-btn">
      {title}
    </button>
  );
};

export default LightGlassyBtn;
