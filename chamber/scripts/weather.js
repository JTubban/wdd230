// const currentDay = new Date().getDay();
const currentDay = 2;

function eventBanner(event) {
  if (event >= 1 && event <= 3) {
    const eventBanner = document.createElement("div");
    eventBanner.setAttribute("id", "eventBanner");

    const pTag = document.createElement("p");
    pTag.textContent =
      "Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00pm. Thank you!";

    eventBanner.appendChild(pTag);

    // Add close button
    const closeButton = document.createElement("button");
    closeButton.setAttribute("class", "closeButton");
    closeButton.textContent = "❌";
    closeButton.addEventListener("click", () => {
      eventBanner.style.display = "none";
    });
    eventBanner.append(closeButton);

    // Add banner to page
    document.body.prepend(eventBanner);
  }
}

eventBanner(currentDay);

// Weather
const apiKey = "107e304aaafe15d894ec5133f0144188";
const city = "Tuao";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=17.70&lon=121.50&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


// let latestWeather = document.querySelector(".latestWeather");

function displayResults(data) {
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let weatherDetails = document.querySelector('.weatherDetails');

    let h3 = document.createElement('h3');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');

    h3.setAttribute('class', 'city');
    img.setAttribute('src', 'weatherIcon');
    p.setAttribute('class', 'temperature');

    h3.textContent = `${data.name} Municipality, Philippines`;

    img.setAttribute("src", iconsrc);
    p.setAttribute("class", "temperature");
    p.innerHTML = `Temperature: ${Math.round(data.main.temp)}&deg;F - ${capitalizeWords(data.weather[0].description)}`;

    div.appendChild(img);
    div.appendChild(p);

    weatherDetails.appendChild(h3);
    weatherDetails.appendChild(div);
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

apiFetch();

const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=17.70&lon=121.50&exclude=current,minutely,hourly,alerts&units=imperial&appid=${apiKey}`;

async function apiFetchForecast() {
    try {
        const response = await fetch(forecast);
        if (response.ok) {
          const data = await response.json();
          // console.log(data.list);
          threeDayForecast(data);
        } else {
          throw Error(await response.text());
        }
    } catch (error) {
        error;
    }
}

function threeDayForecast(data) {
    const forecasts = document.querySelector('.forecasts');
    const h3 = document.createElement('h3');
    h3.textContent = 'Three-Day Temperature Forecast';
    forecasts.appendChild(h3);

    for(let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        const dateElement = document.createElement('p');
        const temperature = document.createElement('p');

        const date = new Date(data.list[i*8].dt * 1000);
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

        dateElement.textContent = date.toLocaleDateString('en-US', options);
        temperature.innerHTML = Math.round(data.list[i*8].main.temp) + '&deg;F';

        div.appendChild(dateElement);
        div.appendChild(temperature);

        forecasts.appendChild(div);
    }
}

apiFetchForecast();