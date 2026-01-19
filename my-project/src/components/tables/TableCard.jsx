import React from "react";
import { getRandomGB } from "../../units";

const TableCard = ({ key, name, status, initial, seats }) => {
    return (
        <div className="bg-[#262626] w-[300px] hover:bg-[#2c2c2c] p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-[#f5f5f5] text-xl font-semibold ">{name}</h1>
                <p className={`${status === "Booked" ?  "text-white bg-[#a51515]" : "bg-[#46a012] text-white"} px-2 py-1 rounded-lg`}>{status}</p>

            </div>
            <div className="flex items-center justify-center my-5">
                <h1 className={`${getRandomGB()} text-white rounded-full p-5 text-xl`}>{initial}</h1>

            </div>
            <div className="flex items-center justify-start px-1">
                <p className="text-[#f5f5f5] ml-2">Seats: {seats}</p>
            </div>
        </div>

    )
}

export default TableCard