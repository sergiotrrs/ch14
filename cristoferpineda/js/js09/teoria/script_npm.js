console.log("Sesion tenebrosa JS09");

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
    axios({
        method: 'get',
        url: direccionhttp,
        responseType: 'stream'
      })
        .then((response)=> {
          //console.log(response.data.data);
         
        })
        .catch(error=>{
          console.log(error);
        });

}
solicitudBtn();
function solicitud(){
datos =adquirirDatos("https://reqres.in/api/users?page=2");
console.log("Solicitud Btn " + datos);
}

