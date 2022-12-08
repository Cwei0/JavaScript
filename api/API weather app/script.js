// Weather App
//  * TODO: Complete getWeatherData() to return json response Promise
//  * TODO: Complete searchCity() to get user input and get data using getWeatherData()
//  * TODO: Complete showWeatherData() to set the data in the the html file from response
//  */

const getWeatherData = (location) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "afc81abcd7mshb4905212c14dc41p1b4b94jsn1de61ee99b8b",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  return fetch(`https://open-weather13.p.rapidapi.com/city/${location}`, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  // its in farenheit
};

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;

  const data = await getWeatherData(city);
  showWeatherData(data);
};
