const apiKey = "6f32ee98d1672d788fe5c291f90787de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {
        if (!city) {
            alert("Please enter a city name");
            return;
        }

        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            const weatherMain = data.weather[0].main.toLowerCase();
            setWeatherIcon(weatherMain);
        } else {
            console.error("Error fetching weather data:", data.message);
            alert("Error fetching weather data. Please try again.");
        }
    } catch (error) {
        console.error("An unexpected error occurred:", error);
        alert("An unexpected error occurred. Please try again.");
    }
}

function setWeatherIcon(weatherMain) {
    switch (weatherMain) {
        case "clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = ""; // Set a default image or leave it blank
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
