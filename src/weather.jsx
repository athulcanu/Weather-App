import React from 'react';

function Weather({ data }) {
  const { name, main, weather, wind, sys } = data;

  return (
    <div className="weather">
      <h2>{name}, {sys.country}</h2>
      <p>{weather[0].main} - {weather[0].description}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Feels Like: {main.feels_like}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind: {wind.speed} m/s at {wind.deg}°</p>
      <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
}

export default Weather;
