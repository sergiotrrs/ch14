function cambiarNombre(){
    console.log("cambiar nombre");
    let nombre= prompt ("¿Cuál es tu nombre?");
    document.getElementById("name").innerHTML= "Hola " +nombre; 
}