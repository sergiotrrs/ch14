console.log("Queremos pastel, pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}

function cambiarNombre(e , color ){
    console.log("Retorno "+e.innerHTML);
    e.innerHTML = e.innerHTML+ " alcanzó bolo";
    e.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log (coleccion[0].innerHTML);

}