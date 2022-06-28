console.log("Queremos pastel, pastel pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id Pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML ="Llegaron las aguas locas";
}
function cambiarNombre(element , color ){
    console.log("Retorno " + element.innerHTML);
    element.innerHTML =element.innerHTML + " alcanzó bolo";
    element.style.color = color;
}
function estadoPinata(){
    console.log("¡Dale! ¡dale! ¡dale!");
    document.getElementById("pinata").innerHTML ="*¡Caen dulces y se pelean a muerte por ellos!*";
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    let coleccion nombre = document.getElementsByClassName("nombre");
    console.log(coleccion);
    console.log(coleccion nombre);
}