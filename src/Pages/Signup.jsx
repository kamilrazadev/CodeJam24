import React, { useState } from "react";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";
import { Link } from "react-router-dom";

const Signup = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSetErrorMsg = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password)
      return handleSetErrorMsg("All fields are required");

    console.log(formData);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[url(/images/png/bg-common.png)] bg-center  bg-fixed bg-cover bg-no-repeat">
      <div className="relative w-fit h-fit">
        <BlueCircle />
        <PurpleCircle />
        <form
          onSubmit={handleSubmit}
          className="relative glassy rounded-[16px] p-10 w-fit h-[470px] flex flex-col justify-between"
        >
          <h1 className="theme-text text-center text-[30px] font-bold">
            Signup to Account
          </h1>
          <div className=" md:h-[7rem] flex md:flex-row flex-col justify-evenly md:gap-7 gap-2">
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="name">
                {" "}
                First Name :
              </label>
              <input
                name="firstname"
                id="firstname"
                type="text"
                placeholder="First Name"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
              />
            </div>
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="password">
                {" "}
                Last Name :
              </label>
              <input
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Last Name"
                className="input theme-text"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className=" md:h-[8rem] flex md:flex-row md:flex-row flex-col justify-evenly md:gap-7 gap-2 md:gap-7 gap-2">
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="name">
                {" "}
                First Name :
              </label>
              <input
                name="firstname"
                id="firstname"
                type="text"
                placeholder="First Name"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
              />
            </div>
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="password">
                {" "}
                Last Name :
              </label>
              <input
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Last Name"
                className="input theme-text"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className=" md:h-[12rem] flex md:flex-row flex-col justify-evenly md:gap-7 gap-2">
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="name">
              <label className="theme-text" htmlFor="name">
                {" "}
                Email :
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                type="email"
                placeholder="Enter your email"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
              />
            </div>
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="password">
                {" "}
                Password :
              </label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                placeholder="Enter your password"
                className="input theme-text"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <p className="text-center text-[13px] text-red-600">{errorMsg}</p>

          <div className="w-full flex flex-col justify-between items-center h-[4.5rem]">
            <button
              type="submit"
              className="theme-btn font-bold px-4 py-2 rounded-lg transition-all duration-300 w-[8rem]"
            >
              Sign Up
            </button>
          </div>
          <div className=" text-[0.8rem] h-[2rem] flex items-end theme-text ">
           Already have an account?{" "}
            <Link
              to="/login"
              className=" underline border-blue-500 text-blue-500 ml-[0.5rem]"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;