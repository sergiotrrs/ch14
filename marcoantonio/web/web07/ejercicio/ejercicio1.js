
function cambiarNombre() {
    console.log("¿Cual es tu nombre?");
    let nombre = prompt("Cual es tu nombre")
    document.getElementById("name").innerHTML = "Hola"+ nombre;
}