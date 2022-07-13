console.log('teoria de la sesion js06')

//por id
//encontarPorId();
/*function encontarPorId() { //creo una funcion para colocar ejemplos de como llamo al DOM
//obtenemos el objeto por medio de su id
    const element = document.getElementById('intro');//llamo por id al elemento html
    console.log('Datos de elemento: ' + element.innerHTML);
    //ingresar nuevos datos en el objeto id 'demo'.

    document.getElementById('demo').innerHTML = 'El <b>texto</b> en el parrafo intro es : ' + element.innerHTML;

}

//por tagname

/*encontrarPorTagName()

function encontrarPorTagName(){

    const elements = document.getElementsByTagName('p')
    console.log("datos en el elements: "+ elements.length)

    document.getElementById("demo").innerHTML = "En el primer parrafo <b>(index 0)</b>: " + elements[0].innerHTML;
}*/
/**
     * innerHTML retorna el contenido de un elemento, incluyendo todos los
     *  espacios y etiquetas HTML (hijos).
     * innerText retorna el contenido de un elemento y sus hijos, pero, sin
     *  espacios ni etiquetas.
     */


 /*encontrarPorClase()

 function encontrarPorClase() {
     const elements = document.getElementsByClassName("saludo");
     console.log("Elementos encontrados: " + elements.length);
     document.getElementById("concatena").innerHTML = 
     'El primer párrafo (index 0) con la clase saludo es: ' + elements[0].innerHTML;
 }



 
function encontrarPorSelector(){
     const elements = document.querySelectorAll("p.saludo");
     console.log('Datos en elements: ' + elements.length)
 
     let unirStr= " ";
     elements.forEach( dato=> unirStr+=dato.innerHTML + " ") //Se unen los strings de p.saludo
     document.getElementById("junta").innerHTML = unirStr;
 }*/

 // crear un nuevo elemento
// appendChild 
/*function crearElemento(){
   const nuevoElemento = document.createElement("p");// este es un parrafo que quise insertar
   nuevoElemento.innerHTML =" Este es un nuevo parrafo";//este es un nuevo parrafo que estoy insertando
   //document.body.appendChild(nuevoElemento);//Se inserta el objeto en body
   document.getElementById('titulo').appendChild(nuevoElemento)
   document.body.appendChild(nuevoElemento);
}

crearElemento()*/

function cambiarEstilo(){

    document.getElementById("titulo").style.color = 'red';
    const estilo = document.createElement("style");
    
    const texto = document.createTextNode(' body {font = 20px verdana; background-color: blue;} ')
    estilo.appendChild(texto);
    /*
    <style>
    body {
    font = 20px verdana
    background-color: blue;
    document.head.appendChild(estilo);
    ]}
    </style>
}*/
}

cambiarEstilo()


/*body {
    font = 20px verdana
    background-color: blue;
}*/