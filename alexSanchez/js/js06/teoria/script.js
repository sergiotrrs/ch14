console.log("Teoria de la sesion JS06")
//encontrarPorId();
//encontrarPorTagName()
//encontrarPorClase();
///encontrarPorSelector()
//crearElemento()
cambiarEstilo()

function encontrarPorId(){
    //obtendremos el objeto mediante id
    const element = document.getElementById("intro");
    console.log("Datos de elementos : "+ element.innerHTML);
    //Ingresar nuevos daos en el objeto  con id "demo"
    document.getElementById("demo").innerHTML =
    "El <b>texto</b> en el parrafo intro es: "  +element.innerHTML;

};

function encontrarPorTagName(){
    //obtenemos los objetos que cumplan con el tag indicado
    //getElementByTagName entrega un arreglo con objetos encontrados
    const elements= document.getElementsByTagName("p");
    console.log("Datos en elements : " +elements.lenght);


    document.getElementById("demo").innerHTML=
    "El texto en el primer parrafo <b> (index 0)</b> es " +elements[0].innerHTML;
}

/**
 * 
 * innerHTML retorna el contenido de un elemento incluyendo todos los
 * espacios y etiquetas HTML (hijos)
 * innerText retorna el contenido de un elemento y sus hijos, pero, sin espacios ni etiquetas
 * 
 */
function encontrarPorClase(){
    const elements = document.getElementsByClassName("saludo");
    console.log("Elementos encontrados : " + elements.lenght);
    document.getElementById("junta").innerHTML = "El primer parrafo (index 0) con la clase saludo es :" + elements[0].innerHTML
}

function encontrarPorSelector(){
    const elements= document.querySelectorAll("p.saludo")
    console.log("Datos de elements: " + elements.lenght)
    let unirStr="";
    elements.forEach(dato => unirStr += dato.innerHTML+" "); // Se unen los string de p.saludo
    document.getElementById("junta").innerHTML= unirStr;
} 

function crearElemento(){
    const nuevoElemento = document.createElement("p") ; // <p></p>
    nuevoElemento.innerHTML= "Este es un nuevo parrafo"; //<p>Este es un nuevo parrafo</p>
    document.getElementById("titulo").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento); //Se inserta el objeto en el body
}

function cambiarEstilo(){
    document.getElementById("intro").style.color ="red";
    const estilo= document.createElement("style");
    const texto = document.createTextNode("body { font: 20px verdana; background-color: blue;}");
    estilo.appendChild(texto);
    /**<style>
     * body {
     * font = 20px verdana;
     * background-color:blue;
     * }
     */
    document.head.appendChild(estilo);
     }
    
