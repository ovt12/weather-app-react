import "./Main.scss";
import WeatherCardList from "../../Components/WeatherCardList/WeatherCardList";
import React from "react";

const Main = ({ weatherList }) => {

  if (weatherList.length === 0) {
    return <p>Please enter a location!</p>
  }
  const weatherJSON = weatherList.map((weatherList, index) => {

    return ( 
    <div className="Main__card"> 
      <WeatherCardList 
      key={index}
      city={weatherList.location.name}
      region={weatherList.location.region}
      country={weatherList.location.country}
      icon={weatherList.current.condition.icon}
      temp={weatherList.current.temp_c}
      update={weatherList.current.last_updated}
      />
    </div> 
    );
  });
  return <div className="Main__container">{weatherJSON}</div>;
};

export default Main;
