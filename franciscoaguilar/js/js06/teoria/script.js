console.log("js06");
//encontrarPorId();
//encontrarPorTagName();
// encontrarPorClase();
//encontrarPorSelector();

/**
 * 
 * 
 */

function encontrarPorId(){
    //obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log("Dato de elemento: "+ element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
    "El <b>texto</b> en el párrafo intro es:  "+ element.innerHTML;

}

function encontrarPorTagName(){
//Obetnemos los objetos que cumplan con el tag indicado
//getElementByTagName entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length);

    document.getElementById("demo").innerHTML = 
    "El texto en el primer párrafo <b>(index 0)</b> es: "+ elements[0].innerHTML;
/**innerHTML retorna el contenido de un elemento, incluyendo todos los espacios y etiquetas HTML (hijos)
 * innerText retorna el contenido de un elemento y susu hijos, pero sin dobles espacios ni etiquetas
 * 
 */

 document.getElementById("demo").innerHTML = 
 "El texto en el primer párrafo <b>(index 0)</b> es: "+ elements[0].innerText;
}

function encontrarPorClase(){

    const elements = document.getElementsByClassName("saludo subtitulo");
    console.log("Elementos encontrados: "+elements.length);

    // document.getElementById("concatena").innerHTML = 
    // "El texto en el primer párrafo (index 0) es: "+ elements[0].innerHTML;

}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log("Datos en elements: "+ elements.length);
    let unirStr = "";
    elements.forEach(dato => unirStr+=dato.innerHTML+" ");// Se unen los strings de p.saludo
    document.getElementById("junta").innerHTML = unirStr;
}
//crearElemento();
function  crearElemento(){
    const nuevoElemento = document.createElement("p"); // <p></p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo"; // <p>Este es un nuevo párrafo</p>
   // const newElement = nuevoElemento.innerHTML;
    document.body.appendChild(nuevoElemento)//Para insertar un hijo/nodo en un elenento padre (Body)
    // document.getElementById("titulo").appendChild(newElement);
}

cambiarEstilo();

function cambiarEstilo(){
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    const texto  = document.createTextNode("body{font: 20px verdana; background-color: blue;}");
    estilo.appendChild(texto);
    /**
     * <style> 
     * body{
     * font: 20px verdadna;
     * background-color: blue;
     * }
     * </style>
     */
    document.head.appendChild(estilo);

}