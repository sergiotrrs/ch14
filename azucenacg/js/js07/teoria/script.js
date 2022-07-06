console.log("sesion js07");

// Todo esto es de la API de geolocalización
// hasta show position es sacado de internet

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
   const formulario=document.getElementById('formulario');
   console.log("nombre: " + formulario.elements['nombre'].id); 
   console.log("apellido: " + formulario.elements['apellido'].value); 
    localStorage.setItem("Cohorte", "Ch14");
    localStorage.setItem("nombre", formulario.elements['nombre'].value);
    localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datosUsuario"),
    {
        // pa guardar como objeto
        "nombre": formulario.elements['nombre'].value,
        "apellido": formulario.elements['apellido'].value
    }
}

// aplication>localstorage en la parte izquierda


function recuperarDatos() {
    const formulario=document.getElementById('formulario');
    formulario.elements['nombre'].value=localStorage.getItem("nombre");
    formulario.elements['apellido'].value=localStorage.getItem("apellido");
    let datos= localStorage.getItem("datosUsuario");
    console.log("datos usuario: "+ datos.nombre)
}   