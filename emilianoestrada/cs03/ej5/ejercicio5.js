    //ADRIAN EMILIANO ESTRADA PARRA
   //Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

  let numero1 = prompt("Ingresa 1er Número (1-100)");

  let numero2 = prompt("Ingresa 2do Número (1-100)");

  let numero3 = prompt("Ingresa 3er Número (1-100)");

Number(numero1);
Number(numero2);
Number(numero3);

console.log(numero1);
console.log(numero2);
console.log(numero3);

let suma1 = parseInt(numero1) + parseInt(numero2);

let suma2 = parseInt(numero1) + parseInt(numero3);

let suma3 = parseInt(numero2) + parseInt(numero3);

console.log(suma1);
console.log(suma2);
console.log(suma3);

if (numero1 == suma3 ||numero2 == suma2||numero3 == suma1)
{
alert("un Numero es la suma de los otros 2");
}
else {
alert("Ningun numero es la suma de los otros 2");
}


