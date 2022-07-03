let n1;
let n2; 
let n3; 
let menor;
let nuevo;

n1 = prompt("Número 1:");
n2 = prompt("Número 2:");
n3 = prompt("Número 3:");

if(n1<n2){
    menor=n1;
}
else{
    menor=n2;
}

if(menor<n3){
    nuevo=menor;
}
else{
    nuevo=n3;    
}

console.log(nuevo);

