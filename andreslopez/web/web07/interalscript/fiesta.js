console.log("Queremos pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel";
function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}
function cambiarNombre(element,color){
    console.log("Retorno "+element.innerHTML); //esto es lo mismo que los document.getElementById
    element.innerHTML = element.innerHTML+ " alcanzó bolo";
    element.style.color = color;
}
 function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre"); //solo  da los que tengan todas las clases llamadas
    console.log (coleccion);
 }