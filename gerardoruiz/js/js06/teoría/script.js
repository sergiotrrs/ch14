console.log(`Teoría de la sesión JS06`);

//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
cambiarEstilo() 

function encontrarPorId() {
  // Obtenemos el objeto mediante su ID.
  const element = document.getElementById("intro");
  console.log("Datos de elemento : " + element.innerHTML);
  //Ingresa nuevos datos en el objeto con id "demo"
  document.getElementById("demo").innerHTML =
    "El <b>texto</b> en el primer párrafo intro es: " + element.innerHTML;
}

function encontrarPorTagName() {
  //Obtenemos los objetos que cumplan el tag indicado
  const elements = document.getElementsByTagName("p");
  console.log(`Datos en elements: ${elements.length}`);

  document.getElementById(
    "demo"
  ).innerHTML = `El texto en el primer párrado <b>index 0</b> es: ${elements[0].innerText}`;
}

function encontrarPorClase() {
  const elements = document.getElementsByClassName("saludo");
  document.getElementById("concatenar").innerHTML =
    "El primer párrado (index 0) con la clase saludo es: " +
    elements[0].innerHTML;
}

function encontrarPorSelector() {
  const elements = document.querySelectorAll("p.saludo");
  console.log("Datos en elements: " + elements.length);

  let unirStr = " ";
  elements.forEach((dato) => (unirStr += dato.innerHTML + " ")); //Se unen los strings de p.saludi
  document.getElementById("junta").innerHTML = unirStr;
}

function crearElemento() {
  const nuevoElemento = document.createElement("p"); //<p></p>
  nuevoElemento.innerHTML =
    "Esto es un nuevo elemento creado a partir de appendChild";
  document.getElementById("titulo").appendChild(nuevoElemento);
  document.body.appendChild(nuevoElemento); //Se inserta el objeto en el body
}

function cambiarEstilo() {
  document.getElementById("intro").style.color = "#17A589";
  const estilo = document.createElement("style");
  const texto = document.createTextNode("body { font : 18px Georgia ; background-color: #D5DBDB ; border-style: solid; padding: 5px;} ");


  estilo.appendChild(texto);
  document.head.appendChild(estilo);

}
