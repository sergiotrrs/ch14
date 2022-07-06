console.log("Ejercicios JS04");

// definir un arreglo**

const miArreglo=["dato String", false, 23, null, true];
console.log(miArreglo);

console.log(miArreglo.toString);



// index = index + 1 -> index++;
// Utilizar dos variables en mi ciclo for
/**
 * variable 1= index=0
 * variable 2= a=0
 */
for (let index = 0, a=0; index < 3; index++, a+=2) {
    console.log (a , index);
}