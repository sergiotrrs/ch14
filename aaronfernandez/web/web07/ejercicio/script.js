function cambiarNombre(){
    let name = prompt("¿Cuál es tu nombre?");
    document.getElementById("nombre").innerHTML = "Hola" + name;
}