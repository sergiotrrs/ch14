console.log("Teoría de la sesión JS06");

// encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();

function encontrarPorId(){
    //obtenemos elemento mediante id
    const element = document.getElementById("intro");
    console.log ("Datos del elemento: "+ element.innerHTML);

    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML=
    "El <b> texto </b> en el párrafo intro es: " +
    element.innerHTML;

    //a partir del igual podemos hacer saltos de linea
    //y sigue siendo la misma instruccion 

    //lo de arriba sustituye el valor que vemos en demo 

} 


function encontrarPorTagName() {
    //obtenemos los objetos que cumplan con el tag indicado
    //getElementsByTagName entrega un arreglo con los datos encontrados
    const elements = document.getElementsByTagName("p");
    console.log("datos en elements tag name: "+ elements.length);
    // guardando en la etiqueta demo
    //lo de la arriba se modifica y se sustituye por 
    //lo de la abajo

    // elements es un arreglo de 2 elementos, el primero tiene la info de 
    //"intro" y el segundo tiene la info de "demo"
    //por eso al poner elements[0] nos imprime la info de intro
    document.getElementById("demo").innerHTML=
    "el texto en el primer parrafo <b>index 0 </b> es: "
    + elements[0].innerHTML;

}

/**
 * innerHTML imprime estilo y todo dobles espacios
 * innerText solo texto
 */

/**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * 
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  espacios ni etiquetas.
     */

function encontrarPorClase() {
    //igual elements se unen en un arreglo

    //unimos las cosas que tienen la clase saludo en un arreglo
    const elements= document.getElementsByClassName("saludo");
    
    //pa llamar un elemento con 2 clases:
    //const elements= document.getElementsByClassName("saludo intro");
    
    //en "concatena" imprimimos el primer elemento el arreglo anterior
    document.getElementById("concatena").innerHTML=
     'El primer párrafo (index 0) con la clase saludo es: '
     +elements[0].innerHTML;
}

function encontrarPorSelector() {
    //las clases van con . o sea .saludo por ejemplo
    const elements= document.querySelectorAll("p.saludo");
    

    //p es para llamar solo a la clase "saludo" en los <p>
    console.log("datos en elements: "+ elements.length);

    let unirStr="";
    elements.forEach(dato=> unirStr+=dato.innerHTML+" ");
    document.getElementById("junta").innerHTML=unirStr;
}