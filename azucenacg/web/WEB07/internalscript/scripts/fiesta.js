console.log("Queremos pastel, pastel");
document.getElementById("pastel").innerHTML="queremos pastel pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color="red";
    console.log("Se modifica color de id pastel");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML="Llegaron las aguas locas";
    
}

// element inner elige justo ese elemento al que se le está dando 
// clic
// Cambia el color de acuerdo al color de entrada que se da en index
// element y color son los parámetros de la función 
function cambiarNombre(element, color){
 console.log("Retorno "+ element.innerHTML);
 element.innerHTML=element.innerHTML + " alcanzó dulces"
 element.style.color=color;
}

function obtenerClases(){
    let coleccion= document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
    console.log(coleccion[0].innerHTML);
}