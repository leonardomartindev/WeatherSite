// xtApLUFKQYflri2fe0wrjEhdBLzuLSGfHddj1I5JFHaeMwI50Zo5Lfec (PEXELS)


// seleção de elementos e declaração de variáveis

// const weatherIcon = document.querySelector(".icon-weather")
// const flagCountry = document.querySelector(".flag-country")
// const apiKey = "b2f06f5852557b46afd815f1a32bb829"
// const apiUnsplash = "https://source.unsplash.com/900x1600/?Londom";



// função para pegar os dados da API
// const getWeatherData = async (city) => {
//     const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
//     const res = await fetch(apiWeatherURL)
//     const data = await res.json();
    
//     return data;
// }

// função para mostrar os dados (DOM)

// async function showData(city) {
//     const weatherData = await getWeatherData(city)
//     console.log(weatherData)
//     const countryID = weatherData.sys.country
//     flagCountry.setAttribute("src", `https://flagsapi.com/${countryID}/flat/64.png`)
//     const iconID = weatherData.weather[0].icon
//     weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${iconID}@2x.png`)
//     const unsplashIMG = document.querySelector(".unsplash")
//     unsplashIMG.setAttribute("src", `https://source.unsplash.com/900x1600/?${weatherData.name}`)
    
// }
// showData("Londres")



