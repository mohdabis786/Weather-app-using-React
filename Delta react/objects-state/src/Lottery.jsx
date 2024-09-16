import { useState } from "react";
import"./Lottery.css"
import { genTicket ,sum} from "./Helper";
import Ticket from "./Ticket";



function Lottery({n,winningSum}){

    let [ticket,setTicket]=useState(genTicket(n))
    let isWinning=sum(ticket)===winningSum;

    let butTicket=()=>{
        setTicket(genTicket(n))
    }

    return(
        <div>
            <h1>Lottery ticket</h1>
            
               <Ticket ticket={ticket}/>
            
            <button onClick={butTicket}>Buy new ticket</button>
            <h3>{isWinning && "congratulation you won"}</h3>

        </div>
    )

}


export default Lottery;