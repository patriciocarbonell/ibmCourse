const apiKey = '79b6176032887b93585da4bd27b39095';

function showWeather() {
    
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        console.log(data)
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

function showWeatherDetails() {

    const lat = document.getElementById("lattitude").value;
    const lon = document.getElementById("longitude").value;

    const apiUrlDetails = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrlDetails)
    .then(res => res.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        console.log(data)
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>
                                <p>Humidity: ${data.main.humidity} &#37</p>
                                <p>Wind speed: ${data.wind.speed} m/s</p>
                                <p>Atmospheric pressure: ${data.main.pressure} hPa</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('btnWeather').addEventListener('click',showWeather);
document.getElementById('btnWeatherDetails').addEventListener('click',showWeatherDetails);