import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0);
    
    function incCount(){
        
       
        
        setCount((currVal)=>{
           return currVal+1
          
        })
        setCount((currVal)=>{
           return currVal+1
           
            
            
        })
        
        
    }
    return(
        <div>
            <h3>count={count}</h3>
            <button onClick={incCount}>Increase count</button>
        </div>
    )
}

export default Counter;

