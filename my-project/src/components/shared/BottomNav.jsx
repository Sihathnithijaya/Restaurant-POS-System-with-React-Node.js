import React from "react";
import { FaHome, FaBorderStyle } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { FaBellConcierge } from "react-icons/fa6";

function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around">
            <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] "><FaHome className="inline mr-4" size={15} />Home</button>
            <button className="flex items-center justify-center text-[#f5f5f5] "><FaBorderStyle className="inline mr-4" size={15} />Orders</button>
            <button className="flex items-center justify-center text-[#f5f5f5] "><MdTableBar className="inline mr-4" size={15} />Tables</button>
            <button className="flex items-center justify-center text-[#f5f5f5] "><IoMdMore className="inline mr-4" size={15} />More</button>

            <button className="absolute bottom-4 bg-[#F6B100] text-[#ffffff] rounded-full p-4 items-center">
                <FaBellConcierge size={30} />
            </button>
        </div>
    );
}

export default BottomNav;