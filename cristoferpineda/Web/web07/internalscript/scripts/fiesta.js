console.log("Queremos pastel , pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}

function cambiarNombre(element , color ){
    console.log("Retorno "+element.innerHTML);//siempre poner un log para ver que esta retornando
    element.innerHTML = element.innerHTML+ " alcanzo bolo";
    element.style.color = color;
    //element esta funcionando como apuntador , puede cambiarse por otra palabra o lentra como e
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
} // coleccion es un arreglo 