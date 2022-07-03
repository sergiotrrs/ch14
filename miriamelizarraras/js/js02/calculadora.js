function capturar(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let opSuma = suma(parseFloat (valor1),parseFloat(valor2));
    document.getElementById("resultado").innerHTML=" " + opSuma;
}

/**
 * 
 * @param {number} numA primer número a sumar
 * @param {number} numB segundo número a sumar
 * @returns resultado de la suma numA + numB
 */
const suma = (numA, numB) => numA + numB;
console.log(suma);

function capturarResta(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
      let opResta = resta(parseFloat (valor1),parseFloat(valor2));
    document.getElementById("resultado").innerHTML=" " + opResta;
}

/**
 * 
 * @param {number} numA primer número para restar
 * @param {number} numB segundo número a restar
 * @returns resultado de la suma numA - numB
 */
const resta = (numA, numB) => numA - numB;
console.log(resta);

function capturarMulti(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
   let opMulti = multiplica(parseFloat (valor1),parseFloat(valor2));
    document.getElementById("resultado").innerHTML=" " + opMulti;
}

/**
 * 
 * @param {number} numA primer número a multiplicar
 * @param {number} numB segundo número a multiplicar
 * @returns resultado de la suma numA * numB
 */
const multiplica = (numA, numB) => numA * numB;
console.log(multiplica);

function capturarDiv(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let opDiv = divide(parseFloat (valor1),parseFloat(valor2));
    document.getElementById("resultado").innerHTML=" " + opDiv;
}

/**
 * 
 * @param {number} numA primer número a dividir
 * @param {number} numB segundo número a dividir
 * @returns resultado de la suma numA / numB
 */

const divide = (numA, numB) => numA / numB;
console.log(divide);

