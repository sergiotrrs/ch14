let n1;
let n2; 
let n3; 
let mayor;
let nuevo;

n1 = prompt("Número 1:");
n2 = prompt("Número 2:");
n3 = prompt("Número 3:");

if(n1>n2){
    mayor=n1;
}
else{
    mayor=n2;
}

if(mayor>n3){
    nuevo=mayor;
}
else{
    nuevo=n3;    
}

console.log(nuevo);