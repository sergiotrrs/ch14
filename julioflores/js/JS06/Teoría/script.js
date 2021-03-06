//encontrarporId();
function cambiarEstilo();

function encontrarporId() {
    //Obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log("Datos de elemento: " + element.innerHTML);
    //ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
        "El <b>texto</b> en el párrafo intro es : " + element.innerHTML;
}

//encontrarPorTagName();
/**
 * Obteniendo los objetos que cumplan con el tag indicado getElementsByTagName entrega un arreglo con los objetos encontrados
 *  innerHTML retorna el contenido de un elemento, incluyendo todos los espacios y etiquetas HTML (hijos). 
 * innerText retorna el contenido de un elemento y sus hijos, pero, sin
 * dobles espacios ni etiquetas. 
**/
function encontrarPorTagName(){
    
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length);
    
    document.getElementById("demo").innerHTML = 
        "El texto en el primer párrafo <b>(index 0)</b> es: " + elements[1].innerHTML;  
}

//function encontrarPorClase();
function encontrarPorClase() {
    document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML =
    "El primer párrafo (index0) con la clase saludo es: " + elements[0].innerHTML; //para concatenar se utiliza el + elements
}

//function encontrarPorSelector()
function encontrarPorSelector(){
    const elements =document.querySelectorAll("p.saludo");
    console.log("Datos en elements: " + elements.length);

    let unirStr= "";
    elements.forEach(dato=> unirStr+=dato.innerHTML+ " ") //Se unen los strings de p.saludo
    document.getElementById("concatena").innerHTML = unirStr; 
}
  
function crearElemento(){
    const nuevoElemento = document.createElement("p"); //<p></p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo"; //<p>Este es un nuevo párrafo</p>
    document.getElementById("titulo").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento); //Se inserta el elemento en el body que es el elemento padre
}

function crearEstilo() {
    document.getElementById("intro").style.color="red";
    const estilo = document.createElement("style");
    const texto=document.createTextNode ("body { font=20px verdana; background-color: blue;} ");
    estilo.appendChild(texto);
    document.head.appendChild(estilo);
}