import React from "react";
import BottomNav from "../components/shared/bOTTOMnAV.JSX";


function Orders() {
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
            <h1>Orders Page</h1>
            <BottomNav />
        </section>
    );
}

export default Orders;