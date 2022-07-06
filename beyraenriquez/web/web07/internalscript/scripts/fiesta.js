console.log("Queremos pastel, pastel");
document.getElementById("pastel").innerHTML = "Quiero romper la piñata";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}

function cambiarNombre (element , color ){
    console.log("Retorno "+element.innerHTML);
    element.innerHTML = element.innerHTML+ " alcanzó bolo";
    element.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre");
    console.log (coleccion);
}