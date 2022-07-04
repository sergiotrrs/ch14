let suma = () => {
    let elementoNum1 = document.getElementById("numero1");
    let elementoNum2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(elementoNum1.value) + parseInt(elementoNum2.value);
}

let resta = () =>{
    let elementoNum1 = document.getElementById("numero1");
    let elementoNum2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(elementoNum1.value) - parseInt(elementoNum2.value);
}

let multiplicacion= () => {
    let elementoNum1 = document.getElementById("numero1");
    let elementoNum2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(elementoNum1.value) * parseInt(elementoNum2.value);
}

let division= () =>{
    let elementoNum1 = document.getElementById("numero1");
    let elementoNum2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");

    resultado.value =  parseInt(elementoNum1.value) / parseInt(elementoNum2.value);
}