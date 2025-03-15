async function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    
    const apiKey = "205cbffd6e24f5254b228eba8372ca5c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weather-result").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("weather-result").innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
