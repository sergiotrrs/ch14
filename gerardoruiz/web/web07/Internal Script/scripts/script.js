console.log("Hola mundo");
document.getElementById("piñata").innerHTML = "Queremos pastel"
 

/* function pastelSorpresa(){
    document.getElementById("pastel").style.color = "red";
    console.log("Se modifica el color del id del pastel");
}  */

function abreSorpresa(){
    document.getElementById("pastel").style.color = "red";
    
} 

function cambiarNombre(element, color, size){
    console.log("retorno " + element.innerHTML);
    element.innerHTML = element.innerHTML + " alcanzó dulces";
    element.style.color = color;
    element.style.fontSize = size;
}

function obtnerClases(){
    let coleccion = document.getElementsByClassName("nombre");
    console.log(coleccion[0].innerHTML);

}