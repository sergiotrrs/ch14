console.log("Sesión tenebrosa de JS09 muajajajajaja");

// GET request for remote image in node.js
async function adquirirDatos(proveedor = axios, direccionhttp) {
  if (proveedor == "axios") {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: direccionhttp,
        responseType: "stream",
      })
        .then((usuarios) => {
          console.log(usuarios.data.data);
          resolve(usuarios.data.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      fetch(direccionhttp)
        .then((responseJSON) => responseJSON.json())
        .then((usuarios) => resolve(usuarios.data))
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
}
