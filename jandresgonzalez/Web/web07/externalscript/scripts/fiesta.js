function pastelSorpresa() {
    document.getElementById("pastelSorpresa").style.color= "pink";
    console.log("Se moidifica el pastel");
    console.log(document.getElementById("pastelSorpresa"));
    document.getElementById("pastelSorpresa") = document.getElementById("pastelSorpresa") + "<img src=img/índice.jpg>";
    console.log(document.getElementById("pastelSorpresa"));
}

function abreSorpresa(){
    document.getElementById("button").innerHTML= "Llegaron las aguas";
}

function cambiarNombre(element) {
    console.log("Retorno " + element.innerHTML);
    element.innerHTML = window.prompt("¿Mejor otrx invitadx?");
}

function cambiarColor(element, color) {
    console.log("Retorno " + element.innerHTML);
    element.innerHTML = element.innerHTML + " " + "tiene dulces";
    element.style.color= color;
}

function obtenerClases() {
    const collectionClass = document.getElementsByClassName("name apelativo");
    console.log (collectionClass);
}

console.log("Queremos pastel");
document.getElementById("cancion").innerHTML="Estas son las mananitas";
document.getElementById("pastelSorpresa").innerHTML="Queremos pastel";