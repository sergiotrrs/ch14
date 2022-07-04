console.log("Queremos pastel pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red" ;
    console.log("Modificar color de id pastel");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Aguas locas";
}

function cambiarNombre(element , color ) {
    console.log("Retorno") + element.innerHTML;
    element.innerHTML = element.innerHTML + "alcanzó bolo";
    element.style.color = color;
}

function obtenerClases(){
    let colection = document.getElementsByClassName("nombre apelativo");
    console.log(colection);

}