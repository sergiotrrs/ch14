//Ejercicio 5
let people = ["María", "Dani", "Luis", "Juan", "Camila"];

function imprimtArray (){
  console.log ( people.join("-"));
}
imprimtArray();
array = people;
index = 1;

let removed = people.splice (index,1);
imprimtArray();

index = 2;
let removed2 = people.splice (index,1);
imprimtArray();

const array2 = array; 

array[0] = "Luis";
array [1] = "María";
imprimtArray (array);

    people.push ("Margarita");
imprimtArray (array);

for (let i =0; i <array.length; i ++){
    console.log (array[i]);
    if (array[i] == "María"){
        break;
 }
} 

let ubicaciónMaría = people.indexOf ("María");
console.log ( "María esta en la posición " + ubicaciónMaría);
console.log ( "Los sobrevivientes son: " + array.join (","));



