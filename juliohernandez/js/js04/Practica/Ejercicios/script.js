const fila = ["Sofia", "David", "Juan"];
document.getElementById("resp1-1").innerHTML=fila.join(", ");

fila.push("Sara", "Agustin");
fila.shift();
document.getElementById("resp1-2").innerHTML=fila.join(", ");

//Ejercicio 1-3
fila.splice(1,0,"Renata");
fila.push("Elena");
document.getElementById("resp1-3").innerHTML=fila.join(", ");

let columnas=0;
let matriz = [[],[],[],[],Array(5)];
console.log(matriz);
for (let fila of matriz){
    columnas++
    for (let columna=0;columna<columnas;columna++){
        fila[columna]="*"
    }
}


