let weather = {
    "apikey": "363627e31ff984daa7a536bf1d3220b2",
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + this.apikey).then((response) => response.json()).then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
            const {name} = data;
            const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        
        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerText = description.toUpperCase();
        document.querySelector(".temp").innerText = temp +"°C";
         document.querySelector(".humidity").innerText ="HUMIDITY : "+ humidity +" %";
         document.querySelector(".windspeed").innerText = "windspeed : ".toUpperCase()+ speed +" km/h";
      document.body.style.backgroundImage = 
    "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
  
    search: function(){
        this.fetchweather(document.querySelector("input.search").value)
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search .search").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
    weather.search();
    }
})






















