console.log("Sesión tenebrosa de JS09 muajajajajaja")

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
    return axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
      })
        .then((response)=> {
          //console.log(response.data.data);
          
        })
        .catch(error =>{
          console.log(error);
        })
}

solicitudBtn();
function solicitudBtn(){
  
  datos = adquirirDatos("https://reqres.in/api/users?page=2");
  console.log("Solicitud Btn: " + datos);
}