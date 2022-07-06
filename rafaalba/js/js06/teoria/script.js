console.log("Teoria de la sesión Js06")
// encontrarPorId();
// encontrarPorTagName();
// encontrarPorClase();
//encontrarPorSelector();
// crearElemento();
cambiarEstilo();

function encontrarPorId(){
    //Obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log("Datos de elemento: " + element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
        "El <b>texto</b> en el parrafo intro es : " + element.innerHTML;
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicado.
    //getElementByTagName entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elementos: " + elements.length);

    document.getElementById("demo").innerHTML =
    "El texto en el primer parrafo <b>(index 0)</b> es " + elements[0].innerHTML;
    
    /**
     * innerHtml retorna el contenido de un elemento,
     * incluyendo todos los espacios y etiquetas Html (hijos).
     * innerText retorna el contenido de un elemento y sus hijos,
     * pero sin espacios ni <etiquetas>.
     */

}

function encontrarPorClase(){
    const elements = document.getElementsByClassName("saludos");
    document.getElementById("junta").innerHTML =
    'El primer parrafo (index 0) con la clase saludo es : ' + elements[0].innerHTML;
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log('Datos en elements: ' + elements.length);

    let unirStr="";
    elements.forEach( dato => unirStr += dato.innerHTML +" " ) //Se unen los strg de p.saludo
    document.getElementById("junta").innerHTML = unirStr;
}

function crearElemento(){
    const nuevoElemento = document.createElement("p"); //<p></p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo"; //<p>Este es un nuevo párrafo</p>
    // document.body.appendChild(nuevoElemento); // Se incerta el objeto en body
    document.getElementById("titulo").appendChild(nuevoElemento);
}

function cambiarEstilo(){
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("Body {font:20px verdana; background-color: blue;} ");
    estilo.appendChild(texto);
    /**
     * <style>
     *  body {
     *      font = 20px verdana;
     *      background-color: blue;
     * }
     * </style>
     */
    document.head.appendChild(estilo);
}

