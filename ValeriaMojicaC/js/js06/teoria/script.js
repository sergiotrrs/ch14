console.log("Teoria de la Sesion JS06");

function encontrarPorId () {
    //Obtenemos el objeto mediante su Id
    const element = document.getElementById("intro");
    console.log(`Dato de elemento: ${element.innerHTML}`);

    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = `El <b>texto</b> en el primer párrafo intro es: ${element.innerHTML}`;
}
//encontrarPorId();

function encontrarPorTagName () {
    //Obtenemos los objetos que cumplan con el tag indicado
    //getElementsByTagName entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log(`Datos en elements: ${elements.length}`);
    document.getElementById("demo").innerHTML = `El texto en el primer parrafo <b>(index 0)</b> es: ${elements[0].innerHTML}`;
    //document.getElementById("demo").innerHTML = `El texto en el primer parrafo <b>(index 0)</b> es: ${elements[0].innerText}`;

    /**
    * inne.HTML retorna el contenido de un elemento, inluyendo todos los 
    * espacios y etiqueras HTML (hijos).
    * innerText retorna el contenido de un elemento y sus hijos pero, sin
    * espacios ni etiquetas
    */
}
//encontrarPorTagName();

function encontrarPorClase () {
    const elements = document.getElementsByClassName("saludo");
    console.log(`Datos en elements: ${elements.length}`);
    document.getElementById("concatena").innerHTML = `El segundo párrafo (index 0) con la clase saludo es: ${elements[0].innerHTML}`
    //document.getElementById("concatena").innerHTML = `El primer párrafo (index 0) con la clase saludo es: ${elements[0].innerHTML + elements[1].innerHTML}`
    //document.getElementById("concatena").innerHTML = `El segundo párrafo (index 1) con la clase saludo es: ${elements[1].innerHTML}`

}
//encontrarPorClase();

function encontrarPorSelector () {
    //const elements = document.querySelectorAll(".saludo"); //solo clase
    const elements = document.querySelectorAll("p.saludo"); //etiqueta y clase
    console.log(`Datos en elements: ${elements.length}`);
    let unirStr = "";
    elements.forEach(dato => unirStr += dato.innerHTML + " ") //Se unen los string de p.saludo
    document.getElementById("concatena").innerHTML = unirStr;
}
//encontrarPorSelector();

function crearElemento () {
    const nuevoElemento = document.createElement("p"); //Crea un <p></p>
    nuevoElemento.innerHTML = "Este es un nuevo parrafo"; //<p>Este es un nuevo parrafo</p>
    //document.body.appendChild(nuevoElemento); //Se inserta nuevo elemento en el body (final)
    document.getElementById("titulo").appendChild(nuevoElemento);

    const nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML = `<p>Hola estoy <b>dentro </b>de un div</p>`;
    document.body.appendChild(nuevoDiv);
}
//crearElemento();

function cambiarEstilo (){
    document.getElementById("intro").style.color = "#962c4c";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body {font: 25px verdana; background-color: #becb7c;}");
    estilo.appendChild(texto);
    /**
     *<style>
     * body {
     *      font: 20px verdana;
     *      background-color: #becb7c;
     * }
     *</style>
     */
    document.head.appendChild(estilo);
}
cambiarEstilo();