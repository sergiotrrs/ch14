//// ingresar 3 numeros entre el 1 y el 100 y determinar cual es el menor
let n1= prompt("Escribe un numero entre 1 y 100");
let n2= prompt("Escribe un numero entre 1 y 100");
let n3= prompt("Escribe un numero entre 1 y 100");

if (n1<n2 && n1<n3){
    alert("El numero menor es " + n1);
} 
else if(n2<n1 && n2<n3){
    alert("El numero menor es " + n2);
}
else if(n3<n1 && n3<n2){
    alert("El numero menor es " + n3);
}

else if (n1==n2 && n2==n3){
    alert("Los numeros son iguales");
}