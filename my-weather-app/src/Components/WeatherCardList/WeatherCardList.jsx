import "./WeatherCardList.scss"
import React from "react";



const WeatherCardList = ({city, region, icon, temp, update}) => {


    return (
        <div>
            <h2>{city}</h2>
            <h2>{region}</h2>
            <img src={icon}/>
            <h2>{temp}</h2>
            <h2>Last Updated: {update}</h2>
        </div>
)};


export default WeatherCardList;