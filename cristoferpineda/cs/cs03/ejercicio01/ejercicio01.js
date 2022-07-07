//1.-Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el mayor)
let primerNum , segundoNum , tercerNum , numeroMayor; //Definicion de variables
primerNum = parseInt(prompt("Ingrese primer numero ")); //'parseInt'convierte un string y devuelve un entero de la base especificada.
segundoNum = parseInt(prompt("Ingrese segundo numero ")); //'prompt' muestra un mensaje y solicita ingrensar un texto
tercerNum = parseInt(prompt("Ingrese tercer numero "));
if (primerNum >= segundoNum && primerNum >= tercerNum){
    numeroMayor = primerNum;
}
else if (segundoNum >= primerNum && segundoNum>=tercerNum){
    numeroMayor = segundoNum;
}
else {
    numeroMayor = tercerNum;
}
window.alert("El mayor es " + numeroMayor); //mensaje de alerta concatenado con la variable numeroMayor en "+ numeroMayor"