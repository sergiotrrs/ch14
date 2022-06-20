let num = parseInt(prompt("Ingrese un número entre 100 y 200"));
if (num < 100 || num > 200){
    alert("El número no está dentro del rango");
    num = parseInt(prompt("Ingrese un número entre 100 y 200"));
}

let evaluar = num%3;
if(evaluar == 0){
    alert("El número es múltiplo de 3");
}else{
    alert("El número no es múltiplo de 3");
}