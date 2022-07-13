console.log("Sesión tenebrosa de JS09");

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
axios({
    method: 'get',
    url: direccionhttp,
    responseType: 'stream'
  })
    .then((response)=> {
      console.log(response.data.data);
      //return response.data.data;
    });
}
adquirirDatos('https://reqres.in/api/users?page=2');
//console.log(await adquirirDatos('https://reqres.in/api/users?page=2'));