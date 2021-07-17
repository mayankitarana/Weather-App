let weather ={
    wKey:"3bf18aa32e010df48c8cd1d6090dc94d",
    getWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=metric&appid="
             +this.wKey
        )
        .then((res) => res.json())
        .then((data) => this.displayWeather(data));
    
    },
    displayWeather: function(data){
       const { name } =data;
       const {icon, description} = data.weather[0];
       const {temp, humidity} = data.main;
       const {speed} = data.wind;
       const {country} = data.sys;
       document.querySelector(".city").innerText = "Weather in " + name + " (" + country + ")";
       document.querySelector(".w_icon").src = "https://openweathermap.org/img/wn/"+ icon+ ".png";
       document.querySelector(".description").innerText = description;
       document.querySelector(".temp").innerText = temp + "°C";
       document.querySelector(".humidity").innerText = "Humdity : " + humidity + "%";
       document.querySelector(".wind").innerText = "Wind Speed : " + speed + " km/hr";
       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?weather," + name + "')";
    },
    search: function(){
        this.getWeather(document.querySelector(".searchbox").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

})

document.querySelector(".searchbox").addEventListener("keyup", function(event){

if(event.key== "Enter"){
    weather.search();
}
    
})

weather.getWeather("jaipur");