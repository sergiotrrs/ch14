console.log("Teoria de la sesion js06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//crearElemento();
cambiarEstilo();



function encontrarPorId(){
    //Obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log("Datos de elemento: "+element.innerHTML); 
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
    "El <b>texto</b> en el parrafo intro es: "+ element.innerHTML;
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicada
    //getElementbyTagName entrega un arreglo con los objetos encontrados
    const elements = document.getElementsByTagName("p");
    console.log("datos en elements: "+elements.length);
    document.getElementById("demo").innerHTML = 
    "El texto en el primer parrafo <b>(index 0)</b> es: "+elements[0].innerHTML;

    /**
     * innerHTML retorna el contenido de un elemnto, incluyendo todos los
     * espacios y etiquetas HTML(hijos).
     * 
     *innerText retorna el contenudo de un elemento y sus hijos pero, sin espacios ni etiquetas.
     */


}

/* 
function encontrarPorClase(){
    const elements = document.getElementsByClassName("saludo");
    console.log("elementos encontrados: "+elements.length);

   document.getElementById("junta").innerHTML =
   "El primer parrafo (index 0) con la clase saludo es: "+elements[0].innerHTML;
 } */

 function encontrarPorSelector(){
    const element = document.querySelectorAll("p.saludo");
    console.log("Datos en elements: "+elements.length);

    let unirStr = "";
    elements.forEach(dato=> unirStr+=dato.innerHTML+"")//se unen los strings de p.saludo
    document.getElementById("junta").innerHTML = unirStr;

 }

 function crearElemento(){
    const nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = "Este es un nuevo parrafo";
    document.body.appendChild(nuevoElemento); //Se inserta el objeto en el body
    document.getElementById(nuevoElemento).appendChild(nuevoElemento);
 }

 function cambiarEstilo(){
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    //Todos los elementos html son nodos
    //Los elementos, atributos y texto son nodos
    const texto = document.createTextNode("body { font = 20px verdana; background-color:blue;}");
    estilo.appendChild(texto);
    /**
     * <style>
     * body{
     * fint = 20px verdana;
     * background-color: blue;
     * }
     * 
     *</style>
     */
    document.head.appendChild(estilo);

 }

