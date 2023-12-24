const apikey = "6f32ee98d1672d788fe5c291f90787de";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// https://api.openweathermap.org/data/2.5/weather?q=london&appid=6f32ee98d1672d788fe5c291f90787de

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response =await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h";

    if(data.weather[0].main=="clouds"){
        weatherIcon.src ="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="images/mist.png";
    }
    // document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    
    checkweather(searchBox.value);
})



