/**Genero la función que guarda los valores obtenidos en los cuadros de texto*/
function capturar1(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opSuma= suma(parseFloat(valor1), parseFloat(valor2));/**llamo a la funcion suma y la guardo en una nueva variable */
    document.getElementById("Resultado").innerHTML=" " +opSuma;/**imprimo en la página web */
}
const suma = (numA, numB) => numA + numB;
//console.log(suma(2 , 5));

/**función que guarda los valores obtenidos en los cuadros de texto para resta*/
function capturar2(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opResta= resta(parseFloat(valor1), parseFloat(valor2));/**llamo a la funcion resta y la guardo en una nueva variable */
    document.getElementById("Resultado").innerHTML=" " +opResta;/**imprimo en la página web */
}
const resta = (numA, numB) => numA - numB;
//console.log(resta (3 , 6));

/**Genero la función que guarda los valores obtenidos en los cuadros de texto para multiplicación*/
function capturar3(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opMultiplica= multiplica(parseFloat(valor1), parseFloat(valor2));/**llamo a la funcion multiplicacion y la guardo en una nueva variable */
    document.getElementById("Resultado").innerHTML=" " +opMultiplica;/**imprimo en la página web */
}
const multiplica = (numA, numB) => numA * numB;
//console.log(multiplica(3 , 4));

/**Genero la función que guarda los valores obtenidos en los cuadros de texto para división*/
function capturar4(){
    let valor1=document.getElementById("valor1").value;
    let valor2=document.getElementById("valor2").value;
    let opDivision= divide(parseFloat(valor1), parseFloat(valor2));/**llamo a la funcion división y la guardo en una nueva variable */
    document.getElementById("Resultado").innerHTML=" " +opDivision;/**imprimo en la página web */
}
const divide = (numA, numB) => numA / numB;
//console.log(divide(2 , 7));
