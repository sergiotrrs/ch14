console.log("teoria");
// encontrarporId();  //esta funcion se invoca si no no se imprime nada en pantalla xD
// encontrarPorTagName();
// encontrarPorClase();
// encontrarPorSelector();

// 05-06-2022
// crearEelemento();
cambiarEstilo();


function encontrarporId(){
// obtener le objeto mediante su id
const element = document.getElementById("intro");
console.log("datos del elemento : " + element.innerHTML);
//  estoy ingresando nuevos datos en el objeto con id "demo"
document.getElementById("demo").innerHTML = "El <b>texto</b> en el párrafo intro es : " +element.innerHTML;
}

function encontrarPorTagName (){
//otenemos los objetps que cumplan con el Tag  indicado
// getElementsByTagName emtrega un arreglo  con los obejtos encontrados 
const elements= document.getElementsByTagName("p");
console.log("datos en elements " +elements.length);

document.getElementById("demo").innerHTML =
    "El texto en el primer párrafo <b>(index 0)</b> es :" +elements[0].innerText;

    /**
     * inener.HTML retorna el contenido de un elemento, incluyendo todos los espacio
     * y etiquetas HTML (hijos).
     * inner.tet retorna el contenido de un elemento y sis hijos, pero sin espacios ni etiquetas
     * Dierencia entre inner.tetx, no copia etiquetas, innter.html copia todo, etiquetas. diseño
     */
}


function encontrarPorClase() {
    const elements = document.getElementsByClassName("saludo");
    console.log("elementos encontrados: " +elements.length);
    document.getElementById("junta").innerHTML =
    "El primer párrafo (index 0) con la clase saludo es :" + elements[0].innerHTML;
}


function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log('datos en elements :' + elements.length);

    let unirStr="";
    elements.forEach( dato=> unirStr+=dato.innerHTML+" ");   //se unene los string de p.saludos
    document.getElementById("junta").innerHTML = unirStr;
}

function crearEelemento(){
    const nuevoElemento = document.createElement("p"); //<p></p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo";
    // document.body.appendChild(nuevoElemento); //se inserta el objeto en body (appendChil inserta el objeto)
    document.getElementById("titulo").appendChild(nuevoElemento);  //aquie tome el div como padre y apartir de ahi agregue un hijo que fue esta linea
}

function cambiarEstilo(){
    document.getElementById("intro").style.color = "white";
    const estilo = document.createElement("style");  //cree mi estilo con etiqueta estilo
    const texto =  document.createTextNode("body {font: 20px verdana; background-color: pink;}");  //cree un nodo  con las intruccion de estilo (CSS) y mi objeto texto
    estilo.appendChild (texto);  //sobre el estilo agregue el objeto texto
   
    /**
     * <style>
     * body {
     * font= 20px verdad;
     * background-color : blue;
     * }
     * </style>
     */
    document.head.appendChild(estilo); //aqui hago lo mismo que hiciera en CSS (linea 68 a 74 esta explicado)
}