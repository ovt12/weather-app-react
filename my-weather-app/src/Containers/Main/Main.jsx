import "./Main.scss";
import WeatherCardList from "../../Components/WeatherCardList/WeatherCardList";
import React from "react";

const Main = ({ weatherList }) => {

  console.log(weatherList);
  const weatherJSON = weatherList.map((weatherList) => {

    return ( 
    <WeatherCardList 
    city={weatherList.location.name}
    region={weatherList.location.region}
    icon={weatherList.current.condition.icon}
    temp={weatherList.current.temp_c}
    update={weatherList.current.last_updated}
    />
    );
  });
  return <div className="Main__container">{weatherJSON}</div>;
};

export default Main;
