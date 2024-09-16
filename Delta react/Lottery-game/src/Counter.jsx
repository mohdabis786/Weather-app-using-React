import { useState,useEffect } from "react"

function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);

    let increasex=()=>{
        setCountx((currCount)=>currCount+1)
    }
    let increasey=()=>{
        setCounty((currCount)=>currCount+1)
    }

    useEffect(function printSomething(){
        console.log("this is a sideeffect");
    },[countx])

    return(
        <div>
            <h3>countx={countx}</h3>
            <button onClick={increasex}>+1</button>
            <h3>county={county}</h3>
            <button onClick={increasey}>+1</button>

        </div>
    )
}
export default Counter;