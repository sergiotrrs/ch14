function nombre(){
    let nombre = prompt("Ingresa tunombre");
    let texto = document.getElementById("saludo");
    texto.innerHTML = `¡Hola, ${nombre}!`;
    document.getElementById("saludo").style.color = "#05D34A";

}

function saludar(){
    let saludo = prompt("Cambia el saludo");
    let texto = document.getElementById("saludo");
    texto.innerHTML = `¡${saludo}, Amigo!`;
    document.getElementById("saludo").style.color = "#D34705";
}

function cambiarTodo(){
    let todo = prompt("Ingresa X texto");
    let texto = document.getElementById("saludo");
    texto.innerHTML = `¡${todo}!`;
    document.getElementById("saludo").style.color = "#AA14AA";
}