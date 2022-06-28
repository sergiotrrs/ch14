alert("Este programa calcula el numero mayor entre 1-100")

const a = prompt("Escribe el primer numero entre 1-100: ");
const b = prompt("Escribe el segundo numero entre 1-100: ");
const c = prompt("Escribe el tercer numero entre 1:100: ");

if (a<1 || b<1 || c<1|| a>100 || b>100 || c>100){
    alert("Entrada invalida")
}
else if(a >= b && a >= c){
    alert("El numero mayor es " + a);
}
else if (b >= a && b >= c){
    alert("El numeror mayor es " +b );
}
else if ( c >= a && c >= b){
    alert("El numero mayor es " + c)
}
