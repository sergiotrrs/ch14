
function cNombre(){
    console.log("aqui va el cambio de nombre con prompt");
    let nuevo = prompt("¿Cuál es tu nombre?");
    document.getElementById("name").innerHTML = "Hola " + nuevo;

    
}
