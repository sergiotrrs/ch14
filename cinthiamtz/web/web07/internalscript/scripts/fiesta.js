console.log("Queremos pastel, pastel ");
document.getElementById("pastel").innerHTML = "Quiero pastel, pastel ";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modificiae el color de id");
}

function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "llEGARON LAS AGUAS LOCAS";
}

function cambiarNombre(element, color){
    console.log("Retorno " +  element.innerHTML);
    element.innerHTML = element.innerHTML + " alcanzo dulcero"
    element.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
}