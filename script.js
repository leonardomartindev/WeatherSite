// Seleção de elementos e declaração de variáveis


const weatherIcon = document.querySelector(".icon-weather");
const flagCountry = document.querySelector(".flag-country");
const apiKey = "b2f06f5852557b46afd815f1a32bb829";
const apiUnsplash = "https://source.unsplash.com/900x1600/?Londom";
const searchIcon = document.querySelector(".search-icon img");
const searchInput = document.querySelector(".search");
const main = document.querySelector(".main");
const spinnerContainer = document.querySelector(".spinner-container"); 
const loadingPage = document.querySelector(".loading-page")
const locationNav = document.querySelector(".location-nav")

//seleção de datas
const tempTitle = document.querySelector(".temp")
const desc = document.querySelector(".desc")
const date = document.querySelector(".date")
const maxMinTd = document.querySelector(".max-min-td")
const firstMin = document.querySelector(".max-min span.max")
const lastMin = document.querySelector(".max-min span.min")
const humidity = document.querySelector(".humidity-td")
const presure = document.querySelector(".pressure-td")
const visibility = document.querySelector(".visibility-td")
const wind = document.querySelector(".wind-td")
const sunrise = document.querySelector(".sunrise-td")
const sunset = document.querySelector(".sunset-td")
const clouds = document.querySelector(".cloud-td")
const feelsLike = document.querySelector(".feels-like")

const meses = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ];
  
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const mes = dataAtual.getMonth();
  const ano = dataAtual.getFullYear();
  
  const dataFormatada = `${dia} de ${meses[mes]}, ${ano}`;
  

// Função para pegar os dados da API
const getWeatherData = async (value) => {
  showSpinner();
  main.classList.add("hidden");
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}&lang=pt_br`;
  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  hideSpinner();
  main.classList.remove("hidden");
  return data;
};

// Função para mostrar os dados da API no DOM
async function showData() {
    const value = searchInput.value;
    loadingPage.classList.add("hide")
    try {
        if (value) {
            const weatherData = await getWeatherData(value);
            // Dados da api
        const nameLocation = weatherData.name 
        const feelsLikeData = `${parseInt(weatherData.main.feels_like)}°C`
        const tempData = `${parseInt(weatherData.main.temp)}°C`
        const descData = weatherData.weather[0].description
        const maxData = `${parseInt(weatherData.main.temp_max)}°C`
        const minData = `${parseInt(weatherData.main.temp_min)}°C`
        const humidityData = `${weatherData.main.humidity}%`
        const pressureData = `${weatherData.main.pressure} mb`
        const visibilityData = `${weatherData.visibility/1000}km`
        const windData = `${weatherData.wind.speed}km/h`
        const sunriseData = weatherData.sys.sunrise
        const sunsetData = weatherData.sys.sunset
        const sunriseDate = new Date(sunriseData * 1000);
        const sunsetDate = new Date(sunsetData * 1000);
        const sunriseTimeData = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const sunsetTimeData = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const cloudsData = `${weatherData.clouds.all}%`

        //modificando dados da api no dom
        date.innerHTML = dataFormatada
        firstMin.innerHTML = maxData
        lastMin.innerHTML = minData
        tempTitle.innerHTML = tempData
        desc.innerHTML = descData
        maxMinTd.innerHTML = `${maxData}/${minData}`
        humidity.innerHTML = humidityData
        presure.innerHTML = pressureData
        visibility.innerHTML = visibilityData
        wind.innerHTML = windData
        sunrise.innerHTML = sunsetTimeData
        sunset.innerHTML = sunriseTimeData
        clouds.innerHTML = cloudsData
        locationNav.innerHTML = ` <i class="location-nav"><img src="imgs/location-icon.svg" alt="">${nameLocation}</i>`
        feelsLike.innerHTML = feelsLikeData

        // Mostrando imagem, bandeira e icon
        const countryID = String(weatherData.sys.country).toLowerCase();
        flagCountry.setAttribute(
          "src",
          `https://flagcdn.com/w2560/${countryID}.png`
        );
        const iconID = weatherData.weather[0].icon;
        weatherIcon.setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${iconID}@4x.png`
        );
        const unsplashIMG = document.querySelector(".unsplash");
        unsplashIMG.setAttribute(
          "src",
          `https://source.unsplash.com/900x1600/?${weatherData.name}`
        );
        console.log(weatherData);
      } else {
        throw new Error("Digite um valor válido no campo de pesquisa");
      }
    } catch (error) {
      window.alert("Ocorreu um erro ao obter os dados do clima. Por favor, tente novamente mais tarde.");
      main.classList.add("hidden")
    }
  }
  

// Adicionando event listener ao searchIcon
searchIcon.addEventListener("click", showData);
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      showData();
    }
  });

// Função para mostrar o spinner de carregamento
function showSpinner() {
  spinnerContainer.classList.add("active");
}

// Função para esconder o spinner de carregamento
function hideSpinner() {
  spinnerContainer.classList.remove("active");
}
