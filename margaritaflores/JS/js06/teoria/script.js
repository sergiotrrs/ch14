console.log("Teoria de la sesión JS06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();

function encontrarPorId(){
    //Obtenemos el objeto mediante su id
    const element = document.getElementById("intro")
    console.log("Datos del elemento: " + element.innerHTML );
    //Ingresar nuevos datos en el objeto con id= "demo"
    document.getElementById("demo").innerHTML=
    "El <b>texto</b> en el primer párrafo intro es : " + element.innerHTML;
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicada
    //GetElementsByTagName entrge un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements : " + elements.length);

    document.getElementsByName("demo").innerHTML =
    "El texto en el primer párrafo <b>(index 0) </b> es : " + elements[0].innerText;
/**
 * innerHTML retorna el contenido de un elemento, incluyendo todos los
 * espacios y etiquetas HTML (hijos).
 * innerText retorna el contenido de un elemento y sus hijos, pero, sin
 * espacios ni etiquetas.
 * 
 */





}

function encontrarPorClase(){
    const elements = document.getElementsByClassName("intro");
    console.log("Elementos encontrados: " + elements.length);
    //document.getElementById("concatenar").innerHTML = 
    //"El primer párrafo (index 0) con la clase saludo es : " + elements[0].innerHTML;
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll(".saludo, .intro");
    console.log('Datos en elements: ' + elements.length);

    let unirSt="";
    elements.forEach( dato=> unirSt+=dato.innerHTML+ "-"); // Se unen los strings de p.saludo
    document.getElementById("junta").innerHTML = unirSt

}