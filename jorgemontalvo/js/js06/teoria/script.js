console.log("Teoría de Sesión JS06");
// encontrarPorId();
// encontrarPorTagName();
// encontrarPorClase();
encontrarPorSelector();

function encontrarPorId(){
    //Obtenemos el metodo mediante su Id
    const element = document.getElementById("intro");
    console.log("Datos del elemento: " + element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
        "El <b>texto</b> en el párrafo intro es: " +element.innerHTML;
}   

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag 
    //getElementByTagName entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en element: " +elements.length);
    document.getElementById("demo").innerHTML = 
        "El texto en el primer párrafo <b>(index0)</b> es: "+ elements[0].innerHTML;
/**
 * innerHTML retorna el contenido de un elemento, incluyendo todos los
 * espacios y etiquetas HTML (hijos).
 * innertText retorna el contenido de un elemento y un sus hijos, pero , sin
 * espacios ni etiquetas.
 */
    }

function encontrarPorClase(){
    const elements = document.getElementsByClassName("saludo subtitulo");
    console.log("Elementos encontrados: " + elements[0].innerHTML);
    document.getElementById("concatena").innerHTML = 
    'El primer párrafo (index 0) con la clase saludo es: ' + elements[0].innerHTML;

}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo")
    console.log('Datos en elements: ' + elements.length)

    let unirStr="";
    elements.forEach(dato => unirStr+=dato.innerHTML + " ")//Se unen los strings de p.saludo
    document.getElementById("concatena").innerHTML = unirStr;
}