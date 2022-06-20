//Exercise 3. Suma y multiplica todos los elementos de un arreglo

let valores = [1, 2, 3, 4];
let suma = 0;
let multiplicar =1;

for ( let i = 0; i < valores.length; i++ ) {
    suma += valores[i];
}
console.log(suma);
 
for ( let j= 0; j<valores.length; j++ ){
    multiplicar *= valores[j];
}
console.log(multiplicar);