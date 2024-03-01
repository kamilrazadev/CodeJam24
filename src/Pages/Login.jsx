import React, { useState } from "react";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";
import { Link } from "react-router-dom";

const Login = ({ setIsOtpSent, setOtpFrom }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
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
    <main className="w-full min-h-screen flex justify-center">
      <div className="relative w-fit h-fit">
        <BlueCircle />
        <PurpleCircle />
        <form
          onSubmit={handleSubmit}
          className="zoom-in relative glassy rounded-[16px] p-10 w-fit h-[470px] flex flex-col justify-between mx-5 mt-5"
        >
          <h1 className="theme-text text-center text-[30px] font-bold">
            Login to Account
          </h1>
          <div className="flex flex-col gap-3 py-5">
            <div className="flex flex-col gap-[5px]">
              <label className="theme-text" htmlFor="email">
                {" "}
                Email :
              </label>
              <input
                name="email"
                id="email"
                type="text"
                placeholder="Enter email"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
                autoFocus={true}
              />
            </div>
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="password">
                {" "}
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Enter Password"
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
              Log In
            </button>
            <Link className="theme-text text-[0.9rem] transition-all duration-300">
              Forgot Password ?
            </Link>
          </div>
          <div className=" text-[0.8rem] h-[2rem] flex items-end theme-text ">
            Dont have account?{" "}
            <Link
              to="/signup"
              className=" underline border-blue-500 text-blue-500 ml-[0.5rem]"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
