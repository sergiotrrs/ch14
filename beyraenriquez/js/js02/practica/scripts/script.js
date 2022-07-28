//Función Suma
let sumar = () => {
    let valorUno = document.getElementById("numeroA");
    let valorDos = document.getElementById("numeroB");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(valorUno.value) + parseInt(valorDos.value);
}

//Función Resta
let restar = () =>{
    let valorUno = document.getElementById("numeroA");
    let valorDos = document.getElementById("numeroB");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(valorUno.value) - parseInt(valorDos.value);
}

//Función Multiplicar
let multiplicar= () => {
    let valorUno = document.getElementById("numeroA");
    let valorDos = document.getElementById("numeroB");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(valorUno.value) * parseInt(valorDos.value);
}

//Función Dividir
let dividir= () =>{
    let valorUno = document.getElementById("numeroA");
    let valorDos = document.getElementById("numeroB");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(valorUno.value) / parseInt(valorDos.value);
}