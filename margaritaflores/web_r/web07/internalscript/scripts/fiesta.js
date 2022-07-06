console.log("Queremos pastel, pastel");
document.getElementById ("pastel").innerHTML = "Pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log ("Se modifica el color del id pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}
// Se llama la función en JavaScript, agregada en HTML//
function cambiarNombre(element, color ){
    console.log("Retorno " + element.innerHTML);
    element.innerHTML = element.innerHTML + " alcanzo bolo";
    element.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
}