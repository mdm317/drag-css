const COORDS = 'coords';
const APIKEY = '427a1edc7fa60597f05bb26f9ab4799c';
const weather = document.querySelector('.js-weather');
function saveCoords(coords){
    localStorage.setItem(COORDS, JSON.stringify(coords) );
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = {
        latitude,
        longitude
    };
    saveCoords(coords);
}
function handleGeoFailure(){
    console.log('geo error');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoFailure);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}
function getWeather(lat,lon){
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    //http://api.openweathermap.org/data/2.5/weather?lat=37.5&lon=126.95&appid=427a1edc7fa60597f05bb26f9ab4799c$&units=metric
    fetch(url).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
        
    
}
function init(){
    loadCoords();
    

}
init();