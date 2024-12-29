import React, { useState, useEffect } from 'react';
import Weather from './weather';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Simulate API response
    const apiResponse = {
      "coord": {"lon": 76.3428, "lat": 10.0166},
      "weather": [{"id": 721, "main": "Haze", "description": "haze", "icon": "50n"}],
      "main": {"temp": 28.92, "feels_like": 32.55, "pressure": 1011, "humidity": 70},
      "wind": {"speed": 2.06, "deg": 260},
      "clouds": {"all": 40},
      "sys": {"country": "IN", "sunrise": 1735434617, "sunset": 1735476172},
      "name": "Kakkanad"
    };

    setWeatherData(apiResponse);
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {weatherData ? <Weather data={weatherData} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
