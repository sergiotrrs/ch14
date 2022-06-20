//2.-Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el menor
let primerNum , segundoNum , tercerNum , numeroMenor; //Definicion de variables
primerNum = parseInt(prompt("Ingrese primer numero entre el 1 y 100 ")); //'parseInt'convierte un string y devuelve un entero de la base especificada.
segundoNum = parseInt(prompt("Ingrese segundo numero entre el 1 y 100 ")); //'prompt' muestra un mensaje y solicita ingrensar un texto
tercerNum = parseInt(prompt("Ingrese tercer numero entre el 1 y 100 "));
if (primerNum <= segundoNum && primerNum <= tercerNum){
    numeroMenor = primerNum;
}
else if (segundoNum <= primerNum && segundoNum<=tercerNum){
    numeroMenor = segundoNum;
}
else {
    numeroMenor = tercerNum;
}
window.alert("El menor es " + numeroMenor); //mensaje de alerta concatenado con la variable numeroMenor en "+ numeroMenor" 