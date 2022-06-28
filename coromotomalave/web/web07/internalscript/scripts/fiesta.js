
//onClick cuando le das click sale lo que pediste hacer por ejemplo color.

console.log("Queremos pastel");

document.getElementById('pastel').innerHTML = "Queremos pastel, pastel";


//onClick function que llama del html.

function pastelSorpresa () {

    document.getElementById("pastel").style.color = "red";
}

function abreSorpresa () {

    document.getElementById("demo").innerHTML= "Llegaron las aguas locas";
}

//onClick event llamado con dos parametros.. element esa posision es para llamar a la etiqueta de html en este caso p y el color porque estamos cambiando el color.

function cambiarNombre(element , color) {

    console.log("retorno "+element.innerHTML);
    element.innerHTML = element.innerHTML+" Alcanzo dulcero";
//onClick con dos elementos
    element.style.color = color; 
}

//onClick event.. la llamamos con clases.

function obtenerClases() {
    let coleccion = document.getElementsByClassName('nombre apelativo');
    console.log(coleccion);
}




