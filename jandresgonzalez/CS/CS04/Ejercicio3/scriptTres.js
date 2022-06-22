//Programa para ver la suma y el producto de todos los datos de un array

function sumAndProduct(array) {
    let sum=0;
    let product=1;
    for (let i=0; i < array.length; i++) {
        sum= sum + array[i];
        product= product * array[i];
    }
    console.log("La suma de todos los elementos del array es", sum);
    console.log("El producto de todos los elementos del array es", product);
}

const array = [1, 2, 3, 4];

console.log(sumAndProduct(array));