console.log("Sesion tenebrosa")

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
    axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
      })
        .then((response)=> {
          console.log(response.data.data);
          
        });

}

adquirirDatos("https://reqres.in/api/users?page=2");