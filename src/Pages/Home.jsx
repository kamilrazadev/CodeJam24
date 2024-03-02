import React from "react";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";
import PurpleCircleBg from "../Components/PurpleCircleBg";
import BlueCircleBg from "../Components/BlueCircleBg";
import OrangeCircleBg from "../Components/OrangeCircleBg";
import AnimateLogo from "../Components/AnimateLogo";

const Home = () => {
  return (
    <>
      <div className="absolute top-[20%] right-[20px]">
        <PurpleCircleBg />
      </div>
      <div className="absolute top-[10px] left-[20px]">
        <BlueCircleBg />
      </div>
      <div className="absolute top-[60%] left-[50%]">
        <OrangeCircleBg />
      </div>
      <main className="w-full flex justify-center items-center">
        <section className="w-full min-h-screen flex screen-620:flex-row flex-col-reverse items-center justify-center glassy screen-620:p-10 p-3">
          <div className="screen-620:w-[50%] w-full flex items-center">
            <h1
              data-text="We're KUU..."
              className="main-text screen-620:text-[5.5vw]  text-[10vw] "
            >
              We're KUU...
            </h1>
          </div>
          <div className="screen-620:w-[50%] w-full">
            <AnimateLogo />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
