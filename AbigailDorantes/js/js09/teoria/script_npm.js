console.log("Sesion Js09 08/07/22")

// GET request for remote image in node.js
function adquirirDatos(direccionhttp){
axios({
    method: 'get',
    //url: 'https://reqres.in/api/users?page=2',
    url: direccionhttp,
    responseType: 'stream'
  })
    /* .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    }); */

    .then((response)=>{
        console.log(response.data.data);
    })
}

    adquirirDatos("https://reqres.in/api/users?page=2'");
  
    console.log("Sesión tenebrosa de JS09 muajajajajaja")
