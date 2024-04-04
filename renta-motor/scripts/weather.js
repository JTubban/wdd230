const apiKey = "107e304aaafe15d894ec5133f0144188";
const city = "Cozumel";
const oneDayforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=20.42&lon=-86.92&exclude=current,minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=20.42&lon=-86.92&units=imperial&appid=${apiKey}`;
let weatherDetails = document.querySelector('.weather-details');

async function apiFetch() {
  try {
    const response = await fetch(url);
    const oneDay = await fetch(oneDayforecast);
    if (response.ok) {
      const data1 = await response.json();
      const data2 = await oneDay.json();
      // console.log(data1);
      // console.log('OK:::');
      // console.log(data2);
      displayResults(data1);
      forecast(data2);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data1) {
  let maxWeather = document.querySelector('.max-temp');
  let span = document.createElement('span');

  span.setAttribute('class', 'close');
  span.textContent = 'X';
  maxWeather.innerHTML = `Current Max Temperature: ${Math.round(data1.main.temp_max)}&deg;F`;

  maxWeather.appendChild(span);

  close(maxWeather, span);

  let iconsrc = `https://openweathermap.org/img/w/${data1.weather[0].icon}.png`;

  let h3 = document.createElement('h3');
  let div1 = document.createElement('div');
  let img = document.createElement('img');
  let temperature = document.createElement('p');
  let humidity = document.createElement('p');

  div1.setAttribute('class', 'today-weather');
  img.setAttribute('src', 'weatherIcon');
  img.setAttribute("src", iconsrc);
  temperature.setAttribute('class', 'temperature');
  humidity.setAttribute('class', 'humidity');

  h3.textContent = 'Weather';
  temperature.innerHTML = `Temperature: ${Math.round(data1.main.temp)}&deg;F - ${capitalizeWords(data1.weather[0].description)}`;
  humidity.innerText = `Humidity: ${data1.main.humidity}%`;

  div1.appendChild(img);
  div1.appendChild(temperature);

  weatherDetails.appendChild(h3);
  weatherDetails.appendChild(div1);
  weatherDetails.appendChild(humidity);
}

function capitalizeWords(str) {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function forecast(data2) {
  let div = document.createElement('div');
  let h4 = document.createElement('h4');
  let dateP = document.createElement('p');
  let temperatureP = document.createElement('p');

  h4.textContent = 'One-Day Temperature Forecast';

  let date = new Date(data2.list[2].dt * 1000);
  let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  dateP.textContent = date.toLocaleDateString('en-US', options);
  temperatureP.innerHTML = Math.round(data2.list[2].main.temp) + '&deg;F';

  div.appendChild(h4);
  div.appendChild(dateP);
  div.appendChild(temperatureP);

  weatherDetails.appendChild(div);
}

function close(maxWeather, span) {
  span.addEventListener('click', () => {
    maxWeather.style.display = 'none';
  });
}

apiFetch();