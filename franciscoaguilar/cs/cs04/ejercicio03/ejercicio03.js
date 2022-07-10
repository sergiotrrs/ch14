function sumArray(array){
    let sum = 0;;
    for(let i=0;i<array.length;i++ ){
        sum = array [i]+sum;;
    }

    return sum;
}

function multArray(array) {
    let mult = 1;
    for(let i=0;i<array.length;i++ ){
        mult = array [i]*mult;
    }

    return mult;
    
}

let arrnums = [];
let nums = parseInt(prompt("Cuántos números quieres ingresar?"));

for(let i = 0; i<nums; i++){
    arrnums[i]= parseInt(prompt("Ingresa un número"));
}

console.log(arrnums);
console.log('La suma de todos los números del arreglo es: '+ sumArray(arrnums));
console.log('La multiplicación de todos los números del arreglo es: '+ multArray(arrnums));