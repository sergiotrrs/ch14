// 5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let a=parseInt(prompt("Escribe el primer número: "));
let b=parseInt(prompt("Escribe el segundo número: "));
let c=parseInt(prompt("Escribe el tercer número: "));

console.log ("El primer número es: "+ a);
console.log ("El segundo número es: "+ b);
console.log ("El tercer número es: "+ c);


function suma(x,y,z) {
    return x+y-z
}

let suma1 = suma (b,c,a);
console.log(suma1);

let suma2 = suma (a,c,b);
console.log(suma2);

let suma3 = suma (a,b,c);
console.log(suma3);

if (suma1==0){
    alert("El primer número: "+ a + " es igual a la suma de los otros dos números");
}

if (suma2==0){
    alert("El segundo número: "+ b + " es igual a la suma de los otros dos números");
}

if (suma3==0){
    alert("El tercer número: "+ c + " es igual a la suma de los otros dos números");
}

if (suma1&&suma2&&suma3!=0){
    alert("Ningún número es igual a la suma de los otros dos números");
}
