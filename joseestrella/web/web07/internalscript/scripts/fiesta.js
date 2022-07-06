console.log("Queremos pastel, pastel, pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel, pastel";

function pastelSorpresa() {
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");
}

function abreSorpresa(){  
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}

function cambiarNombre(element, color ){
    console.log("Retorno " + element.innerHTML);
    element.innerHTML = element.innerHTML + " alcanzo bolo";
    element.style.color = color;
}