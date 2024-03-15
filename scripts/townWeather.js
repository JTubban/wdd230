const weatherIcon = document.querySelector('#weatherIcon');
const currentTemp = document.querySelector('.currentTemp');
const desc = document.querySelector('.desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=17.70&lon=121.50&units=imperial&appid=107e304aaafe15d894ec5133f0144188';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data.weather[0].description);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let roundedResult = Math.round(data.main.temp);
    currentTemp.innerHTML = `${roundedResult}&deg;F`;
    desc.textContent = data.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

apiFetch();