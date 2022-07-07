console.log("Queremos pastel, pastel");
document.getElementById("pastel").innerHTML="Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color="red";
    console.log("Se modifica el color del id pastel");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML="Llegaron las aguas locas";
}

function cambiarNombre(perro, color ){
    console.log("Retorno " + perro.innerHTML);
    perro.innerHTML = perro.innerHTML + " alcanzo bolo";
    perro.style.color=color;
}

function obtenerClases(){
   let coleccion =document.getElementsByClassName("nombre apelativo");
   console.log(coleccion);
}