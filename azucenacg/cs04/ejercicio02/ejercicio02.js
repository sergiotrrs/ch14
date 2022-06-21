//Exercise #2

/*Write a function that:
-Takes in an array of numbers.
-Doubles the value of each number in the array.
-Prints out the new updated array.*/

//Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
//Variable para el arreglo y para la longitud del arreglo



let ar=[8, 2, 10, 5];

console.log ("Su arreglo es: " + ar);

let len=ar.length;

for (let i=0; i<len; i++){

   ar[i]=ar[i]*2;
}

console.log("El nuevo arreglo es "+ ar);
alert("El nuevo arreglo es "+ ar);