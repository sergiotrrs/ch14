console.log("Teoria de la sesion JS06");
// encontrarPorId();
// encontrarPorTagName();
// encontrarPorClase();
// encontrarPorSelector();
// crearElemento();
cambiarEstilo();


function encontrarPorId() {
    //obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log("Datos de elemento: " + element.innerHTML);
    //Ingresasr nuevos datos en el objeto con su id "demo"
    document.getElementById("demo").innerHTML =
        "El <b>texto</b> en el primer párrafo intro es : " + element.innerHTML;

}

function encontrarPorTagName() {
    //Obtenemos los objetos que cumplan con el tad indicado
    // getElementByTagName entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length);

    document.getElementById("demo").innerHTML =
        "El texto en el primer párrafo <b>(Index 0)</b> es: " + elements[0].innerHTML;

    //innerHTML retorna el contenido de un elemento incluyendo todos los espacios y etiquetas de HTML (hijos)
    //innerText retorna el contenido de un elemento y sus hijos, pero sin espacion, dobles espacios ni etiquetas. 

}

function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo");
    console.log("Elementos encontrados: " + elements.length);
    document.getElementById("concatena").innerHTML =
        `El primer parrafo (index 0) con la clase saludo es : ` + elements[0].innerHTML;
}

function encontrarPorSelector() {
    const elements = document.querySelectorAll("p.saludo");
    console.log("Datos en elements: " + elements.length);

    let unirStrings = "";
    elements.forEach(dato => unirStrings += dato.innerHTML + " ");//Se unen los strings de p.saludo
    document.getElementById("junta").innerHTML = unirStrings;
}

function crearElemento() {
    const nuevoElemento = document.createElement("p"); // <p></p>
    nuevoElemento.innerHTML = "Este es un nuevo parrafo"; //Este es un nuevo parrafo
    document.body.appendChild(nuevoElemento); //se inserta el objeto en el body
    document.getElementById("titulo").appendChild(nuevoElemento);
}

function cambiarEstilo() {
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    //todos los elementos en HTML son nodos
    //los elementos, atributos y textos son nodos
    const estiloTexto = document.createTextNode("body{font=20px verdana; background-color:blue}");
    estilo.appendChild(estiloTexto);
    /**
     * <style>
     * body{
     * font=20px verdana;
     * background-color: blue;
     * }
     * 
     * </style>
     */
    document.head.appendChild(estilo);
}

