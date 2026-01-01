import React from "react";
import BottomNav from "../components/shared/bOTTOMnAV.JSX";
import Greetings from "../components/home/Greetings.jsx";
import MiniCard from "../components/home/MiniCard.jsx";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../components/home/RecentOrders.jsx";
import PopulerDishes from "../components/home/PopulerDishes.jsx";


function Home() {
    return (
        <div >
            <section className=" bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-scroll flex gap-3 scrollbar-hide">
                {/* Left Side */}
                <div className="flex-[3]">
                    <Greetings />
                    <div className="flex items-center w-full gap-3 px-8 mt-8">
                        <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
                        <MiniCard title="In Progress" icon={<GrInProgress />} number={20} footerNum={3.6} />
                    </div>
                    <RecentOrders />
                </div>


                {/* Right Side */}
                <div className="flex-[2] bg-[#161616]">

                    <PopulerDishes /></div>



            </section>
            <BottomNav />
        </div>

    );
}

export default Home;    