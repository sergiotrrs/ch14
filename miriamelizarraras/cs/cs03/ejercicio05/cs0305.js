/// 5. Elabora un algoritmo para leer 3 números y determinar si uno es la suma de los otros dos.

let a = 60
let b = 30
let c = 30
    
if (a + b == c){
    console.log("c = a + b");
}
    else if (b + c == a){
        console.log("a = b + c");
    }
    else if (c + a == b){
        console.log("b = c + c");
    } else {
        console.log("Ninguno es la suma de los otros dos.");
    }
