//Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let a = parseInt(prompt("Escriba un número."))
let b = parseInt(prompt("Escriba un número."))
let c = parseInt(prompt("Escriba un número."))


if (a+b==c){
    alert(c + " es la suma de " +b+ " y " +a)
}

else if (a+c==b){
    alert(b + " es la suma de " +c+ " y " +a)
}

else if (b+c==a){
    alert(a + " es la suma de " +c+ " y " +b)
}
else{
    alert("Ningún número es la suma de los otros dos.")
}