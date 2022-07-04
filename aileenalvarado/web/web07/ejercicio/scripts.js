function saludar(){
    let nombreUsuario= prompt('Cual es tu nombre?');
    let h1Elemento = document.getElementById('saludo');

    h1Elemento.innerHTML ='Hola ' + nombreUsuario;
}