 console.log("Queremos pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log ("Se modifica el color del id pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML= "LLegaron las aguas locas";
}
function cambiarNombre(element, color ){
    console.log("Retorno" +element.innerHTML);
    element.innerHTML = element.innerHTML+ "Alcanzó bolo";
    element.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log (coleccion[0].innerHTML);
}