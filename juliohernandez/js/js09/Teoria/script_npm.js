console.log("Sesión tenebrosa JS09, muajajajaja");

// GET request for remote image in node.js
function adquirirDatos(direccionHTTP){

    return axios({
        method: 'get',
        url: direccionHTTP,
        responseType: 'stream'
      })
        .then((response)=> {
          //console.log(response.data.data)
          
        });

    
        //No es necesario parse-arlo a json
}

console.log(adquirirDatos("https://reqres.in/api/users?page=2"));