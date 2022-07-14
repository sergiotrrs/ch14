console.log("Teoria de la sesion js06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
//cambiarEstilo();
crearEstilo();


function encontrarPorId(){
    //obtenemos el objeto mediante su id,
    const element = document.getElementById("intro");
    console.log("Datos de elemmentos: " + element.innerHTML);//innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento. Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva
    //Ingregar nuevos datos en id = "demo"
    document.getElementById("demo").innerHTML="El <b>texto</b> en el parrafo intro es: " + element.innerHTML;
}
//Búsqueda de elementos HTML por tag name 
function encontrarPorTagName(){
    //getElementByTagName entrega un arreglo con los objetos encontrados
    const elements=document.getElementsByTagName("p");
    console.log("datos en tag name: " + elements.length );
    document.getElementById("demo").innerHTML = "El texto en el primer parrafo <b> index 0 </b> es: " + elements[1].innerHTML;
}

//innerHTML retorna el contenido de un elemento, incluyendo todos los espacios y etiquetas HTML (hijos)

//innerText retorna el contenido de un elemento y sus hijos pero sin dobles espacios y ni etiquetas



function encontrarPorClase(){
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("junta").innerHTML = "El primer parrafo (index 0) con la clase saludo es: " + elements.length;
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log("datos en selector: " + elements.length );
    let unirStr = "";
    elements.forEach(dato=>unirStr += dato.innerHTML + " ")
    document.getElementById("junta").innerHTML = unirStr;
}

function crearElemento(){
    const nuevoElemento= document.createElement("p");
    nuevoElemento.innerHTML = "Este es un nuevo parrafo";
    document.body.appendChild(nuevoElemento); //se inserta el objeto en body
   document.getElementById("titulo").appendChild(nuevoElemento);
}

function crearEstilo() {
    document.getElementById("intro").style.color="red";
    const estilo = document.createElement("style");
    const texto= document.createTextNode("body {font :20px verdana; background-color: blue;}");
    estilo.appendChild(texto);
    document.head.appendChild(estilo);
}

