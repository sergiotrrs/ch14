console.log("queremos pastel,pastel");
document.getElementById("pastel").innerHTML="queremos pastel, pastel";
function pastelSorpresa(){
    document.getElementById("pastel").style.color="red";
    console.log("cambia color a rojo");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML="Llegaron las aguas locas";
}

function cambiarNombre(element, color){
    console.log("retorno"+ element.innerHTML);
    element.innerHTML = element.innerHTML+ " alcanzo bolo";
    element.style.color=color;
}
function obtenerClases(){
let coleccion = document.getElementsByClassName("nombre apelativo");
console.log(coleccion);
}