import { useEffect, useState } from "react";
import { getAllBuys } from "../api/buy.api";
import { BuyCard } from "./BuyCard";

export function BuyList(){

    const[buy, setBuy] = useState([]);

    useEffect(() => {
        async function loadBuys() {
            const res = await getAllBuys();
            setBuy(res.data);
        }
        loadBuys();
    }, []);

    return <div>{buy.map(buy => (
        <BuyCard key={buy.id} buy={buy}/>
    ))}</div>

}