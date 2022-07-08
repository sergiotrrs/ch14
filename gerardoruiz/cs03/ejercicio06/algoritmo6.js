/* Algortimo 6
Elabora un algoritmo para leer un número y determinar si es par o impar*/


let num = prompt("Escribe un número")

if (isNaN(num)){
    document.write("Favor de solo ingresar números")
}
else if (num%2==0){
    document.write("Es número par");
} else {
    document.write("Es número impar");
}