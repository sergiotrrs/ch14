let n1;
let n2; 
let n3; 

let s1;
let s2;
let s3;

n1 = prompt("Número 1:");
n2 = prompt("Número 2:");
n3 = prompt("Número 3:");

s1= n1+n2;
s2= n2+n3;
s3= n3+n1;

if(n3 == s1){
    console.log("El numero 3 es la suma del numero 1 con el numero 2");
}
else if(n1 == s2){
    console.log("El numero 1 es la suma del numero 2 con el numero 3");
}
else if(n2==s3){
    console.log("El numero 2 es la suma del numero 3 con el numero 1");
}

else{
    console.log("Ningun numero es la suma de los otros dos");
}
