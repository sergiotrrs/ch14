function cambiarNombre (element){
    let nombre = prompt("¿Cuál es tu nombre?");
    console.log(nombre);
    document.getElementById("saludo").innerHTML = "Hola "+nombre+"!!";

}