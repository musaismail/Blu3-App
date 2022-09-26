import React, { useState } from "react";
import Login from "./Login";
import SingUp from "./SingUp";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import blue3 from "./Image/Vector.png";

const Auntentication = () => {
  const [open, setOpen] = useState("login");
  return (
    <div className="h-[1000px] bg-[#f5f5f5]">
      <div className="flex items-center justify-center relative">
        <div className="bg-gradient-to-tr from-[#ffff] to-[#3d54ff] flex items-center justify-center h-[189px] w-full rounded-b-[25px]">
          <img src={blue3} alt="blue3" className="w-[344px] h-[88px]" />
        </div>
      </div>
      {/* General Container */}
      <div className="flex justify-center items-center">
        <div className="flex flex-col shadow-lg w-[311px] h-[445px] bg-white absolute top-[160px] items-center rounded-[32px]">
          {/* log in & singn up button div */}
          <div className="buttons flex justify-between mt-[37.5px]">
            <button
              onClick={() => setOpen("login")}
              className={`${
                open === "login"
                  ? "bg-[#3d54ff] focus:outline-0 text-white"
                  : "bg-white  "
              }  button `}
            >
              Log in
            </button>
            <button
              onClick={() => setOpen("sign in")}
              className={`${
                open === "sign in"
                  ? "bg-[#3d54ff] focus:outline-0  text-white"
                  : "bg-white"
              } button2 `}
            >
              Sign Up
            </button>
          </div>

          {/* login & Sign Up  form */}
          <div className="">{open === "login" ? <Login /> : <SingUp />}</div>

          <h1 className="text-black text-[14px] mt-[39px] text-center w-[200px]">
            Or
          </h1>

          <div className="flex gap-x-4 text-[35px] mt-[27px]  w-[220px] justify-center">
            <BsFacebook className="text-[#3646af] " />
            <FcGoogle />
            <FaTwitterSquare className="text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auntentication;
