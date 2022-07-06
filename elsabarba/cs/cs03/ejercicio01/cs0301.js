// Definir cuál es el mayor de tres números ///

// Comienza seleccionando tres números a, b y c distintos entre si con valores entre el 1 y el 100
let a = 3;
let b=2;
let c=1;

if (a>b && a>c){
    console.log(`El número a=${a} es el mayor.`);
}

else if (a>b && a<c){
    console.log(`El número c=${c} es el mayor.`);
}

else if (a<b && b>c){
    console.log(`El número b=${b} es el mayor.`);
}

else {
    console.log(`El número c=${c} es el mayor.`);
}