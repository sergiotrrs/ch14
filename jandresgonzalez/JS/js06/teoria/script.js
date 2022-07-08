/**
<<<<<<< HEAD
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
=======
 * Reponiendo el código de JS06 a partir del código de
 * Ailen Alvarado
 * 
 *    ¡ Gracias AILEEEN !
 */

console.log("Teoria de la sesion JS")
//encontrarPorId();
//encontrarPorTagName(); 
//encontrarPorClase(); 
//encontrarPorSelector
//encontrarPorSelector(); 
//crearElemento();
cambiarEstilo();


function encontrarPorId() {
    //Obtenmos el objeto mediante su id 
    const element = document.getElementById("intro");
    console.log("Datos de elemento: " + element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
        "El <b>texto</b> en el parrafo intro es: " + element.innerHTML;
}
function encontrarPorTagName() {
    //Obtener los objetos que cumplan con el tag indicado 
    //getElementsByTagName entrega un arreglo con los objetos encontrados
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length);

    document.getElementById("demo").innerHTML =
        "El texto en el primer parrafo <b>(index 0)</b> es: " + elements[0].innerHTML;
    /**
      * innerHTML retorna el contenido de un elemento, incluyendo todos los
      *  espacios y etiquetas HTML (hijos).
      * innerText retorna el contenido de un elemento y sus hijos, pero, sin
      *  espacios ni etiquetas.
      */


}

function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML =
        'El primer parrafo (index 0) con la clase saludo es:' + elements[0].innerHTML;
>>>>>>> 3982a803f737c4ed53c81f306244048c7cc2e6f1
}

function encontrarPorSelector() {
    const elements = document.querySelectorAll("p.saludo");
<<<<<<< HEAD
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
=======
    console.log('Datos en elements: ' + elements.length);

    let unirStr = "";
    elements.forEach(dato => unirStr += dato.innerHTML + " "); //Se unen los strings de p.saludi
    document.getElementById("junta").innerHTML = unirStr;
}

function crearElemento() {
    const nuevoElemento = document.createElement("p"); //<p></p>
    nuevoElemento.innerHTML = "Este es un nuevo parrafo"; //<p>Este es un nuevo parrafo</p>
    document.getElementById("titulo").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento);//Se inserta el objeto en el body
}
function cambiarEstilo() {
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("Style");
    //Todos los elementos HTML son nodos
    //Los elementos, atributos y textos son nodos.
    const texto = document.createTextNode(" body { font: 20px verdana; background-color: blue} ");
    estilo.appendChild(texto);
    /**
     * <style>
     * body{
     * font = 20px verdana; 
     * background-color: blue; 
     * } 
     * <style>
     */
    document.head.appendChild(estilo);

}
>>>>>>> 3982a803f737c4ed53c81f306244048c7cc2e6f1
