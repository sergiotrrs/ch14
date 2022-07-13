//funcion para poner datos en la tabla del index.HTML
function ponerDatos(arregloUsuario) {
    let datosUsuario = "";
    for (user of arregloUsuario) {
      console.log(arregloUsuario);
      datosUsuario += `<tr>
          <td>${user.id}</td>
          <td>${user.email}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td><figure><img src="${user.avatar}"
          class="rounded-circle" alt="avatar">
          </figure></td>
          </tr>`;
    }
    document.getElementById("datos").innerHTML = datosUsuario;
  }
  
  //clave con la que se guardan datos en el localstorage
  const clave = "datosUsuarioLocal";
  
  //se obtienen datos con fetch y se guardan en localstorage
  function apiFetch(url) {
    fetch(url)
      .then(response => response.json())
      .then(dataJSON => {
        localStorage.setItem(clave, JSON.stringify({
          datosArreglo: dataJSON.data,
          time: Date.now()
        }));
        ponerDatos(dataJSON.data);
      })
  }
  
  //acceder a lo datos guardados en localstorage
  function accederLocal() {
    let datosLocales = localStorage.getItem(clave);
    let localUserData = JSON.parse(datosLocales);
    ponerDatos(localUserData.datosArreglo);
  }
  
  function estadoLocal() {
    let datosLocales = localStorage.getItem(clave);
    if (datosLocales != null) {
      let datosUsuario = JSON.parse(datosLocales);
      let tiempoActual = Date.now();
      let expiracion = 1 * 60 * 1000 + datosUsuario.time;
      if (tiempoActual < expiracion) return true;
      else localStorage.removeItem("datosUsuario");
    }
    return false;
  }
  
  // funcion que lee los datos para y ver si estan en localstorage o no
  function leerDatos() {
    url = 'https://reqres.in/api/users?delay=3';
    if (estadoLocal()) accederLocal();
    else apiFetch(url);
  }