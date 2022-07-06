console.log("Sesión JS07 ")

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
    console.log("nombre: "+formulario.elements['nombre'].id);
    console.log("apellido: "+formulario.elements['apellido'].value);
    //Se le indica una clave y un valor
    localStorage.setItem("Cohorte", "Ch14");
    localStorage.setItem("nombre",formulario.elements['nombre'].value);
    localStorage.setItem("apellido",formulario.elements['apellido'].value);
    //Se acostumbra a guardar como objeto de la siguiente manera:
    //Va a ser más eficaz para guardar menos datos en comparación a las líneas de arriba que ocupan más espacio
    //con ese JSONstringify lo guardo en formato JSON
    localStorage.setItem("datosUsuario",JSON.stringify(
    {
        nombre: formulario.elements['nombre'].value,
        apellido: formulario.elements['apellido'].value
    })
    )
}

function recuperarDatos(){
    const formulario = document.getElementById('formulario');
    formulario.elements['nombre'].value =localStorage.getItem("nombre");
    formulario.elements['apellido'].value =localStorage.getItem("apellido");
    //Lo convierto con JSON.parse para que lo lea no como objeto de dato
    let datos = JSON.parse(localStorage.getItem('datosUsuario'));
    console.log("Datos usuario "+ datos+['nombre'] + datos.apellido);

}


/* function imprimir(dato) {
  console.log("el dato es " + dato);
}

function imprimirHTML(dato) {
  let demo = document.getElementById("demo");
  demo.innerHTML = dato;
}

function suma(a, b, fncImprimir) {
  let suma = a + b;
  fncImprimir(suma);
}

suma(3, 5, imprimir);
suma(2, 8, imprimirHTML);
 */

function funcionCB() {
  console.log("2-. Se activa función callback");
  return "cualquier dato"
}

/*  console.log("1-. Antes de SetTimeout")
//setTimeout( function (){console.log("2.1 Se activa mi función anónima ") },  3000)   // setTimeOut ( Nombre_función, milisegundos a contar )

setTimeout(() => 
  console.log("2.2 Se activa la función flecha")
, 3500);

console.log("3-. Despues de setTimeOut"); 
 */


//Promesas