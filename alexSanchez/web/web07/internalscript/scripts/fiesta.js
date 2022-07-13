console.log("Queremos pastel, pastel");
document.getElementById("pastel").innerHTML= "Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color ="red";
    console.log("Se modifica el color del id pastel")
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML= "Llegaron las aguas locas"
}
function cambioNombre(element, color){
    console.log("Retorno "+ element.innerHTML);
    element.innerHTML= element.innerHTML + " alcanzo bolo";
    element.style.color= color
}
function obtenerClases(){
    let coleccion= document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);

}