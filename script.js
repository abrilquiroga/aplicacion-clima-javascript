const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = "c5187678b8bcda49f9a5cec7aca9d855";
const diffKelvin = 273.15; // buscar que es

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchweather(city);
  } else {
    alert("Ingrese una ciudad valida");
    console.log("entre al else");
  }
});


function fetchweather(city) {
  fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then((data) => data.json())
    .then((data) => showWeatherData(data) )
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData')
    divResponseData.innerHTML =''
    
    const cityName = data.name
    const countryName = data.sys.country
    const temp= data.main.temp
    const humidity = data.name.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon


    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffKelvin)}°C`


    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es del ${humidity}%`
    const icoInfo = document.createElement('img')
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png` //verificar en ka documentacion como mostrar una imagen

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = ` La descripcion meteorologica es ${description}`


    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(humidityInfo)
    divResponseData.appendChild(icoInfo)
    divResponseData.appendChild(descriptionInfo)
}