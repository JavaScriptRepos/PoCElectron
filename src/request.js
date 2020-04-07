const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbGVvbi5mb3JtQGdtYWlsLmNvbSIsImp0aSI6IjMwMTgxNThkLTZmMWUtNGU5ZS1iMmVhLTk1MzliZTk0MDkwYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTgzOTk2MTc1LCJ1c2VySWQiOiIzMDE4MTU4ZC02ZjFlLTRlOWUtYjJlYS05NTM5YmU5NDA5MGIiLCJyb2xlIjoiIn0.dPFu5zjDtBX1htfse0pSJ2kp4G6PeYUrDWvW3NQAThw';

const Http = new XMLHttpRequest();
//const url='https://jsonplaceholder.typicode.com/posts';
const urlPrediccionCaaHoy = 'https://opendata.aemet.es/opendata/api/prediccion/ccaa/hoy/coo';
const urlPrediccionNacHoy = 'https://opendata.aemet.es/opendata/api/prediccion/nacional/hoy'
const urlBeachs = 'http://www.aemet.es/documentos/es/eltiempo/prediccion/playas/Playas_codigos.csv';


function predictions(urlPrediccion) {
  Http.open("GET", urlPrediccion);
  Http.setRequestHeader('api_key', API_KEY);
  Http.send();
  Http.onreadystatechange = (e) => {
    if (Http.readyState == 4) {
      document.getElementById('peticiones').innerHTML = Http.responseText;
    }
  }
}

function predicNacHoy(){
  Http.open("GET", urlPrediccionNacHoy);
  Http.setRequestHeader('api_key', API_KEY)
  Http.send();

  Http.onreadystatechange = (e) => {
    if (Http.readyState == 4){
      var json = JSON.parse(Http.responseText);
      if (json.estado == 200){
        predictions(json.datos);
      }
    }
  }
}

function predicCaaHoy(){
  Http.open("GET", urlPrediccionCaaHoy);
  Http.setRequestHeader('api_key', API_KEY)
  Http.send();

  Http.onreadystatechange = (e) => {
    if (Http.readyState == 4){
      var json = JSON.parse(Http.responseText);
      if (json.estado == 200){
        predictions(json.datos);
      }
    }
  }
}

predicNacHoy();      

      
        
      
      