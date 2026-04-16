async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "ce6ac6244ba90c58d3d7ff69feb21f5b";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const weather = data.weather[0].description;

        document.getElementById("result").innerHTML =
            `Temp: ${temp}°C <br>
             Weather: ${weather} <br>
             Humidity: ${humidity}%`;

    } catch (error) {
        document.getElementById("result").innerText = "Error fetching data";
    }
}