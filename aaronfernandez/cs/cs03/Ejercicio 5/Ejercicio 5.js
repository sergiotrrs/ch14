n1 = parseInt(prompt("Número 1:"));
n2 = parseInt(prompt("Número 2:"));
n3 = parseInt(prompt("Número 3:"));

let suma1=n2+n3
let suma2=n1+n3
let suma3=n1+n2

if (n1==suma1) {
    console.log("La suma de ", n2, "y", n3, "es igual a", suma1)
}
else if(n2==suma2){
    console.log("La suma de ", n1, "y", n3, "es igual a", suma2)
}
else if(n3==suma3){
    console.log("La suma de ", n1, "y", n2, "es igual a", suma3)
}
else{
    console.log("No hay coincidencias en la suma");
}