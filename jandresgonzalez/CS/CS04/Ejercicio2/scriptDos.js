//La siguiente función toma cada número en un array y lo multiplica por dos
//Al final, regresa un array con los nuevos números
function doubleArrayNumbers(array) {
    const arrayDouble = [];
    for (let i = 0; i < array.length; i++) {
        let tmp = array[i] * 2;
        arrayDouble.push(tmp);
    }
    console.log("El array original era: ", array);
    console.log("El array luego de doblar cada dato es: ", arrayDouble);
}

const array = [1, 2, 4, 5];

doubleArrayNumbers(array);