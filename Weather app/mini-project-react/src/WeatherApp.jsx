import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SeaarchBox";

function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"

    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)

    }

    return(

        <div>
            <h2>Weather App By Delta </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}

export default WeatherApp;