/*Write a function that:
-Takes in an array of numbers.
-Doubles the value of each number in the array.
-Prints out the new updated array.
-Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/
function Doubles(){
    let cantidad=Number(prompt("¿Cuántos números quieres escribir"));
    let doubles=[]
    let elementos=[]
    for (let i =0; i<=cantidad-1; i++){
    elementos[i]=Number(prompt(`Introduce el elemento ENTERO ${(i+1)}`));
    doubles.push(elementos[i]*2);
    }
    console.log(doubles);
}

Doubles()

