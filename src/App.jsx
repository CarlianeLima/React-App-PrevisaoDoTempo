import { useState, useRef } from 'react'
import './App.css'

import axios from 'axios'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'
import WeatherInformation5Days from './components/WeatherInformation5Days/WeatherInformation5Days'

function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    console.log('Buscando cidade...');
    console.log(inputRef.current.value);

    const city = inputRef.current.value;
    const apiKey = "71a0f827b2025813b4d58ee6aeea13df";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;
    const urlForFuture5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    const apiDataAboutWeather = await axios.get(url);
    setWeather(apiDataAboutWeather.data);

    const apiDataAboutWeatherFor5Days = await axios.get(urlForFuture5Days);
    console.log(apiDataAboutWeatherFor5Days.data);
    setWeather5Days(apiDataAboutWeatherFor5Days.data);

  }

  return (
    <div className='container'>
      <h1 className='title'>Previsão do Tempo da Carly</h1>
      <input className='inputCity' ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button className='searchButton' onClick={searchCity}>Buscar</button>

       { weather && <WeatherInformation weather={weather}/> } {/*Isso é um if-else */}

       { weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/> }

    </div>
  )
}

export default App
