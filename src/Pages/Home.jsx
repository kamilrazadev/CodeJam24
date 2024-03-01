import React from "react";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";
import PurpleCircleBg from "../Components/PurpleCircleBg";

const Home = () => {
  return (
    <main className="relative w-full flex justify-center items-center min-h-screen">
      <BlueCircle />
      <PurpleCircle />
      <div className="opacity-50">
        <PurpleCircleBg />
      </div>
      <section className="flex glassy screen-620:rounded-3xl rounded-2xl absolute top-0 bottom-0 left-0 right-0 screen-620:m-5 m-2 screen-620:p-10 p-3">
        <div className="w-[50%] flex items-center">
          <h1 className="text-primary text-[40px] font-bold text-shadow leading-[40px]">
            We're KUU
          </h1>
        </div>
        <div className="w-[50%]"></div>
      </section>
    </main>
  );
};

export default Home;
