console.log("Teoría de la sesión JS06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
//encontrarPorSelector();
//crearElemento();
cambiarEstilo();
function encontrarPorId(){
    //Obtenemos el objeto mediante su id
    //Todo Id debe ser único
    const element = document.getElementById("intro");//intro es el padre. El hijo es b en HTML.
    console.log("Datos de elemento: "+ element.innerHTML);
    //Ingresar nuevo datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML = 
    "El <b>texto</b> en el párrafo intro es : " + element.innerHTML;
}

function encontrarPorTagName(){
    //Obtener los objetos que cumplan con el tag indicada
    //etiquetas
    //entrega un arreglo con los objetos encontrados.
    const elements = document.getElementsByTagName("p");
    console.log("Datos en elements: "+ elements.length);

    document.getElementById("demo").innerHTML =
        "El texto en el primer párrafo <b>(index O)</b> es :"+elements[0].innerHTML;
        /**
         * innerHTML retorna el contenido de un elemento incluyendo todos los
         * espacios y etiquetas HTML(hijos).
         * innerText retorna el contenido de un elemento y sus hijos, pero sin
         * sin dobles espacios ni etiquetas.
         */
}

function encontrarPorClase(){
    //Obtenemos mediante su clase 
    //varias etiquetas y diferentes obtiene todo lo que tenga esas clases
    const elements =document.getElementsByClassName("saludo");
    console.log("Elementos encontrados: " + elements.length);
    document.getElementById("junta").innerHTML =
    'El primer párrafo (index 0) con la clase saludo es :' +elements[0].innerHTML;
}

function encontrarPorSelector(){
    //está eligiendo las p pero solo las que contengas saludo, así no pela el h2 que tiene saludo
    //El primero es el tag despues del punto es la clase. Sólo funciona con una clase
    //Puede usarse solo la etiqueta pero devuelve todo, la etiqueta y la clase sirve para filtar más lo que quieres.
    //queryselector engloba los tres métodos anteriores porque puede seleccionar etiquetas, id o clase.
    const elements = document.querySelectorAll("p.saludo");
    console.log("Dato en elements: " + elements.length);
    
    //Concatenar Holi Crayoli Mundo
    let unirStr="";
    elements.forEach( dato=>unirStr+=dato.innerHTML+" ");
    document.getElementById("junta").innerHTML = unirStr;
}
function crearElemento(){
    const nuevoElemento = document.createElement("p");//<p></p>
    nuevoElemento.innerHTML = "Este es un nuevo párrafo";// <p>Este es un nuevo párrafo</p>
    document.getElementById("título").appendChild(nuevoElemento);
    //document.body.appendChild(nuevoElemento); //Se inserta el objeto en la última línea de body
}
function cambiarEstilo(){
    document.getElementById("intro").style.color ="red";
    const estilo = document.createElement("style");//cree un objeto
    const texto = document.createTextNode(" body {font : 20px verdana; background-color: #D9D9D9;}");//creé un nodo con el estilo
    estilo.appendChild(texto);//sobre el objeto style agregué el texto
    /**
     * ese estilo.appendChild(texto) es lo mismo que:
     * <style>// esto es la const estilo
     *  body{ // esto es la const texto
     *      font: 20 px verdana;
     *      background-color: #D9D9D9;es plateado
     *  }
     * </style>
     */
    document.head.appendChild(estilo);
}   