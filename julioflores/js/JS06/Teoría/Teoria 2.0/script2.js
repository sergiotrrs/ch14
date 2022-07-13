
//function encontrarporId();

function encontrarporId() {
    const element = document.getElementById("intro");
    console.log("Datos de elemento: " + element.innerHTML);
    document.getElementById("demo").innerHTML = 
        "El <b>texto</b> en el párrafo intro es : " + element.innerHTML;
}

function encontrarPorTagName(){
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length);
    
    document.getElementById("demo").innerHTML = 
        "El texto en el primer párrafo <b>(index 0)</b> es: " + elements[1].innerHTML;  
}

function encontrarPorClase() {
    document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML =
    "El primer párrafo (index0) con la clase saludo es: " + elements[0].innerHTML; //para concatenar se utiliza el + elements
}

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
