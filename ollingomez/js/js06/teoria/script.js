console.log("Teoria de la Sesión Js06");

encontrarPorSelector();
//encontrarPorClase();
//encontrarPorTagName();
// encontararPorId();
// //remplasar po id
// function encontararPorId(){
//     //Obtenemos el objeto mediante su id
//     const element=document.getElementById("intro");
//     console.log("Datos de elemento:"+element.innerHTML);
//     //Ingresar nuevos datos en el objeto con id "demo"
//     document.getElementById("demo").innerHTML=
//     "El <b>texto</b> en el párrarfo intro es: "+ element.innerHTML;
// }

//replazar por Tag  getElementsByTagName
// function encontrarPorTagName(){
//     //Obtenemos los objetos que cumplan con el tag indicada
//     const elements = document.getElementsByTagName("p");
//     console.log("Datos en elements: "+ elements.length);

//     document.getElementById("demo").innerHTML= 
//     "El texto en el primer párrafo <b>(index 0)</b> es: "+elements[0].innerText; //inertext solo copia texto
//         //"El texto en el primer párrafo <b>(index 0)</b> es: "+elements[0].innerHTML;

//         /**
//      * innerHTML retorna el contenido de un elemento, incluyendo todos los
//      *  espacios y etiquetas HTML (hijos).
//      * innerText retorna el contenido de un elemento y sus hijos, pero, sin
//      *  espacios ni etiquetas.
//      */

// }

    //por clase revisar
// function encontrarPorClase(){
//     const elements = document.getElementsByClassName("saludo subtitulo");//Busca la que tenga las dos clases
//     console.log("Elementos encontrados" + elements.length);
//     document.getElementById("concatena").innerHTML= 
//         'El primer párrafo (index 0) con la clase saludo es :' +elements[0].innerHTML;
// }


function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");//h2.saludo
    console.log('Datos en elements: '+ elements.length);

    let unirStr="";
    //[objtDom, objDOM, objDOM]
    elements.forEach( dato=> unirStr += dato.innerHTML+" " );// Se unene los strings de p. saludo
    document.getElementById("concatena").innerHTML=unirStr;
}