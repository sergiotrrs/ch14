console.log("Sesion tenebrosa de JS09 muajajajaja") 

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

console.log(adquirirDatos("https://reqres.in/api/users?page=2"));

