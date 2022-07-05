console.log("Queremos pastel, pastel");
document.getElementById("pastel").innerHTML="Queremos pastel, pastel";

function pastelSorpresa(){
    document.getElementById("pastel").style.color="red";
    console.log("Se modifica el color del id pastel");
}

function sorpresa(){
    document.getElementById("pastel").innerHTML="Todos  y todas a bailar";
}

//Puede ser cualquier nombre el parámentro.
//Element me da el objeto, element=document.getElementById, si no lo hag así tendria que poner id
function cambiarNombre(element){
    console.log("Retorno:"+element.innerHTML);
    element.innerHTML=element.innerHTML+" alcanzó bolo";
}

function cambiarNombre(element, color){
    console.log("Retorno:"+element.innerHTML);
    element.innerHTML=element.innerHTML+" alcanzó bolo";
    element.style.color=color;
}

function obtenerClases(){
    //Coleccion es un arreglo que contiene los objetos
    //"nombre apelativo" es el nombre de una sola clase
    let coleccion=document.getElementsByClassName("nombre apelativo");
    console.log(coleccion);
}