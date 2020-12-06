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
        let icon = props.list.weather.icon;

        return `${temperature} °C`;
    }

    return (
        <div classname="ForecastCol col">
            {hours()}
            {temperature()}
            {icon()}
        </div>);
}