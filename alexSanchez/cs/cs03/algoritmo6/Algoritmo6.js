alert("Este programa deternima si un programa es impar")

const par = prompt("Escribe tu numero")
let numeroPar= par%2

if(numeroPar==0){
    alert("El numero " +par+ " es par")
}
else {
    alert("El numero " +par+ " es impar")
}