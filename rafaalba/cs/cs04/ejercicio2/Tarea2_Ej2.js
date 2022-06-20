/*2. Write a function that:
-Takes in an array of numbers.
-Doubles the value of each number in the array.
-Prints out the new updated array.*/

let arr = [2, 4, 6, 8];

function printOutString(doblar) {
  //for (let i=0; i<=3; i++){
  for (let i=0; i<=doblar.lenght; i++){
    doblar[i]=2*doblar[i];
  }
  console.log(doblar);
}
console.log(arr);
let perro = printOutString(arr);

// i en un arreglo inicia con 0 siempre
// i = i+1 = i++ contador se suma de uno en uno
// i = 0 , i=0+1 = 1, i=1+1 = 2, i=2+1 = 3 ...

