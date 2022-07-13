console.log("Teoría de la sesión JS06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();



function encontrarPorId() {
    //obtenemos el objeto mediante ID
    const element = document.getElementById("intro");
    console.log(`Datos de elemento: ${element.innerHTML}`);

    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
        "El <b>texto</b> en el párrafo intro es:" + element.innerHTML;
}

function encontrarPorTagName() {
    //Obtenemos los objetos que cumplan con el tag indicada
    //getElementsByTagName entrega un arreglo con los objetos encontrados.

    const elements = document.getElementsByTagName("p");
    console.log(`Elementos p en elements: ${elements.length}`);

    document.getElementById("demo").innerHTML =
        "<hr>El texto en el primer párrafo <b>(index=0)</b> " + elements[0].innerHTML;

    /**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los espacios 
     * y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, peros isn espacios ni etiquetas
     */
}

function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML =
        'El primer párrafo (index 0) con la clase saludo es: ' + elements[0].innerHTML;

}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log(`Datos en elements: ${elements.length}`);

     let unirStr=" ";
    elements.forEach(dato => {
        unirStr+=dato.innerHTML;
    }); 
    
    document.getElementById("concatena").innerHTML = unirStr;

}

(function crearElemento(){
    const nuevoElemento = document.createElement("p")//<p><\p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo";  //<p>Este es un nuevo párrafo<\p>

    //document.body.appendChild(nuevoElemento); //Se inserta el objeto en el body
    document.getElementById("titulo").appendChild(nuevoElemento);
})();

(function cambiarEstilo(){
    document.getElementById("intro").style = "background-color:Salmon";
    const estilo = document.createElement("style");
    const texto = document.createTextNode( `body{
        font = 20px arial; 
        background-color: lightblue;
    }`);
    estilo.appendChild(texto);
    document.head.appendChild(estilo);
})();
