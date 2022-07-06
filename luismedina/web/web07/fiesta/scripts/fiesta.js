console.log("Queremos pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel"

function pastelSorpresa() {
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");
}

function abreSorpresa() {
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas"
    console.log("Se cambio el texto a llegaron las aguas locas");
}

function cambiarNombre(element, color ) {
    console.log("Retorno"+element.innerHTML);
    element.innerHTML = element.innerHTML+ " Alzanzo bolo";
    element.style.color = color;
    console.log("Se cambio el color");
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
}