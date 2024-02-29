import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (newOtp.every((digit) => digit !== "")) {
        handleVerifyOtp(newOtp.join(""));
      } else if (index < 3 && value !== "") {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleVerifyOtp = (otp) => {
    console.log("Verifying OTP:", otp);
    // Your logic to verify the OTP goes here
  };

  const handleClear = () => {
    setOtp(["", "", "", ""]);
    refs[0].current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      return toast.error("Please enter a valid OTP");
    }
    handleVerifyOtp(otp.join(""));
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[url(/images/png/bg-common.png)] bg-center  bg-fixed bg-cover bg-no-repeat">
      <div className="relative w-fit h-fit">
        <BlueCircle />
        <PurpleCircle />
        <form
          onSubmit={handleSubmit}
          className="relative glassy rounded-[16px] p-10 w-fit h-[400px] flex flex-col justify-between"
        >
          <h1 className="theme-text text-center text-[30px] font-bold">
            OTP Verification
          </h1>

          <div className="flex gap-5 rounded-[16px] relative z-20">
            {otp.map((digit, index) => (
              <input
                id={index}
                key={index}
                ref={refs[index]}
                type="number"
                maxLength={1}
                value={digit}
                inputMode="numeric"
                className="bg-transparent border-b-sm border-r-sm border-[#ffffff8a] rounded-lg shadow-custom-inset text-[20px] font-bold theme-text w-[50px] h-[50px] outline-none text-center"
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          <div className="w-full flex justify-between">
            <button
              type="submit"
              className="theme-btn font-bold px-5 py-2 rounded-lg transition-all duration-300"
            >
              Verify
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="theme-btn font-bold px-5 py-2 rounded-lg transition-all duration-300"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default OtpPage;
