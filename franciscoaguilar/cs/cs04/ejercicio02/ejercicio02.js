function twoTimesArray(array){
    let newArray = [];
    for(let i=0;i<array.length;i++ ){
         num= array [i]*2;
         newArray [i] = num;
    }

    return newArray;
}

let arrnums = [];
let nums = parseInt(prompt("Cuántos números quieres ingresar?"));

for(let i = 0; i<nums; i++){
    arrnums[i]= parseInt(prompt("Ingresa un número"));
}

console.log(arrnums);
console.log(twoTimesArray(arrnums));