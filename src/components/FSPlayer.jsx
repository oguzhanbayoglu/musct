import React from "react";
import logo from "../assets/logo.png";

const FSPlayer = ({ activeSong, isPlaying, isActive }) => {
  return (
    <div className="w-full h-full flex flex-col relative items-center justify-center">
      <img
        src={logo}
        alt="logo"
        className="w-12 h-12 m-8 absolute top-0 left-2"
      />
      <img
        src={activeSong?.images?.coverart}
        alt="cover"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 blur-3xl saturate-200"
      />
      <div className="flex flex-col items-center justify-center w-[33%] z-10 ">
        <div
          className={`${
            isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
          } hidden sm:block h-[25rem] w-[25rem] mb-12`}
        >
          <img
            src={activeSong?.images?.coverart}
            alt="cover art"
            className="rounded-full"
          />
        </div>
        <div className="w-[50%] -mb-16 flex flex-col items-center">
          <p className=" text-white font-bold text-lg ">
            {activeSong?.title ? activeSong?.title : "No active Song"}
          </p>
          <p className=" text-gray-300">
            {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FSPlayer;
