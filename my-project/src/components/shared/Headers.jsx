import React from "react";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

function Headers() {
  return (
    <header className="flex justify-between items-center py-2 px-7 bg-[#0a0a0a]">

      {/* Logo Section */}
      <div className="flex justify-center gap-2">
        <img src={logo} className=" h-8 w-8" alt="Logo" />
        <h1 className=" text-lg font-semibold text-[#f5f5f5]">RESTAURANT</h1>
      </div>
      {/* search Section */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 ">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#333] text-[#f5f5f5] px-2 py-1 rounded-[20px]"
        />
      </div>
      {/* User Section */}

      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaRegUserCircle className="text-[#f5f5f5] text-2xl" />
          <div className="flex flex-col items-start">
            <h2 className=" text-[#f5f5f5]">John Doe</h2>
            <p className=" text-sm text-[#a9a9a9]">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;