const currentDay = new Date().getDay();

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

function displayResults(data) {
  let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let latestWeather = document.querySelector(".latestWeather");
  let city = document.createElement("h3");

  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let temperature = document.createElement("p");

  let h4 = document.createElement("h4");
  let div = document.createElement("div");

  city.textContent = `${data.name} Municipality, Philippines`;

  img.setAttribute("src", iconsrc);
  temperature.setAttribute("class", "temperature");
  temperature.innerHTML = `Temperature: ${Math.round(data.main.temp)}&deg;F - ${capitalizeWords(data.weather[0].description)}`;

  h4.textContent = "Three-Day Temperature Forecast";

  figure.appendChild(img);
  figure.appendChild(temperature);

  latestWeather.appendChild(city);
  latestWeather.appendChild(figure);
  latestWeather.appendChild(h4);
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

apiFetch();

const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=17.70&lon=121.50&units=imperial&appid=${apiKey}`;

async function apiFetchForecast() {
  try {
    const response = await fetch(forecast);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      threeDayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function threeDayForecast(data) {
  const forecast = data.list.slice(0, 8);
  const threeDayF = forecast.map((entry) => ({
    date: entry.dt_txt,
    temperature: entry.main.temp,
  }));

  threeDayF.forEach((day) => {
    let latestWeather = document.querySelector(".latestWeather");
    // let figure = document.querySelector(".figForecast");
    let div = document.createElement("div");
    let p = document.createElement("p");

    p.innerHTML = `${day.date}: ${day.temperature}&deg;F`;
    div.appendChild(p);

    latestWeather.appendChild(div);
  });
}

apiFetchForecast();