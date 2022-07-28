// ingresar 3 numeros entre el 1 y el 100
let n1= prompt("Escribe un numero entre 1 y 100");
let n2= prompt("Escribe un numero entre 1 y 100");
let n3= prompt("Escribe un numero entre 1 y 100");

if (n1>n2 && n1>n3){
    alert("El numero mayor es  " + n1);
} 
else if(n1<n2 && n2>n3){
    alert("El numero mayor es  " + n2);
}
else if(n1<n3 && n2<n3){
    alert("El numero mayor es " + n3);
}

else if (n1==n2 && n2==n3){
    alert("Los numeros son iguales");
}