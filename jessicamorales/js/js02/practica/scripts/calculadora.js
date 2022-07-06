//Función flecha de la operación suma
/**
 * Creación de la función suma
 * @param {number} a primer número
 * @param {number} b segundo número
 * @returns da el resultado de la suma de ambos números
 */
function suma(){
    const c = (a, b) => a + b;
    document.getElementById("c").value = c(Number(document.getElementById("a").value), Number(document.getElementById("b").value));
}

//Función flecha de la operación resta
/**
 * Creación de la función suma
 * @param {number} a primer número
 * @param {number} b segundo número
 * @returns da el resultado de la resta de ambos números
 */
function resta(){
    const c = (a, b) => a - b;
    document.getElementById("c").value = c(Number(document.getElementById("a").value), Number(document.getElementById("b").value));
}

//Función flecha de la operación multiplicación
/**
 * Creación de la función suma
 * @param {number} a primer número
 * @param {number} b segundo número
 * @returns da el resultado de la multiplicación de ambos números
 */
function multiplicacion(){
    const c = (a, b) => a * b;
    document.getElementById("c").value = c(Number(document.getElementById("a").value), Number(document.getElementById("b").value));
}

//Función flecha de la operación división
/**
 * Creación de la función suma
 * @param {number} a primer número
 * @param {number} b segundo número
 * @returns da el resultado de la división de ambos números
 */
function division(){
    const c = (a, b) => a / b;
    document.getElementById("c").value = c(Number(document.getElementById("a").value), Number(document.getElementById("b").value));
}