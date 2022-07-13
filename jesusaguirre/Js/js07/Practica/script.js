console.log("hola ch14");
//urls 
const URL_DELAY = "https://reqres.in/api/users?delay=3";
const URL_PAGE2 = "https://reqres.in/api/users?page=2";
//CLAVE con la que se guardan datos en el localstorage
const CLAVE = "datosUsuarioLocal";

//funcion para poner datos como cards
function ponerDatos(arregloUsuario) {
  let datosUsuario = "";
  for (user of arregloUsuario) {
    console.log(arregloUsuario);
    datosUsuario +=
      `<div class="col-12 col-md-6 col-lg-4">
              <div class="card p-3">
                <img
                  src="${user.avatar}"
                  class="rounded-circle card-img-top"
                  alt="avatar"
                />
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">
                      First name: ${user.first_name}
                    </li>
                    <li class="list-group-item">
                      Last name: ${user.last_name}
                    </li>
                  </ul>
                </div>
              </div>
            </div>`;
  }
  document.getElementById("datos").innerHTML = datosUsuario;
}

//se obtienen datos con fetch y se guardan en localstorage
function apiFetch(url, pagina) {
  fetch(url)
    .then(response => response.json())
    .then(dataJSON => {
      if (pagina == 1) {
        localStorage.setItem(CLAVE, JSON.stringify({
          datosArreglo: dataJSON.data,
          tiempo: Date.now()
        }));
      }
      ponerDatos(dataJSON.data);
    })
}

//acceder a los datos guardados del localstorage y los mostramos como cards
function accederLocal() {
  ponerDatos(JSON.parse(localStorage.getItem(CLAVE)).datosArreglo);
}
/* funcion para saber hay algo guardado en el local y si existe hacer que tenga un minuto de expiracion*/
function estadoLocal(pagina) {
  if (pagina != 1) return false;
  let datosLocales = localStorage.getItem(CLAVE);
  if (datosLocales != null) {
    let datosUsuario = JSON.parse(datosLocales);
    let tiempoActual = Date.now();
    let expiracion = 1 * 60 * 1000 + datosUsuario.tiempo;
    if (tiempoActual < expiracion) return true;
    else localStorage.removeItem("datosUsuario");
  } else return false;
}

// funcion que lee los datos 
function leerDatos(url, pagina) {
  if (estadoLocal(pagina)) accederLocal();
  else apiFetch(url, pagina);
}
