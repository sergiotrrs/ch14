/**
 * Se creo la función suma
 * @param {number} a primer sumando
 * @param {number} b segundo sumando
 * @returns sumatoria a + b
 */
 function suma (){
    let n1 = document.getElementById("a");
    let n2 = document.getElementById("b");
    let resultado= document.getElementById("c");
    return resultado.value =parseInt(n1.value) + parseInt(n2.value);
} 

/**
 * Se creo la función resta
 * @param {number} a primer residuo
 * @param {number} b segundo residuo
 * @returns residuo a + b
 */

function resta (){
    let n1 = document.getElementById("a");
    let n2 = document.getElementById("b");
    let resultado= document.getElementById("c");
    return resultado.value =parseInt(n1.value) - parseInt(n2.value);
}

/**
 * Se creo la función multiplicación
 * @param {number} a primer multiplicación
 * @param {number} b segundo multiplicación
 * @returns multiplicacion a + b
 */

const multiplica = () =>{
    let n1 = document.getElementById("a");
    let n2 = document.getElementById("b");
    let resultado= document.getElementById("c");
    return resultado.value =parseInt(n1.value) * parseInt(n2.value);
} 
/**
 * Se creo la función division
 *  @param {number} a primer divisor
 * @param {number} b segundo divisor
 * @returns division a + b
 */
const division = () => {
    let numero1 = document.getElementById("a");
    let numero2 = document.getElementById("b");
    let resultado = document.getElementById("c");
    return resultado.value = parseInt(numero1.value) / parseInt (numero2.value);
}
 function limpiar(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
 }