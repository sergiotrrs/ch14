const elements = [1,2,3,4];
let suma =0;
let multiplicacion = 1;

elements.forEach(dato=>{
    suma+=dato;
    multiplicacion*=dato;
})

console.log("los elementos son: " + elements);
console.log("La suma de los elementos array es de " + suma);
console.log("El producto de los elementos array es de: " + multiplicacion);