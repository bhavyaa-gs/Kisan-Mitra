async function getWeather(){

  let city = document.getElementById("city").value;
  let result = document.getElementById("weatherResult");

  if(city==""){
    result.innerHTML = "⚠ Please enter city name.";
    return;
  }

  const apiKey = "c21d63ed5f9bf7cd067a7c5fdf5994c1";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  if(data.cod != 200){
    result.innerHTML = "❌ City not found.";
    return;
  }

  let temp = data.main.temp;
  let humidity = data.main.humidity;
  let condition = data.weather[0].description;

  let advisory = temp > 35 
    ? "High temperature — ensure irrigation."
    : "Weather is suitable for crop growth.";

  result.innerHTML = `
    🌦 Weather in ${city}<br><br>
    🌡 Temperature: ${temp} °C<br>
    💧 Humidity: ${humidity}%<br>
    ☁ Condition: ${condition}<br><br>
    🌾 Advisory: ${advisory}
  `;
}
