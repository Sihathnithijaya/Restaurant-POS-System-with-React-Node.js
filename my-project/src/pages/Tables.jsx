import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton.jsx";
import TableCard from "../components/tables/TableCard.jsx";
import { tables } from "../constants";

function Tables() {
    const [status, setStatus] = React.useState("all");

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Tables</h1>
                </div>
                <div className="flex gap-4 items-center justify-around">
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === "all" && "bg-[#383838]"} rounded-lg px-5 py-2 font-semibold`}>
                        All
                    </button>
                    <button onClick={() => setStatus("booked")} className={`text-[#ababab] text-lg ${status === "booked" && "bg-[#383838]"} rounded-lg px-5 py-2 font-semibold`}>Booked</button>
                </div>

            </div>
            <div className="flex flex-wrap gap-6 px-16 py-4 justify-center overflow-y-scroll h-[calc(100vh-8rem-5rem)] scrollbar-hide">
                {
                    tables.map((table) => (
                        <TableCard
                            key={table.id}
                            name={table.name}
                            status={table.status}
                            initial={table.initial}
                            seats={table.seats}
                        />
                    ))
                }
            </div>
            <BottomNav />
        </section>
    );
}

export default Tables;