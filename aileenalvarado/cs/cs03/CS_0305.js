 //Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

alert("Introduce 3 numeros, para determinar sí uno es la suma de los otros dos ");

let numero1 = prompt("Introduce el primer numero");
let numero2 = prompt("Introduce el segundo numero"); 
let numero3 = prompt("Introduce el tercer numero"); 

numero1 = parseInt(numero1);
numero2 = parseInt(numero2); 
numero3 = parseInt(numero3); 

if(numero1 == numero2 + numero3){
    alert(`Numero 1 es la suma de numero 2 y  numero 3, ${numero1} = ${numero2} + ${numero3} `); 
} 
else if(numero2 == numero1 + numero3){
    alert(`Numero 2 es la suma de numero 1 y numero 3, ${numero2} = ${numero1} + ${numero3}`);
} 
else if(numero3 == numero1 + numero2){
    alert(`Numero 3 es la suma de numero 1 y numero2, ${numero3} = ${numero1} + ${numero2}`);
} 
else{
    alert("No se cumpliò nunguna condiciòn");
}