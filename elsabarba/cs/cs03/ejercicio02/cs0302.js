// Definir cuál es el menor de tres números ///

// Comienza seleccionando tres números a, b y c distintos entre si con valores entre el 1 y el 100
let a = 8;
let b=5;
let c=7;

if (a<b && a<c){
    console.log(`El número a=${a} es el menor.`);
}

else if (a<b && a>c){
    console.log(`El número c=${c} es el menor.`);
}

else if (a>b && b<c){
    console.log(`El número b=${b} es el menor.`);
}

else {
    console.log(`El número c=${c} es el menor.`);
}