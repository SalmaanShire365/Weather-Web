const api = {
    key:'3e04e4cac52ea65e39ff8e6715796b67',
   // base:'https://api.openweathermap.org/data/2.5/' 
    
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress',setQuery);
  
  function setQuery(evt) {
    if(evt.keyCode == 13) {
     getResults(searchbox.value);
     console.log(searchbox.value);
    }
  }
  


function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => { 
    return weather.json();
  }).then(displayResults);
  }

  function displayResults (weather) {
    console.log(weather);
  }