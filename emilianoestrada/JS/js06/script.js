// encontrarPorId();
//encontrarPorTag();
//encontrarporclase();
crearelemento();
cambiarEstilo();
function encontrarPorId(){
    const element = document.getElementById("intro");
    document.getElementById("demo").innerHTML= "el <b> texto </b> de intro es: "+ element.innerHTML;
    
}

function encontrarPorTag(){
const tagg = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = "el texto en el primer <b> p index 0 </b> es" + tagg[0].innerHTML;
}

function encontrarporclase(){
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("concatena").innerHTML = 'el primer parrafo clase saludo es' +elements[0].innerHTML;

}

function crearelemento(){
    const nuevo = document.createElement("p");
    nuevo.innerHTML ="hola hola hola";
   // document.body.appendChild(nuevo);
    document.getElementById("titulo").appendChild(nuevo);
}

function cambiarEstilo(){
    document.getElementById("intro").style.color="blue";
    const estilo = document.createElement("style");
    const texto = document.createTextNode("body {font: 20px verdana; background-color: blue;}");
    estilo.appendChild(texto);
    document.head.appendChild(estilo);
}