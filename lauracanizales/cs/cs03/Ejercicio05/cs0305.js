//Leer 3 numeros y determinar si uno es la suma de los otros dos

let a = 1;
let b = 4;
let c = 3;

if (a == b + c){
    console.log("a es igual a la suma de b + c");
}
    else if (b == a + c){
        console.log("b es igual a la suma de a + c");
    }
else if (c == a + b){
    console.log("c es igual a la suma de a + b");
}
else{
    console.log("No hay ninguna conincidencia en las sumas")
}