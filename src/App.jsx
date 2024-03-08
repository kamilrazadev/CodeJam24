import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import ResumeBuilder from "./Pages/ResumeBuilder";

const App = () => {
  const toastConfig = {
    autoClose: 3000, // 1 second in milliseconds
  };

  const [isOtpSent, setIsOtpSent] = useState(true);
  const [otpFrom, setOtpFrom] = useState("");
  const userSelectedTheme = localStorage.getItem("isDarkTheme");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const handleTheme = () => {
    if (userSelectedTheme == "false") {
      setIsDarkTheme(false);
    }
  };

  useEffect(() => {
    handleTheme();
    // starterQuery();
  }, []);

  return (
    <main
      className={`min-h-screen w-full overflow-x-hidden ${
        isDarkTheme ? "dark" : "light"
      }`}
    >
      <BrowserRouter>
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<ResumeBuilder />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer {...toastConfig} />
    </main>
  );
};

export default App;
