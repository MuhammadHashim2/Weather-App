let city = document.querySelector(".inputcity").value;
const APIkey="014e42400300c8790d236d9e46eecde9";
const btn = document.querySelector(".btn");
let divcontent= document.querySelector(".content");
let para = document.querySelector(".para");
const getWeather= async ()=>{
    let city = document.querySelector(".inputcity").value;
    if(city==""){
        para.innerText="Enter City Name Please.";
        document.querySelector(".inputcity").focus();
    }
    else if(city!=""){
        para.innerText="";
        divcontent.style.display="block";
    }
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    const response = await fetch(url); //JSON Format
    // console.log(response);
    let data = await response.json();
    console.log(data.wind.speed);
    let weather = data.weather[0].main;
    let humidity = data.main.humidity;
    let img;
    if(weather=="Haze"){
        img="./haze.png";
    }
    else if(weather=="Clouds"){
        img="./clouds.gif";
    }
    else if(weather=="Rain"){
        img="./rain.gif";
    }
    else if(weather=="Clear"){
        img="./cloud.gif";
    }
    else if(weather=="Snow"){
        img="./snow.gif";
    }
    else if(weather=="Sun"){
        img="./sun.gif";
    }
    else{
        img="./cloud.gif";
    }
    divcontent.innerHTML=`<p class="head">Weather of ${city} </p> <div class="div"> <span class="temp">Temperature ${data.main.temp}°C</span><img class="windimg" src="./temperature.gif"><br><span class="weather">${weather}</span><img class="cloud" src="${img}"><br><span class="weather">Humidity ${humidity}%</span><img class="humidity" src="./humidity.gif"><br><p class="weather one">Wind ${data.wind.speed}km/h</p><img class="windimg one" src="./wind.gif"> </div>`;
    // console.log(data.status);
};

btn.addEventListener("click",getWeather);

let input = document.querySelector(".inputcity");
input.addEventListener("keypress",clk);
function clk(event){
     if(event.key==="Enter"){
        event.preventDefault();
        document.querySelector(".btn").click();
     }
}