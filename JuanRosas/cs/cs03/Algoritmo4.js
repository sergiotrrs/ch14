/*
let num = 100;
const expected = 100n / 3n

if (num >= 100 || num <= 100) {
    ;
    console.log(expected);
}
*/
let num = 200

if (num >=100 || num <=200) {
    resul = num % 3
    if (resul === 0) {
        console.log("El numero que elegiste es multiplo de 3:", num);
    } else {
        console.log("El numero que elegiste no es multimplo de 3");
    }
} else {
    console.log("El numero que elegiste no entra en el rango deseado");
}