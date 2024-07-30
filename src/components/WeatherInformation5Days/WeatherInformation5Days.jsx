/* eslint-disable react/prop-types */
import './WeatherInformation5Days.css';

function WeatherInformation5Days({ weather5Days }) {

    console.log('weather5Days', weather5Days);

    let dailyForecasts = {};

    for(let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if(!dailyForecasts[date]) {
            dailyForecasts[date] = forecast;
        }
    }

    const next5DaysForecast = Object.values(dailyForecasts).slice(1, 6);

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' });
        return newDate;
    }

  return (

    <div className='forecastWeatherContainer'>

      <h3 className='fiveDaysTitle'>Previsão para os próximos 5 dias:</h3>

      <div className='weatherList'>

        {next5DaysForecast.map(forecast => (
            <div key={forecast.dt} className='weatherItens'>
                <p className='forecastDate'>{convertDate(forecast)}</p>
                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt='Weather icon' width="60px" height="60px"/>
                <p className='forecastDescription'>{forecast.weather[0].description}</p>
                <p className='forecastTemperature'>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
            </div>
        ))}
        
      </div>

    </div>

  )

}

export default WeatherInformation5Days;