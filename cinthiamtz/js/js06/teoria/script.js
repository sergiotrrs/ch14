console.log("Hola js0");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
cambiarEstilo();
function encontrarPorId(){
    //Obtenemos el obejto mediante su id
    const element = document.getElementById("intro");
    console.log("Datos de elementos: " + element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =
    "El <b>texto<b> en el primer parrafo intro es :" +element.innerHTML;
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cunmplan con el tag indicada
    //getElementsByTagName entreha un arreglo con los objetos encontrados
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elementos : p " + elements)
    console.log("Datos en elementos : p " + elements.length)
    document.getElementById("demo").innerHTML = 
    "El texto en el primer párrafo <b> (index 0)<b> es :"+ elements[0].innerText
    /**
     * innerHTML retorna el contenido de un elemento incluidos todos los 
     * espacios y etiquetas html(hijos)
     * innerText retorna el contenido de un elemento y de sus hijos, pero, sin dobles espacios
     * ni etiquetas
     */

}

function encontrarPorClase(){
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML =
    "'El primer parafoo (index0)' con la calse saludo es" + elements[0].innerHTML;
}

function encontrarPorSelector(){
    const elements =document.querySelectorAll("h2.saludo, .subtitulo");
    console.log('datos en elements' + elements.length);
    let unirSt="";
    elements.forEach( dato => unirSt+=dato.innerText+ "" )//Se unen los string de p.saludo
document.getElementById("junta").innerHTML=unirSt;
}

function crearElemento(){
    const nuevoElemento =document.createElement("p");//es la etiqueta <p></p> que se quiere crear
    nuevoElemento.innerHTML="Este es un nuevo parrafo";//<p> este es uj nuevo parrafo </p>
    //insertar al html. Se puso body ya que es el padro y el nuevo elemento seria el hijo
    document.body.appendChild(nuevoElemento);//Inserta el objeto en el body
    //document.getElementById("titulo").appendChild(nuevoElemento);//Inserta el objeto en el body
}

function cambiarEstilo(){
    document.getElementById("intro").style.color ="red";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body {font: 20px verdana; background-color: pink; }");
    estilo.appendChild(texto);
    /**
     * <style>
     * body{
     * font = 20 px verdana;
     * background-color:blue;
     * }
     * </style>
     */
    document.head.appendChild(estilo);
}