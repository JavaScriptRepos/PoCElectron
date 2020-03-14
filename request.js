const Http = new XMLHttpRequest();
      debugger;
      //const url='https://jsonplaceholder.typicode.com/posts';
      const url = 'https://opendata.aemet.es/opendata/api/avisos_cap/ultimoelaborado/area/65';
      Http.open("GET", url);
      Http.setRequestHeader('api_key','eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbGVvbi5mb3JtQGdtYWlsLmNvbSIsImp0aSI6IjMwMTgxNThkLTZmMWUtNGU5ZS1iMmVhLTk1MzliZTk0MDkwYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTgzOTk2MTc1LCJ1c2VySWQiOiIzMDE4MTU4ZC02ZjFlLTRlOWUtYjJlYS05NTM5YmU5NDA5MGIiLCJyb2xlIjoiIn0.dPFu5zjDtBX1htfse0pSJ2kp4G6PeYUrDWvW3NQAThw')
      Http.send();

      function write(id, text) {
        var str = document.getElementById(id).value;
        document.getElementById(id).innerHTML = (str +"\n"+text);
      }

      

      Http.onreadystatechange = (e) => {
        /* var resp = JSON.parse(Http.responseText);
        console.log(resp.length);
        for (i = 0; i < resp.length; i++) {
          console.log(resp[i].title);
          write("peticiones", resp[i].title);
        } */
        console.log(Http.response);
      }

      

      
        
      
      