var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var weatherContent = document.querySelector('.weather-content');
var weatherApp = document.querySelector('.weather-app');

var numberTemp = document.querySelector('.number-temp');
var skyStatus = document.querySelector('.sky-status');
var visionValue = document.querySelector('.vision-value');
var windValue = document.querySelector('.wind-value');
var suncloudValue = document.querySelector('.suncloud-value');
var searchInput = document.querySelector('.search-input');
var body = document.querySelector('body');


async function getInfoWeather(capitalData) {
    
    console.log(weatherApp)
    var myApi = `https://api.openweathermap.org/data/2.5/weather?q=${capitalData}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    var dataWeather = await fetch(myApi)
    .then(response => response.json())
    
    
    if(dataWeather.cod == 200) {
        weatherContent.style.visibility = 'visible';
        
        city.innerText = dataWeather.name;
        country.innerText=', ' + dataWeather.sys.country;
        var temp = Math.round(dataWeather.main.temp);
        numberTemp.innerText = temp;
        visionValue.innerText = dataWeather.visibility + '(m)';
        skyStatus.innerText = dataWeather.weather[0].main;
        suncloudValue.innerText = dataWeather.main.humidity + '(%)';
        windValue.innerText = dataWeather.wind.speed + '(m/s)';
        time.innerText = new Date().toLocaleString('vi');
        console.log(temp);
        if(temp>=30) {
            var hotBg ='linear-gradient(to bottom,rgba(0,0,0,0.7), rgba(0,0,0,1)), url(images/hot.png) no-repeat center/cover';
            body.style.background= hotBg
            weatherApp.style.background = 'url(images/hot.png) no-repeat center/cover'; 
        }
        if(temp >= 25 && temp < 30) {
            var warmBg ='linear-gradient(to bottom,rgba(0,0,0,0.7), rgba(0,0,0,1)), url(images/warm.jpg) no-repeat center/cover';
            body.style.background=warmBg;
            weatherApp.style.background = 'url(images/warm.jpg) no-repeat center/cover'; 

        }
        if(temp>=15 && temp<25) {
            var coolBg = 'linear-gradient(to bottom,rgba(0,0,0,0.7), rgba(0,0,0,1)), url(images/cool.jpg) no-repeat center/cover';
            body.style.background= coolBg
            weatherApp.style.background = 'url(images/cool.jpg) no-repeat center/cover'; 

        }
        if(temp<15) {
            var coldBg = 'linear-gradient(to bottom,rgba(0,0,0,0.7), rgba(0,0,0,1)), url(images/cold.png) no-repeat center/cover';
            body.style.background= coldBg;
            weatherApp.style.background = 'url(images/cold.png) no-repeat center/cover'; 
            
        }

        console.log(dataWeather);
    }
    else {
        weatherContent.style.visibility = 'hidden';
    }

    
}



searchInput.onkeypress = function(e) {
    
    if(e.code == 'Enter') {
        var capitalData = searchInput.value.trim();
        getInfoWeather(capitalData);
       
    }
    else {
       

    }
}