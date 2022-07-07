console.log("Sesion js07");

let x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
/*
function guardarDatos() {
  const formulario = document.getElementById(`formulario`);
  console.log("Nombre: " + formulario.elements[`nombre`].id);
  console.log("Apellido: " + formulario.elements[`apellido`].value);
  //Se le indica una clave y un valor
  localStorage.setItem("Cohorte", "Ch14"); // aqui se estan guardando datos
  localStorage.setItem("nombre", formulario.elements[`nombre`].value);
  localStorage.setItem("apellido", formulario.elements[`apellido`].value);
  //se acostumbra a duardar como objetos que es de la siguiente manera
  localStorage.setItem("datosUsuario", {
    nombre: formulario.elements[`nombre`].value,
    apellido: formulario.elements[`apellido`].value,
  });
}

function recuperarDatos() {
  const formulario = document.getElementById(`formulario`);
  //formulario.elements[`nombre`].value = localStorage.getItem(`nombre`);
  //formulario.elements[`apellido`].value = localStorage.getItem(`apellido`);
  let datos = JSON.parse(localStorage.getItem("datos"));
  console.log("datos": ${datos['nombre']} ${datos.apellido}`);
  formulario.elements['nombre'].value= datos.nombre;
  formulario.elements['apellido'].value = datos.apellido;
}*/

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
   // formulario.elements['nombre'].value = localStorage.getItem("nombre");
   // formulario.elements['apellido'].value = localStorage.getItem("apellido");
    let datos = JSON.parse( localStorage.getItem("datos") );
    console.log(`Datos usuario: ${datos['nombre']} ${datos.apellido}`)
    formulario.elements['nombre'].value = datos.nombre;
    formulario.elements['apellido'].value = datos.apellido ;
}
function guardarDatos(){
    const formulario = document.getElementById('formulario');
    console.log("nombre: " + formulario.elements['nombre'].id);
    console.log("apellido: " + formulario.elements['apellido'].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte",14);
    //localStorage.setItem("nombre", formulario.elements['nombre'].value);
    //localStorage.setItem("apellido", formulario.elements['apellido'].value);
    localStorage.setItem("datos", JSON.stringify(
     {
        nombre: formulario.elements['nombre'].value,
        apellido:formulario.elements['apellido'].value
     })
    );
}
