import axios from "axios";
import React, { useState } from "react";
import Forecast from "./Forecast.js";



export default function Weather() {
    const [city, setCity] = useState("true");
    const [weather, setWeather] = useState("");
    const [submit, setSubmit] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af11ba20356f076c2cd217a6bc9cd25e&units=metric`;
        axios.get(url).then(showWeather);
}

    function updateCity(event) {
        setCity(event.target.value);
    }
    function showWeather(response) {
        setSubmit(true);
        setWeather({
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon
                }@2x.png`
        });
    }


    let form = (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Enter a city..."
                onChange={updateCity}
            />
            <input type="submit" value="Search" />
        </form>
    );

    if (submit) {
        return (
            <div>
                <h1>{weather.city} </h1>
                <h2>{Math.round(weather.temperature)}°C</h2>
                <p className="detail">
                    <img src={weather.icon} alt={weather.description} />
                    <br />
                    {weather.description}<br/>
                    Wind: {Math.round(weather.wind)}m/s<br />
                    Humidity: {weather.humidity}% <br />
                    
                </p>
                {form}
                <br />
                <Forecast city={setWeather.city} />
            </div>
        );
    } else {
        return form;
    }
}