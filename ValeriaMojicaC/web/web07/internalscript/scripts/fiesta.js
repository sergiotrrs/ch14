console.log("Queremos Pastel!");
document.getElementById("pastel").innerHTML = "Queremos Pastel, Pastel!";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "#05D34A";
    console.log("Se modifica el color del id Pastel");
}

function abreSorpresa() {
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas"
}

function cambiarNombre(element, color) {
    console.log(`Retorno ${element.innerHTML}`);
    element.innerHTML = element.innerHTML + " Alcanzo bolo";
    element.style.color = color;
}

function obtenerClases() {
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
}