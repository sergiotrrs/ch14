console.log("Código");
//Se pide al usuario un número
nume=window.prompt("Dame un número");
//Se convierte a número
num=parseInt(nume);

if(num%2==0){//Determina si es par o impar
    console.log("El número "+num+" es par");
} else{
    console.log("El número "+num+" es impar");
}