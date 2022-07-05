// Decir si un número es resultado de la suma de otros dos //
let a = 3;
let b=2;
let c=1;

if (a+b == c){
    console.log(`El número c=${c} es resultado de la suma de los números ${a} y ${b}.`);
}

else if (a+c == b){
    console.log(`El número b=${b} es resultado de la suma de los números ${a} y ${c}.`);
}

else if (b+c == a){
    console.log(`El número a=${a} es resultado de la suma de los números ${b} y ${c}.`);
}

else {
    console.log("Ningún número es resultado de la suma de los otros dos");
}