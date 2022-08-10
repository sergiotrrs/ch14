console.log(`Sesion Tenebrosa de JS09`);
// GET request for remote image in node.js
function adquirirDatos (direccionhttp){
axios({
    method: 'get',
    url: direccionhttp,
    responseType: 'stream'
  })
    .then((response)=> {
      console.log(response.data.data);
      return response.data.data
    });

}
adquirirDatos("https://reqres.in/api/users?page=2")
//console.log(adquirirDatos("https://reqres.in/api/users?page=2"));