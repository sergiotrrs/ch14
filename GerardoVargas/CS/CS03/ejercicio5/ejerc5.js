//Elaborar un  algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

let n1 = 40;
let n2 = 40;
let n3 = 80;

if (n1 + n2 == n3){
    console.log("n3 es la suma de los otros dos");
}

else if (n2 + n3 == n1){
    console.log("n1 es la suma de los otros dos");
} 

else if(n3 + n1 == n2){
    console.log("n2 es la suma de los otros dos");
}

else{
    console.log("Ninguno es la suma de los otros dos")
}