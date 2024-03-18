// Import necessary libraries
const axios = require('axios');
const express = require('express');
const app = express();

// Your OpenWeatherMap API key
const API_KEY = 'YOUR_API_KEY';

// Get weather data
app.get('/weather', async (req, res) => {
  try {
    // Get current weather data
    const currentWeatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY_NAME&appid=${API_KEY}`);
    const currentWeather = currentWeatherResponse.data;

    // Get forecast data
    const forecastResponse = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=YOUR_CITY_NAME&appid=${API_KEY}`);
    const forecast = forecastResponse.data;

    // Send response
    res.json({
      currentTemperature: currentWeather.main.temp,
      currentWeatherDescription: currentWeather.weather[0].description,
      threeDayForecast: forecast.list.slice(0, 3).map(forecast => ({
        date: forecast.dt_txt,
        temperature: forecast.main.temp
      }))
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching weather data.');
  }
});

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(3000, () => console.log('Server is running on port 3000'));
