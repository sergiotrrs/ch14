console.log("Teoria de la sesion js06")
//encontrarPorId();
//encontarPorTagName()
//encontarPorClase()
//encontrarPorSelector();
//crearElemento();
cambiarEstilo();

function encontrarPorId(){
    //Obtenemos el objeto mediante su ID
    const element = document.getElementById("intro");
    console.log("Datos de elemento " + element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = "El <b>texto</b> en el parrafo intro es: " + element.innerHTML;
}
function encontarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicado
    //getElementsByTagName entrega un arreglo con los objetos encontrados.
    const elements= document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length)

    document.getElementById("demo").innerHTML = "El texto en el primer parrafo <b>(index 0)</b> es: " + elements [0].innerHTML;
}

/**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  espacios ni etiquetas.
     */

function encontarPorClase (){
    const elements = document.getElementsByClassName("saludo");
    
    document.getElementById("concatena").innerHTML= "El primer parrafo (index 0) con la clase saludo es: " +  elements[0].innerHTML;
}
function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log("Datos en elements: " + elements.length);

    let unirStr="";
    elements.forEach (dato=>unirStr+=dato.innerHTML+ "")// se unen los strings sw p.saludo
    document.getElementById("junta").innerHTML = unirStr;   
    
}
function crearElemento(){
    const nuevoElemento = document.createElement ("p");// <p> </p>
    //CREATEELEMENT se puede insertar cualquier etiqueta parrafos, formularios, h1,etc.
    nuevoElemento.innerHTML = "este es un nuevo parrafo";//<p> este es un nuevo parrafo</p>
    document.getElementById("titulo").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento); //se inserta el objeto en el body
}
function cambiarEstilo(){
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body{font = 20px verdana; background-color:blue}");
    estilo.appendChild(texto);
    /**
     * <style>
     * body {
     * font = 20px verdana;
     * background-color: blue;
     * }
     * </style>
     */
    document.head.appendChild(estilo);
}