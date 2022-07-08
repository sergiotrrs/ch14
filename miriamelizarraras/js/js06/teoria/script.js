console.log("Teoría de la sesión JS06");
//encontrarPorId(); //se invoca a la función para que funcione
//encontrarPorTagName();
//encontrarPorClase();
//crearElemento();
cambiarEstilo();

encontrarPorSelector();

function encontrarPorId() {
  //obtenemos el objeto mediante su id
  const element = document.getElementById("intro");
  console.log("Datos de elemento: " + element.innerHTML); //el .innerHTML sirve para ver qué hay adentro de ese elemento.
  //ingresar nuevos datos en el objeto con id "demo"
  document.getElementById("demo").innerHTML =
    "El <b>texto</b> en el párrafo intro es: " + element.innerHTML;
}

function encontrarPorTagName() {
  //Obtenemos los objetos que cumplan con el tag indicado.
  //getElementsByTagName entrega un arreglo con los objetos encontrados.
  const elements = document.getElementsByTagName("p");
  console.log("Datos en elements: " + elements.length);

  document.getElementById("demo").innerHTML =
    "El texto en el primer párrafo <b>(index0)<b> es: " + elements[0].innerHTML;
}
/**
         * 
         *innerHTML retorna el contenido de un elemento, incluyendo todos los 
         *espacios y etiquetas HTML (hijos). InnerHTML trae todo, diseño y dobles espacios.

         *innerText retorna el contenido de un elemento y sus hijos pero 
         *sin dobles espacios ni etiquetas.
         Sin diseños*
         */

function encontrarPorClase() {
  const elements = document.getElementsByClassName("saludo");
  document.getElementById("concatena").innerHTML =
    "El primer párrafo (index 0) con la clase saludo es: " +
    elements[0].innerHTML;
}

function concatenar(dato, index, arreglo) {
  return dato.innerHTML;
}

function encontrarPorSelector() {
  const elements = document.querySelectorAll("p.saludo");
  console.log("Datos en elements: " + elements.length);

  let unirStr = ""; //unir strings
  elements.forEach((dato) => (unirStr += dato.innerHTML + " ")); //Se unen los strings de p.saludo
  document.getElementById("junta").innerHTML = unirStr;
}

function crearElemento() {
  const nuevoElemento = document.createElement("p"); // <p></p>
  nuevoElemento.innerHTML = "Este es un nuevo párrafo"; // <p>Este es un nuevo párrafo</p>
  document.body.appendChild(nuevoElemento); //body porque body es la etiqueta padre en donde está el id en el index, appendChild es para insertar un objeto en body
  document.getElementById("titulo").appendChild(nuevoElemento);
  //document.body.appendChild(nuevoElemento);//Se inserta el objeto en body
}

function cambiarEstilo() {
  document.getElementById("intro").style.color = "white "; //se crea la etiquela estilo
  const estilo = document.createElement("style"); //se crea la variable estilo
  // Todos los elementos HTML son nodos
  // Los elementos
  const texto = document.createTextNode(
    " body { fontStyle: verdana; font-Size: 20 px; background-color: navy; color: white;}"
  ); // se dan ordenes de diseño
  estilo.appendChild(texto); //sobre el estilo se agrega texto
  /**
   * <style>
   * body {
   *  font = 20px verdana;
   *  background-color: blue;
   * }
   *
   * </style>
   */
  document.head.appendChild(estilo);
}
