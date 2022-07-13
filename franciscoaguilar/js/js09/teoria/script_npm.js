console.log("Sesion js09");

function adquirirDatos(direccionhttp){
axios({
    method: 'get',
    url: direccionhttp,
    responseType: 'stream'
  })
    .then((response)=> {
      console.log(response.data.data);
      return response.data.data;
    });
}

console.log(adquirirDatos("https://reqres.in/api/users?page=2"));

