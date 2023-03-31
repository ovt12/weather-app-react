import "./WeatherCardList.scss"
import React from "react";

const WeatherCardList = ({ id, city, region, country, icon, temp, update }) => {
  return (
    <div key={id} className="card">
      <h2 className="card">{city}</h2>
      <h2 className="card">{region}</h2>
      <h2 className="card">{country}</h2>
      <img className="card" src={icon} alt={city} />
      <h2 className="card">Temperature: {temp}</h2>
      <h2 className="card">Last Updated: {update}</h2>
    </div>
  );
};

export default WeatherCardList;

