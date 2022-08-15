console.log("Teoria de la sesión Js06");
// contarPorID();
//encontrarPorTagName();
//encontarPorClase();
//encontarPorSelector();
nuevoElemento();





/*

function encontarPorID() {
    // obtener el objeto mediante si id
    const element = document.getElementById("Intro");
    console.log("Datos de elemento:" + element.innerHTML);
    // ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
    "El <b>texto</b> en el parrafo intro es :" + element.innerHTML;
}
*/

function encontrarPorTagName() {
    // obtener los objeteos que cumplan con tag  indicados 
    const elements = document.getElementsByTagName("p");

    console.log("Datos en elements: " + elements.length);

    document.getElementsByTagName("demo").innerHTML =
        "El texto en el primer parrafo <b> (index 0) </b> es :" + elements[0].innerHTML;

    /**
     * 
     * innerHTML retorna el contenido de una elemento, incluyendo todos los 
     * espacios y etiquetas HTM (hijos)
     * 
     * innerTxt retoma  el contenido de un elemnto y sus hijos, pero sin 
     * espacios ni etiquetas. 
     */
}

function encontarPorClase() {

    const elements = document.getElementsByClassName("saludo intro");

    console.log("Elemntos ncontrados: " + elements.length);
    document.getElementById("concatena").innerHTML =
        "El primer parrafo (index 0) con la clase saludo es: " + elements[0].innerHTML;
}


function encontarPorSelector() {
    const elements = document.querySelectorAll(".saludos");
    console.log("Datos en elemnto: " + elements.length);

    let unirStr = "";
    elements.forEach(dato=> unirStr += dato.innerHTML + " ")
    document.getElementById("concatena").innerHTML = unirStr;
}



function crearElemento() {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = "este es un nuevo parrafo";
    // document.body.appendChild(nuevoElemento);
    document.getElementById("titulo").appendChild(nuevoElemento);
}


function cambiarEstilo() {
    documento.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body {front = 20px verdana; bacgroun-color: blue;) ");
    estilo.appendChild(texto);
    document.head.appendChild(estilo);


    /**
     * <style>
     * fon = 20px verdana;
     * background-color :blue; 
     * 
     * 
     * </style>
     */
}



