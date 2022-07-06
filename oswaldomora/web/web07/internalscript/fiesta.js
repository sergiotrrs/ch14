console.log("We want to party")
function pastelSorpresa() {
    console.log("Ahuevo");
}
function abreSorpresa() {
    console.log("Fiesta perrona que es esta");
}
function cambiarNombre (element, color ){
    console.log("Retorno " +element.innerHTML);
    element.innerHTML = element.innerHTML+ " alcanzó bolo";
    element.style.color = color;
}

function obtenerClases (){
    let coleccion =document.getElementsByClassName("nombre");
    console.log (coleccion);
}