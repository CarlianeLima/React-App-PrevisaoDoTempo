/* eslint-disable react/prop-types */
import './WeatherInformation.css'

function WeatherInformation({ weather }) {

    return (

        <div className='weatherContainer'>
            <h2 className='locationName'>{weather.name}</h2>

            <div className='weatherInfo'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='Weather icon' width="60px" height="60px"/>

                <p className='temperature'>{Math.round(weather.main.temp)} ºC</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)} ºC</p>
                <p>Umidade: {weather.main.humidity}</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
            
        </div>
    )

}

export default WeatherInformation;