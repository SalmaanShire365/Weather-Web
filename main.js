const api = {
    key:'0869704faa2fe7d201799d616c8c5163',
    base:'https://api.openweathermap.org/data/2.5/'
    
  }
  
  const searchbox = document.querySelector('.searchbox');
  searchbox.addEventListener('keypress',setQuery);
  
  function setQuery(evt) {
    if(evt.keyCode == 13) {
     // getResults(searchbox.value);
      console.log(searchbox.value);
    }
  }
  