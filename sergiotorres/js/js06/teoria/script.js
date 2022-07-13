console.log("Teoría de la Sesión Js06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
cambiarEstilo();

function encontrarPorId(){
    //Obtenemos el objeto mediante su id
    const element = document.getElementById("intro");
    console.log("Datos de elemento: " + element.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
        "El <b>texto</b> en el párrafo intro es : " + element.innerHTML; 
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicada.
    //getElementsByTagName entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: " + elements.length);

    document.getElementById("demo").innerHTML =
        "El texto en el primer párrafo <b>(index 0)</b> es: " + elements[0].innerText;

    /**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  dobles espacios ni etiquetas.
     */
}

function encontrarPorClase(){
     const elements = document.getElementsByClassName("saludo");
     console.log("Elementos encontrados: " + elements);
     
     document.getElementById("junta").innerHTML =
      'El primer párrado (index 0) con la clase saludo es :' + elements[0].innerHTML;
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");
    console.log('Datos en elements: ' + elements);

    let unirStr="";
    //[objtDOM, objDOM, ObjDOM ]
    elements.forEach( (dato, index, arreglo)=> unirStr+=dato.innerHTML+" " ) //Se unen los strings de p.salud
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
