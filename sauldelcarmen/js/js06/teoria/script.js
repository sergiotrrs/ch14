console.log("Teoria de la Sesion JS06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();
function encontrarPorId() {
    //Obtener el elemento por su id
    const elemento = document.getElementById("intro");
    console.log("Datos de elemento: " + elemento.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
	"El <b>texto</b> en el parrafo intro es: " + elemento.innerHTML;
}

function encontrarPorTagName() { 
    //Obtenemos los objetos que cumplan con el tag indicada.
    //getElementsByTagName entrega un arreglo con los objetos encotrados.
    const elementos = document.getElementsByTagName("p");
    console.log("Datos de elementos: " + elementos.length);

    document.getElementById("demo").innerHTML =
	//"El texto en el primer parrafo <b>(index 0)</b>es: " + elementos[0].innerHTML;
	"El texto en el primer parrafo <b>(index 0)</b>es: " + elementos[0].innerText;
/**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  espacios ni etiquetas.
     */

}

function encontrarPorClase(){
  const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML = 
	"El primer parrafo (index 0) con la clase saludo es : " + elements[0].innerHTML;
}

function encontrarPorSelector(){
  const elements = document.querySelectorAll("p.saludo");
    console.log("Datos de elements: " + elements.length);

    let unirStr="";
    elements.forEach( dato => unirStr += dato.innerHTML + " ");// une todos los elementos en un string
    document.getElementById("junta").innerHTML = unirStr;
    }
function crearElemento(){
    const nuevoElemento = document.createElement("p"); // <p><\p>
    nuevoElemento.innerHTML = "Este es un nuevo párrado"; //<p>Este es un nuevo párrado<\p>
    document.getElementById("titulo").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento); //Se inserta el objeto en body
}

function cambiarEstilo(){
    document.getElementById("intro").style.color = "red";
    const estilo = document.createElement("style");
    //Todos los elementos HTML son nodos
    // Los elementos, atributos y textos son nodos.
    const texto = document.createTextNode(" body { font: 20px verdana; background-color: blue;} ");
    estilo.appendChild(texto);
    /**
     * <style>
     *  body {
     *   font : 20px verdana;
     *   background-color: blue;
     *  }
     * 
     * </style>
     */
    document.head.appendChild(estilo);
}
