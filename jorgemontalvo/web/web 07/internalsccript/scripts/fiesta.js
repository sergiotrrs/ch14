console.log("Queremos Pasteel, pastel");
document.getElementById("pastel").innerHTML = "Queremos pastel, pastel"

function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id pastel");

}
function abreSorpresa(){
    document.getElementById("pastel").innerHTML = "Llegaron las aguas locas";
    
// element puede tomar el nombre de cualquier valor "perro", "gato", etc
}
function cambiarNombre(element, color ){
    console.log("Retorno " + element.innerHTML);
    element.innerHTML = element.innerHTML + " alcanzó bolo";
    element.style.color = color;
}

function obtenerClases(){
    let coleccion = document.getElementsByClassName("nombre apelativo");
    console.log(coleccion)
}