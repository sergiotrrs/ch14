function obtenerNombre (){
    let nombre = prompt ("¿Cuál es tu nombre?"); 
      document.getElementById("nombreCambiado").innerHTML = 'Hola ' + nombre;
}