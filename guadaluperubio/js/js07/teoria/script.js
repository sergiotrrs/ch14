console.log("teoria sesión js07")


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

function guardarDatos(){
    const formulario = document.getElementById('formulario');
    console.log("nombre: " + formulario.elements['nombre'].id);
    console.log("apellido: " + formulario.elements['apellido'].value);
    localStorage.setItem("cochorte", "ch14");                       //setItem es para guardar datos 
    localStorage.setItem("nombre", formulario.elements['nombre'].value);
    // localStorage.setItem("apellido", formulario.elements['apellido'].value);
    // // localStorage.setItem("datosUsuario",
    // {
    //     "nombre": formulario.elements['nombre'].value;
    //     "apellido" : formulario.elements['apellido'].value
    // }
    // )
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');                   //getItem manda a llamar esos datos guardados.
    formulario.elements['nombre'].value = localStorage.getItem("nombre");
    formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = localStorage.getItem("datosUsuario");
    console.log(`Datos usuario: ${datos.nombre} ${datos.apellido}`)
}