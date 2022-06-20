let a = prompt("Dame el primer numero");
let b = prompt("Dame el segundo numero");
let c = prompt("Dame el tercer numero");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

console.log("Primer número: ", a);
console.log("Segundo número: ", b);
console.log("Tercer número: ", c);

x1 = a + b;
x2 = a + c;
x3 = b + c;

if(x1 == c){
    console.log("El tercer número es igual a la suma del primer y segundo número");
}else if(x2 == b){
        console.log("El segundo número es igual a la suma del primer y tercer número");
}else if(x3 == a){
    console.log("El primer número es igual a la suma del segundo y tercer número");
}else{
    console.log("Ningún número es la suma de otro");
}