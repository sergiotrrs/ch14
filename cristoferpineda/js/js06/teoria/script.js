console.log("Teoria JS06");
//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();

function encontrarPorId(){
    //Obtenemos el objeto mediante su id
    const elemnt= document.getElementById("intro"); //element guarda la referencia id
    console.log("Datos de elemento: " + elemnt.innerHTML);
    //Ingresar nuevos datos en el objeto con id "demo"
    document.getElementById("demo").innerHTML =  //puede continuar en otra fila si se coloca el igual
        "El<b>texto</b> en el parrafo intro es : " + elemnt.innerHTML; //toda esta linea se le asigna al inner.HTML   , elements por si solo , solo te dice que es una coleccion
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicado
    //getElementsByTagName entrega un erreglo con los objetos encontrados
    const elements = document.getElementsByTagName("p");//en los parentesis se coloca la etiqueta que se busca
    console.log("Datos en elements: " + elements.length);//se le agrega  el .length para ver cuantos de esos onjetos hay

    document.getElementById("demo").innerHTML = 
    "El texto en el primer parrafo <b>(index 0)</b> es: " + elements[0].innerHTML; //se utiliza el subindice que se asigna conforme se van colocando en el index , ejemplo hay 2 <p> y se utilizo el primero con subindice 0
    /**
     * innerHTML retorna el contenido en un elemento incluyendo todos los espacios y etiquetas HTML(Hijos) , trae con diseno
     * innerText retorna el contenido de un elemento y sus hijos , pero sin doble espacios ni etiquetas , trae solo texto
     **/
}

function encontrarPorClase(){
    //Obtenemos los objetos que cumplan con la clase indicada
    const elements = document.getElementsByClassName("saludo");
    document.getElementById("junta").innerHTML =
    "El primer parrafo (index 0) con la clase saludo es : " + elements[0].innerHTML;
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("p.saludo");//llama a los <p> que tengan la etiqueta "saludo"
    console.log("Datos en elements " + elements.length);

    let unirStr="";//igualar a las comillas , para que no nos arroje un indefinido 
    elements.forEach( dato=> unirStr+=dato.innerHTML + " ");//Se unen los strings de p.saludo
    document.getElementById("junta").innerHTML = unirStr;
}