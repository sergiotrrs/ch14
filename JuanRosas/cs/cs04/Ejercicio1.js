let array = ["This", "is", "a", "sentence"];
console.log(array);
console.log("Array.length: "+array.length);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

console.log(array[0] + " " +array[1] + " "+array[2] + " " + array[3]);

let oracion = '';
for (let index = 0; index < array.length; index++) {
    oracion = oracion + " " +array[index];
    console.log('Cuando index vale ' + index + " = "+oracion);
}
