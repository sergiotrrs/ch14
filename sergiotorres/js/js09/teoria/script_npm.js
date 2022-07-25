console.log("Sesión tenebrosa de JS09 muajajajajaja");

// GET request for remote image in node.js
async function adquirirDatos(proveedor = "Axios", direccionhttp) {
  if (proveedor == "Axios") {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: direccionhttp,
        responseType: "stream",
      })
        .then((usuarios) => {
          //console.log("Axios: "+JSON.stringify(usuarios));
          resolve(usuarios.data.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  } else if (proveedor == "Fetch") {
    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((responseJSON) => responseJSON.json())
        .then((usuarios) => {
          //console.log("Fetch: "+JSON.stringify(usuarios));
          resolve(usuarios.data)
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
  else{
    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((responseJSON) => responseJSON.json())
        .then((usuarios) => {
          //console.log("Json: "+JSON.stringify(usuarios));
          resolve(usuarios.data.data)}
          )
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }
}

solicitudBtn();
async function solicitudBtn() {
  datos = await adquirirDatos("Axios", "https://reqres.in/api/users?delay=3");
  console.log("Solicitud Axios:" + JSON.stringify(datos));
  datos = await adquirirDatos("Fetch", "https://reqres.in/api/users?delay=3");
  console.log("Solicitud Fetch:" + JSON.stringify(datos));
  datos = await adquirirDatos("Json", "./assets/json/users.json");
  console.log("Solicitud Json:" + JSON.stringify(datos));
}
