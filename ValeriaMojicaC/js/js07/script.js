console.log("Sesion JS07");
let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function guardarDatos() {
    const formulario = document.getElementById('formulario');
    console.log(`Nombre: ${formulario.elements['nombre'].value}`);
    console.log(`Apellido: ${formulario.elements['apellido'].value}`);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte", "ch14");
    localStorage.setItem("nombre", formulario.elements['nombre'].value);
    localStorage.setItem("apellido", formulario.elements['apellido'].value);
    //Guarda los datos como un objeto (se acostumbra guardar datos en formato JSON)
    localStorage.setItem("datosUsuario",
        {
            nombre: formulario.elements['nombre'].value,
            apellido: formulario.elements['apellido'].value
        }
    )
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    formulario.elements['nombre'].value = localStorage.getItem("nombre");
    formulario.elements['apellido'].value = localStorage.getItem("apellido");
    //Recuperar los datos del objeto
    let datos = localStorage.getItem("datosUsuario");
    console.log(`Datos de usuario: ${datos.nombre + datos.apellido}`);
}