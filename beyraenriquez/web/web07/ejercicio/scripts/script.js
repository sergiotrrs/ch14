function nombre(){
    let nombre= prompt('¿Cuál es tu nombre?');
    let h1Elemento = document.getElementById('inicio');

    h1Elemento.innerHTML ='Hola ' + nombre;
}