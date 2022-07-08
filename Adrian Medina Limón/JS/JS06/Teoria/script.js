comsole.log("Teoria de la sesion js06")

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicado
    //getElementByTagName entrega un arreglo con los objetos encontrados
    const elements = document.getElementsById("p");
    console.log("Datos en elements: " + elements);
    console.log("Datos en elements: " + elements.length);

    document.getElementById("demo").innerHTML = 
        "El texto en el primer párrafo <b>(index 0)</b> es: " + elements[1].innerHTML;
}
/**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  espacios ni etiquetas.
     */
 function encontrarPorClassName(){
    
 }