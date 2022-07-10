console.log("JS06");
//encontrarPorID();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
cambiarEstilo();

function encontrarPorID(){
    //Obtenemos el objeto mediante su ID
    const element =document.getElementById("intro");
    console.log("Datos de elemento"+element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML="El <b>texto</b> en el primer párrafo intro es: "+element.innerHTML;
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag (Regresa un arreglo de objetos)
    //Entrga un arreglo con los objetos encontrados
    const elements =document.getElementsByTagName("p");
    console.log("Datos en elements: "+elements.length);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML="El texto en el primer párrafo <b> index 0</b> es:"+elements[0].innerHTML;
}
/**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los dobles
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  los dobles espacios ni etiquetas.
     */
function encontrarPorClase(){
    // elemento con dos clases-_>document.getElementsByClassName("primeraClase segundaClase");
    const elements= document.getElementsByClassName("saludo");
    console.log(elements.length);
    document.getElementById("concatena").innerHTML="El primer parrafo (index 0) con la clase saludo es:"+elements[0].innerHTML;
}

function encontrarPorSelector(){
    //Si sólo buscara un clase document.querySelectorAll(.saludo)
    //Obten todos los elementos que incorporen la clase saludo (también con id) y esté en un tag <p >
    //Si la etiqueta tuviera más de dos clases document.querySelectorAll("p.saludo, .subtitulo");
    const elements=document.querySelectorAll("p.saludo");
    console.log("Datos en elements",elements);
    let unirStr="";
    elements.forEach(dato=>unirStr+=dato.innerHTML+" ");
    document.getElementById("concatena").innerHTML=unirStr;    
}

function crearElemento(){
    //Que elemento crear
    const nuevoElemento= document.createElement("p");
    //Que quiero dentro del elemento
    nuevoElemento.innerHTML="Este es un nuevo párrafo";
    //Se inserta el objeto en el documento, hasta el final
    //Como es la etiqueta principal, si exite
    document.body.appendChild(nuevoElemento);
    //Encontrar nuestro objeto div (como div es un child)
    //document.getElementById("titulo").appendChild(nuevoElemento);
    //Como solo es un sólo objeto solo puedo utilizarlo un a vex    
}

function cambiarEstilo(){
    document.getElementById("intro").style.color="red";
    //Creo la etiqueta <style>
    const estilo= document.createElement("style");
    //Creo un nodo con el contenido del style (Ya crea apertura y cierre)
    const texto=document.createTextNode("body{color:white; background-color:green;}");
    estilo.appendChild(texto);
    //lo añado al head
    document.head.appendChild(estilo);
}