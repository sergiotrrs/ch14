console.log("Queremos pastel, pastel, pastel");

document.getElementById("pastel").innerHTML = "romper la piñata";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Cambiamos el color de id pastel");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "llegaron las aguas locas";
}
    
function estadoPinata(){
    document.getElementById("demo").innerHTML = "Ya te la rompi";
}

// con el click derecho en change all occurrenses y se cambia todas las palabras iguales a la seleccionada 

function cambiarNombre(estado, color ){

    console.log("retorno" + estado.innerHTML);
    estado.innerHTML = estado.innerHTML + "alcanzo bolo";
    estado.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre");
    console.log(coleccion[1].innerHTML);
}