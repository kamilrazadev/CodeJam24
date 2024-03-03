import React, { useState } from "react";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";
import { Link } from "react-router-dom";
import RequiredStar from "../Components/RequiredStar";
import { AiOutlineInfoCircle } from "react-icons/ai";
import LoaderLined from "../Components/LoaderLined";
const Signup = ({ setIsOtpSent, setOtpFrom }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const handleSetErrorMsg = (msg, timeOut) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, timeOut);
  };

  const handleShowInfo = () => {
    setShowInfoWindow(!showInfoWindow);
    console.log(showInfoWindow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.firstName)
      return handleSetErrorMsg("All fields are required", 3000);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password))
      return handleSetErrorMsg(
        "Password must contain an uppercase, a lowercase letter, a number and must me minimum 8 characters long",
        5000
      );

    console.log(formData);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="relative w-fit h-fit">
        <BlueCircle />
        <PurpleCircle />
        <form
          onSubmit={handleSubmit}
          className="zoom-in relative glassy rounded-[16px] screen-620:p-10 p-5 w-fit min-h-[500px] flex flex-col justify-between gap-3 mx-5 mt-5"
        >
          <h1 className="theme-text text-center text-[30px] font-bold">
            Signup to Account
          </h1>

          <div className="grid screen-620:grid-cols-2 grid-cols-1 py-5 gap-5">
            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="email">
                {" "}
                First Name <RequiredStar /> :
              </label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                placeholder="First Name"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
                autoFocus={true}
              />
            </div>

            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="email">
                {" "}
                Last Name :
              </label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
              />
            </div>

            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <label className="theme-text" htmlFor="email">
                {" "}
                Email <RequiredStar /> :
              </label>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter email"
                className="input theme-text"
                onChange={handleInputChange}
                autoComplete="true"
              />
            </div>

            <div className="flex flex-col gap-[5px] rounded-[16px] relative z-20">
              <div className="flex justify-between">
                <label className="theme-text" htmlFor="password">
                  {" "}
                  Password <RequiredStar /> :{" "}
                </label>

                <div className="relative">
                  <AiOutlineInfoCircle
                    className="theme-text text-[20px]"
                    onMouseEnter={handleShowInfo}
                    onMouseLeave={handleShowInfo}
                  />

                  <div
                    className={`absolute w-[200px] border-2 border-[#39393941] rounded-md top-[100%] right-[0] bg-white text-black text-[12px] p-1 origin-top-right transition-all duration-300 ${
                      showInfoWindow ? "scale-100" : "scale-0"
                    }`}
                  >
                    <ul className="list-disc ps-5">
                      <li>An uppercase letter</li>
                      <li>A lowercase letter</li>
                      <li>A number</li>
                      <li>Minimum 8 characters long</li>
                    </ul>
                  </div>
                </div>
              </div>
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

          <div className="w-full flex justify-center">
            <p className="text-center text-[13px] text-red-600 max-w-[400px]">
              {errorMsg}
            </p>
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={isProcessing}
              className="theme-btn font-bold px-4 py-2 rounded-lg transition-all duration-300 "
            >
              {true ? <LoaderLined /> : "Create Account"}
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
