console.log("Queremos pastel");
document.getElementById("pastel").innerHTML="Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("se modifica el color del id");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML="Llegaron las aguas locas";
}

function cambiarNombre(element,color){
    console.log("retorno" + element.innerHTML);
    element.innerHTML = element.innerHTML + " alcanzo bolo";
    element.style.color= color;

}
function obtenerClases(){
    let coleccion= document.getElementsByClassName("nombre");
    console.log(coleccion);
}
