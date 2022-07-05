console.log("Sesión JS07")

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
    console.log("nombre: " + formulario.elements['nombre'].value);
    console.log("apellido: " + formulario.elements['apellido'].value);
    //Se le indica un clave y un valor
    localStorage.setItem("Cohorte","CH14");
    localStorage.setItem("nombre",formulario.elements['nombre'].value);
    localStorage.setItem("apellido",formulario.elements['apellido'].value);
    localStorage.setItem("datos usuario",

    {
        "nombre": formulario.elements['nombre'].value,
        "apellido": formulario.elements['apellido'].value
    })
}

function recperarDatos(){
    const formulario = document.getElementById('formulario');
    formulario.elements['nombre'].value = localStorage,getItem("nombre");
    formulario.elements['apellido'].value = localStorage,getItem("apellido");
}