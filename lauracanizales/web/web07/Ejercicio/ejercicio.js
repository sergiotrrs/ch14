
function cambiarNombre(){
    let nombre= prompt('¿Cuál es tu nombre?');
    let saludo = document.getElementById('saludo');

    saludo.innerHTML ='Hola ' + nombre;
}