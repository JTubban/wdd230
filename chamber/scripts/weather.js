// const currentDay = new Date().getDay();

// function eventBanner(event) {
//     if (event >= 1 && event <= 3) {
//         const eventBanner = document.createElement('div');
//         eventBanner.setAttribute('id', 'eventBanner');
    
//         const pTag = document.createElement('p');
//         pTag.textContent = 'Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00pm. Thank you!';
        
//         eventBanner.appendChild(pTag);

//         // Add close button
//         const closeButton = document.createElement('button');
//         closeButton.setAttribute('class', 'closeButton');
//         closeButton.textContent = '❌';
//         closeButton.addEventListener('click', () => {
//             eventBanner.style.display = "none";
//         });
//         eventBanner.append(closeButton);

//          // Add banner to page
//         document.body.prepend(eventBanner);
//     }
// }

// eventBanner(currentDay);

// Weather
const apiKey = '107e304aaafe15d894ec5133f0144188';
const city = 'Tuao';
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
    let city = document.querySelector('.city');
    let temperature = document.querySelector('.temperature');
    let weatherIcon = document.querySelector('.weatherIcon');

    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);

    city.textContent = `${data.name} Municipality, Philippines`;
    temperature.innerHTML = `Temperature: ${Math.round(data.main.temp)}&deg;F - ${data.weather[0].description}`;
}

apiFetch();