console.log("Sesión JS09");

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
axios({
    method: 'get',
    url: 'https://reqres.in/api/users?page=2',
    responseType: 'stream'
  })
    .then((response)=>{
        console.log(response);
        return response.data.data;
    });
}

console.log(adquirirDatos("https://reqres.in/api/users?page=2"));
  