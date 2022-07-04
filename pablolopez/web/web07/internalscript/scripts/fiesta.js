console.log("Queremos pastel,pastel");
document.getElementById("pastel").innerHTML = "Quieremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id Pastel");
}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
}

function cambiarNombre(element, color){
    console.log("Retono "+element.innerHTML);
    // poner console.log("Retono "+element); nos muestra que es element, en este caso es un objeto y un párrafo de html
    element.innerHTML = element.innerHTML + " alcanzó bolo";
    element.style.color = color;
}
function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre"); //agregar apelativo a "nombre"
    console.log(coleccion);
}