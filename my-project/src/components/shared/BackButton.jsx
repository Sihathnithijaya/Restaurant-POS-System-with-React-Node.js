import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
        const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)} className="flex items-center text-xl bg-[#f6b100]  p-2 rounded-lg">
                <IoMdArrowRoundBack />
                </button>

        </div>

    )
}

export default BackButton;