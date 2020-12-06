import axios from "axios";
import React, { useState } from "react";
import ForecastData from "./ForecastData.js";

export default function Forecast(props) {
    const [submit, setSubmit] = useState(false);
    const [forecast, setForecast] = useState(null);

    function showForecast(response) {
        setForecast(response.data);
        setSubmit(true);
    }

    if (submit && props.city === forecast.city.name) {
        return (<div className="Forecast row">
            <ForecastData data={forecast.list[0]} />
            <ForecastData data={forecast.list[1]} />
            <ForecastData data={forecast.list[2]} />
            <ForecastData data={forecast.list[3]} />



        </div>);
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=af11ba20356f076c2cd217a6bc9cd25e&units=metric`;
        axios.get(url).then(showForecast);

        return null;
    }
}