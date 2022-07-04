confirm("¿Asistirás a la fiesta?")
function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red"
    console.log("se modifica color del id pastel")
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML="Llegaron las aguas locas"
}

function cambiarNombre(uncoso, color){
    console.log(uncoso.innerHTML);
    uncoso.innerHTML=uncoso.innerHTML + " alcanzó bolo";
    uncoso.style.color =color;
}

function obtenerClases(){
    let coleccion=document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
    confirm("Se dio click")
}