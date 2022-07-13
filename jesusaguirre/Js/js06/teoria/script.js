console.log('teoria de la sesio js06')
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
cambiarEstilos();
function encontrarPorId() {
    //obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log('datos de elemento' + element.innerHTML);
    //ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
        "El <b>texto</b> en el parrafo intro es : " + element.innerHTML

}
function encontrarPorTagName() {
    //obtener los objetos que cumplan con al tag indicada
    //getelements by tagname entrega un arreglo con los objetos encontrados
    const elements = document.getElementsByTagName("p");
    console.log("datos en elements" + elements.length);

    document.getElementById("demo").innerHTML =
        "El texto en el primer parrafo <b>(index 0)</b> es :" + elements[0].innerHTML;
    /**
     * innerHTML retorna el contenido de un elemento, incluyendo  todos los 
     * espacios y etiquetas HTML (hijos).
     * innerText retorna sl contenido de un elemento y sus
     * hijos, pero sin dobles espacios  ni etiquetas
     */
}
function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo ");
    document.getElementById("concatena").innerHTML =
        "El primer parrafo (index 0) con la clase saludo es :" + elements[0].innerHTML;
}
function encontrarPorSelector() {
    const elements = document.querySelectorAll("h2.saludo, .hi");
    console.log("datos en elements:" + elements.length);

    let unirstr = "";
    elements.forEach(dato => unirstr += dato.innerHTML + " ");//se unen los strings de p.saludo
    document.getElementById("concatena").innerHTML = unirstr;

}
function crearElemento(){
    const nuevoElemento = document.createElement('p');
    nuevoElemento.innerHTML ="Este es un nuevo parrafo";
    document.body.appendChild(nuevoElemento); //se inserta el objeto en body
    document.getElementById("titulo").appendChild(nuevoElemento);
}
function cambiarEstilos(){
    document.getElementById("intro").style.color ="	#8B4513";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body{font : 25px verdana; background-color: #F5DEB3;}");
    estilo.appendChild(texto);
    /**
     * <style>
     * body{
     * font = 20px verdana;
     * background-color:blue;
     * }
     * </style>
     */
    document.head.appendChild(estilo);
}

