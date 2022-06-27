console.log("Queremos pastel, pastel, pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color ="red";
    console.log("Se modifica el color del id pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML ="Llegaron las aguas locas";
    console.log("");
}
// para cambiar la variable dentro de la misma función puedo seleccionarla click derecho y change all occurrences
function cambiarNombre(e, color){
    console.log("Retorno "+e.innerHTML);
    e.innerHTML = e.innerHTML+ " alcanzó dulcero";
    e.style.color = color;
} 
function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log (coleccion);
}  