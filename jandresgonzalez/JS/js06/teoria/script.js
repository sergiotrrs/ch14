/**
 * JS06. Teoría de Uso de DOM de JS-HTML
 * ---------------------
 * En GenMx, 04/07/22
 */

console.log("Link");
//encontrarPorId ();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
crearElemento();
cambiarEstilo();

//Función que obtiene un elemento con id determinado
function encontrarPorId () {
    const element = document.getElementById("intro")
    console.log(`Datos del elemento: ${element.innerHTML}`)

    //Ingresar nuevos elementos en el HTML
    document.getElementById("demo").innerHTML =
    "El <b>texto</b> en el texto de demo es: " + element.innerHTML;

}

//Función que obtiene el primer elemento en un array de tags
function encontrarPorTagName () {
    //Obtener objetos que cumplarn con un tag
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements es: " + elements.length);
    document.getElementById("demo").innerHTML =
        "El texto en el primer párrafo de <i>index 0 </i> es <b>" + elements[0].innerHTML + "</b>";
}


/**
 * innerHTML retorna el contenido de un elemento
 * incluyendo espacios y etiquetas (las child)
 * 
 * innertext retorna sólo el texto
 * sin etiquetas ni dobles espacios:
 * 
 * i.e.
 * 
 * "El texto en el primer párrafo de <i>index 0 </i> es <b>" + elements[0].innerHTML + "</b>";
 * !==
 * "El texto en el primer párrafo de <i>index 0 </i> es <b>" + elements[0].innertext + "</b>";
 * 
 */

//Función que obtiene el primer elemento en un array de clase
function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML = "Chale" + elements[0].innerHTML;
}

function encontrarPorSelector() {
    const elements = document.querySelectorAll("p.saludo");
    console.log("Datos en elements : " + elements.length);

    let queryString = " ";
    elements.forEach(element => queryString+=element.innerHTML+" ");
    document.getElementById("concatena").innerHTML = queryString;

}

function crearElemento() {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = "Nuevo párrafo";
    document.getElementById("titulo").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento); //Inserta el objeto en body

}

function cambiarEstilo() {
    document.getElementById("demo").style.color = "blue";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body {font-size: 20px; font-family: verdana; background-color: blue }");
    estilo.appendChild(texto);
    document.head.appendChild(estilo);
}
