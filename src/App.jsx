import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ThemeToggler from "./Components/ThemeToggler";
import OtpPage from "./Pages/OtpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const toastConfig = {
    autoClose: 3000, // 1 second in milliseconds
  };
  const userSelectedTheme = localStorage.getItem("isDarkTheme");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleTheme = () => {
    if (userSelectedTheme == "true") {
      setIsDarkTheme(true);
    }
  };

  useEffect(() => {
    handleTheme();
  }, []);

  return (
    <main className={`min-h-screen w-full ${isDarkTheme ? "dark" : "light"}`}>
      <div className="py-4 fixed z-50 top-0 right-5">
        <ThemeToggler
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer {...toastConfig} />
    </main>
  );
};

export default App;