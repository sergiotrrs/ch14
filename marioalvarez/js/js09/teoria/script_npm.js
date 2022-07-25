console.log("Sesion JS09");

// GET request for remote image in node.js
function adquirirDatos(url){
return axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })
    .then((response)=> {
       // console.log(response.data.data);
    }).catch(error=>{
        console.log(error);
    });
}
  function solicitudBoton(){
    datos=adquirirDatos('https://reqres.in/api/users?page=2');
    console.log("Solicitud:"+datos);
  }

  solicitudBoton();

