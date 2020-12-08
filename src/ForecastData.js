import React from "react";

export default function ForecastData(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        if (hours < 10) {
            hours = `0${hours}`;
        }

        return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);

        return (
            `${temperature} °C`)
    }
        

    return (
        <div classname="Forecast col">
            {hours()}  :  {temperature()}
            <img src={props.data.icon} alt={props.data.description} />

        </div>);
}