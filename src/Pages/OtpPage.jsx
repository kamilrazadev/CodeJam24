import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
    if (otp.length !== 3) {
      return toast.error("Please enter a valid OTP");
    }
    handleVerifyOtp(otp.join(""));
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[url(/images/png/bg-common.png)] bg-center  bg-fixed bg-cover bg-no-repeat">
      <form
        onSubmit={handleSubmit}
        className="glassy overflow-hidden rounded-[16px] h-[400px] w-fit "
      >
        <div className="flex flex-col overflow-hidden rounded-[16px] p-10">
          {otp.map((digit, index) => (
            <input
              id={index}
              key={index}
              ref={refs[index]}
              type="number"
              maxLength={1}
              value={digit}
              inputMode="numeric"
              className="bg-transparent"
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <button type="submit" className="theme-text">
          Verify
        </button>
        <button type="button" className="theme-text" onClick={handleClear}>
          Clear
        </button>
      </form>
    </main>
  );
};

export default OtpPage;
