console.log("hola jesus");

//CLAVE con la que se guardan datos en el localstorage
const CLAVE = "datosUsuarioLocal";

//funcion para poner datos en la tabla del index.HTML
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
function apiFetch(url) {
  fetch(url)
    .then(response => response.json())
    .then(dataJSON => {
      localStorage.setItem(CLAVE, JSON.stringify({
        datosArreglo: dataJSON.data,
        time: Date.now()
      }));
      ponerDatos(dataJSON.data);
    })
}

//acceder a lo datos guardados en localstorage
function accederLocal() {
  ponerDatos(JSON.parse(localStorage.getItem(CLAVE)).datosArreglo);
}

function estadoLocal() {
  let datosLocales = localStorage.getItem(CLAVE);
  if (datosLocales != null) {
    let datosUsuario = JSON.parse(datosLocales);
    let tiempoActual = Date.now();
    let expiracion = 1 * 60 * 1000 + datosUsuario.time;
    if (tiempoActual < expiracion) return true;
    else localStorage.removeItem("datosUsuario");
  } else return false;
}

// funcion que lee los datos para y ver si estan en localstorage o no
function leerDatos() {
  //url = ;
  if (estadoLocal()) accederLocal();
  else apiFetch('https://reqres.in/api/users?delay=3');
}
