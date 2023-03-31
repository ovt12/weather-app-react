import './App.css';
import Main from './Containers/Main/Main';
import { useState, useEffect } from 'react';
import SearchBox from './Components/SearchBox/SearchBox';

function App() {

  const [searchTerm, setSearchTerm] = useState("Manchester");
  const [weatherList, setWeatherList] = useState([]);

   // FUNCTION TO HANDLE THE SEARCH TERM INPUT
   const handleInput = (event) => {
    setSearchTerm(event.target.value);

  };



   // USES USESTATE TO SET THE URL AS THE DEFAULT TO UPDATE THE BEER LIST
   const getWeather = async (searchTerm) => {
    if (searchTerm === ""){
      return;
    }
    let url = `https://api.weatherapi.com/v1/current.json?key=d5a53556a61f48f99fa114629231303&q=${searchTerm}&aqi=no`;
    const result = await fetch(url);
    if (result.status === 200) {
    const weatherData = await result.json();
    setWeatherList([weatherData]);
    }


  };

  useEffect(() => {
    getWeather(searchTerm, handleInput);
  }, [searchTerm]);




  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Api</h1>
      </header>
    <div className='Main'>
      <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
      <Main weatherList={weatherList}/>
    </div>
    </div>
  );
}

export default App;
