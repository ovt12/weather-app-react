import './App.css';
import Nav from './Containers/Nav/Nav';
import Main from './Containers/Main/Main';
import { useState, useEffect } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("Japan");
  const [weatherList, setWeatherList] = useState([]);

   // FUNCTION TO HANDLE THE SEARCH TERM INPUT
   const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };



   // USES USESTATE TO SET THE URL AS THE DEFAULT TO UPDATE THE BEER LIST
   const getWeather = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=d5a53556a61f48f99fa114629231303&q=${searchTerm}&aqi=no`;
    const result = await fetch(url);
    const weatherData = await result.json();
    setWeatherList([weatherData]);
  };


  useEffect(() => {
    getWeather();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <Nav handleInput={handleInput} searchTerm={searchTerm}/>
          Weather App
      </header>
    <div className='Main'>
      <Main weatherList={weatherList}/>
    </div>
    </div>
  );
}

export default App;
