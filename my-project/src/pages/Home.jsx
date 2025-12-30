import React from "react";
import BottomNav from "../components/shared/bOTTOMnAV.JSX";

function Home() {
    return (
        <div >
            <section className=" bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
                {/* Left Side */}
                <div className="flex-[3] bg-[#161515]"></div>
                {/* Right Side */}
                <div className="flex-[2] bg-[#161616]"></div>
                <BottomNav />
            </section>
        
        </div>
        
    );
}

export default Home;    