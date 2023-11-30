import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherComponent.css';
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '176bbc4f10776eb9afdfe45a39b7d957';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <div className="weather-box">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <p>{new Date().toLocaleDateString()}</p>
        
        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
        
        <h3>Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} C</h3>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
      <div className="additional-box">
      <h3>Additional Weather Information</h3>
        <p>Feels Like: {(weatherData.main.feels_like - 273.15).toFixed(1)} C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        <p>Pressure: {weatherData.main.pressure} hPa</p>
        <p>Max Temperature: {(weatherData.main.temp_max- 273.15).toFixed(1)} C</p>
        <p>Min Temperature: {(weatherData.main.temp_min- 273.15).toFixed(1)} C</p>
        <div className="forecast-days">
          <h3>FRIDAY</h3>
          
          <h3>SATURDAY</h3>
          
          <h3>SUNDAY</h3>
          
          <h3>MONDAY</h3>
          
          <h3>TUESDAY</h3>
          
        </div>
        <div className="forecast-days">
        <img src='https://openweathermap.org/img/wn/11d@2x.png'/>
        <img src='https://openweathermap.org/img/wn/09d@2x.png'/>
        <img src='https://openweathermap.org/img/wn/10d@2x.png'/>
        <img src='https://openweathermap.org/img/wn/13d@2x.png'/>
        <img src='https://openweathermap.org/img/wn/13d@2x.png'/>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;