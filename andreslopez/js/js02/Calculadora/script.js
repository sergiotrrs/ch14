

/**
 * suma
 * @param {*} x primer sumando
 * @param {*} y segundo sumando
 * @returns sumatoria
 *  */
const suma = () =>{
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a + b;
}


/**
 * resta
 * @param {*} x minuendo
 * @param {*} y sustraendo
 * @returns resta
 *  */
const resta = () =>{
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a - b;
}

/**
 * multiplicación
 * @param {*} x multiplicando 1
 * @param {*} y multiplicando 2
 * @returns multiplicación
 *  */
const multi = () =>{
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a * b;
}

/**
 * división
 * @param {*} x dividendo
 * @param {*} y divisor
 * @returns división
 *  */
const div = () =>{
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("resultado").innerHTML = a / b;
}

