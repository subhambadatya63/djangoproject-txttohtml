import React, { useState } from 'react'
import axios from 'axios';

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }
    const fetchWeather = async () => {
        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7862677e15bbaa63ce643a5f9144cf7&units=metric`)
            setWeather(response.data);
        }
        catch(error){
            console.log("Error fetching weather data", error)
        }
    }
    console.log(weather, 'weather')
    const handleClick = (event) => {
        fetchWeather();
    }
    return (
        <div className='weather-container'>
            <input type='text' placeholder='Enter City Name' value={city} onChange=
            {handleCityChange}/>
            <div>
            <button onClick={handleClick}>Get Weather</button>
            </div>
            {weather && (<>
            <div className='weather-info'>
                <h3>{weather.name}</h3>
                <p>Temp is {weather.main.temp} </p>
                <p>{weather.weather[0].description}</p>
            </div>
            </>)}
        </div>

    )

}