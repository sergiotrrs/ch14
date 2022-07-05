console.log("Prueba de inicio. ");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
crearElemento();
cambiarEstilo();

function encontrarPorId() {
    //Obtenemos el objeto mediante su ID
    const element = document.getElementById("intro");
    console.log("Datos del elemento " + element.innerHTML);
    //ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
        "el  <b>texto/<b> en el párrafo intro es : " + element.innerHTML;
}


function encontrarPorTagName() {
    //Obtenemos los objetos que cumplan con el tag indicada
    //getElementsByTagName entrega un arreglo
    const elements = document.getElementsByTagName("p");
    console.log("Datos de elements : " + elements.length);

    document.getElementById("demo").innerHTML =
        "El texto en el primer párrafo <b> (index 0 ) </b> es " + elements[0].innerText;

    /**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  espacios ni etiquetas.
     */

}

function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML = 'El primer párrafo (index 0) con la clase saludo es: ' + elements;

}
function encontrarPorSelector(){
    const element = document.querySelectorAll(".saludo");
    console.log("Datos en elements "+ element.length);

    let unirStr=" ";
    element.forEach( dato => unirStr += dato.innerHTML+" "); //se unen los strings de p.saludo
    console.log("Prueba " + unirStr);
    document.getElementById("junta").innerHTML=unirStr;
    
}

function crearElemento(){
    const nuevoElemento = document.createElement("p");  // <p> </p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo"; // <p> Este es un nuevo elemento</p>
    document.body.appendChild(nuevoElemento);
    //document.getElementById("título").appendChild(nuevoElemento);
    //document.appendChild(nuevoElemento); // Se inserta objeto en el body
}

function cambiarEstilo(){
    document.getElementById("intro").style.color ="blue";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body { font =20px verdana; background-color: salmon }");
    estilo.appendChild(texto);
    document.head.appendChild(estilo);
    /**
     * <syle>
     * 
     * body{
     * font = 20px verdana;
     * background-color : blue;
     * }
     * 
     * </style>
     */
    document.head.appendChild(estilo);
}