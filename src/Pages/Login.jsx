import React from "react";
import BlueCircle from "../Components/BlueCircle";
import PurpleCircle from "../Components/PurpleCircle";

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
 
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
           Login to Account 
          </h1>
            <div className=" md:h-[12rem] flex flex-col justify-evenly">
          <div className="flex flex-col gap-[0.5rem] rounded-[16px] relative z-20">
              <label className="theme-text"> Username</label>
              <input type="text"  placeholder="Enter Username" className="input "/>
          </div>
          <div className="flex flex-col gap-[0.5rem] rounded-[16px] relative z-20">
              <label className="theme-text" > Password</label>
              <input type="password" placeholder="Enter Password" className="input " />
          </div>
          </div>

          <div className="w-full flex flex-col justify-between items-center h-[4.5rem]">
            <button
              type="submit"
              className="theme-btn font-bold px-4 py-2 rounded-lg transition-all duration-300 w-[8rem]"
            >
              Log In
            </button>
            <button
              type="button"
              
              className=" theme-text text-[0.9rem] transition-all duration-300"
            >
             Forgot Password ?
            </button>
          </div>
          <div className=" text-[0.8rem] h-[2rem] flex items-end theme-text " >
            Dont have account ? <span className=" underline border-blue-500 text-blue-500 ml-[0.5rem]"> Sign Up </span>
          </div>
        </form>
      </div>
    </main>


  )






    
};

export default Login;
