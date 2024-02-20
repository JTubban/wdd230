let temperature = document.querySelector('.temperature');
let speed = document.querySelector('.speed');
let windChill = document.querySelector('.windchill');

let inFahrenheit = 40;
let windSpeed = 10;

temperature.innerText = `Temperature: ${inFahrenheit}°F`;
speed.innerText = `Wind speed: ${windSpeed}mph`;
windChill.innerText = `Wind Chill: ${calculateWindChill(inFahrenheit, windSpeed)}`;

function calculateWindChill(tempF, speed) {
    if (tempF <= 50 && speed > 3.0) {
        let windChill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        return windChill.toFixed(2);
    }else{
        return "Please enter Temperature in Fahrenheit below 51°F and Speed above 3.0mph.";
    }
}