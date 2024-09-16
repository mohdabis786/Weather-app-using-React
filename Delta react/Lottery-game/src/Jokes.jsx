import { useState,useEffect } from "react"

function Jokes(){
    let [joke,setJoke]=useState({});
    const URL="https://official-joke-api.appspot.com/random_joke"

    let getNewJokes=async ()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})

    }

    useEffect(()=>{
        async function getOneJoke(){
            let response=await fetch(URL);
            let jsonResponse=await response.json();
            setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});


    }
    getOneJoke()

    },[])



    return(
        <div>
            <h3>new jokes</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJokes}>Get joke</button>
        </div>
    )

}

export default Jokes;