console.log("Codigo 03 de cs04")

//Inicializamos una variable sum como 0 para almacenar el resultado y usamos el bucle for para visitar cada elemento y agregarlos a la suma del array.

const otroarraydenumeros=[1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < otroarraydenumeros.length; i++) {
    sum += otroarraydenumeros[i];
}

console.log("La suma del arreglo es " + sum);

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const multi = otroarraydenumeros.reduce((a,b)=>a*b);

console.log("El producto del arreglo es " + multi);