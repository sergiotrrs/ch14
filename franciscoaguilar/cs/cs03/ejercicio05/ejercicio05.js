let n1 = parseInt(prompt("Ingresa el primer número "));
let n2 = parseInt(prompt("Ingresa el segundo número "));
let n3 = parseInt(prompt("Ingresa el tercer número "));

let suma1 = n1+n2;
let suma2 = n1+n3;
let suma3 = n2+n3;

if (suma1 == n3){
    alert(`La suma de ${n1} (n1) + ${n2} (n2) es igual ${n3} (n3)`);
} else if (suma2 == n2){
    alert(`La suma de ${n1} (n1) + ${n3} (n3) es igual ${n2} (n2)`);
}else if (suma3 == n1){
    alert(`La suma de ${n3} (n3) + ${n2} (n2) es igual ${n1} (n1)`);
}else{
    alert("Ninguna combinación de sumas es igual a cualquiera de los números");
};