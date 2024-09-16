import { useState } from "react";

function LudoBoard(){
    let [Moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})

    let update=()=>{
        setMoves((prevmove)=>{
             return {...prevmove,blue:Moves.blue+1}
        })
    }

  
    return(
        <>
        <p>Game Begins!</p>
        <div className="board">
            <p>Blue moves={Moves.blue}</p>
            <button onClick={update} style={{backgroundColor:"blue"}} >+1</button>
            <p>Yellow moves={Moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>Green moves={Moves.green}</p>
            <button style={{backgroundColor:"green"}} >+1</button>
            <p>Red moves={Moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
        </div>
        </>
    )
}
export default LudoBoard;