//Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
let opcion = confirm("Deseas ejecutar el programa?");
if (opcion == true) {
    if (opcion == true) {
        div();
    } else {
     }
   }

function div() {
    alert("El siguiente programa selecciona el menor de 3 numeros, porfavor agregre 3 numeros diferentes entre el 1 y el 100");
    n1=(prompt("Ingrese el primer numero")); 
    n2=(prompt("Ingrese el segundo numero"));
    n3=(prompt("Ingrese el tercer numero"));  
    if (n1 < n2 && n1 < n3) {
        alert(n1+" es menor que "+n2+" y "+n3);
     } 
     else if (n2 < n1 && n2 < n3) {
        alert(n2+" es menor que "+n1+" y "+n3);
     }
     else if (n3 < n1 && n3 < n2) {
        alert(n3+" es menor que "+n1+" y "+n2);
     }
     else {
        alert("error");
    }
}