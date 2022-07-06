//Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

let n1 = 50;
let n2 = 100;
let n3 = 3;

if (n1 < n2 && n1 < n3) {
    console.log("El número menor es n1");
}
else if (n2 < n1 && n2 < n3){
    console.log("El número menor es n2");
}
else if (n3 < n1 && n3 < n2){
    console.log("El número menor es n3");
}