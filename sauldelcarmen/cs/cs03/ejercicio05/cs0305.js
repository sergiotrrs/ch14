//Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let opcion = confirm("Deseas ejecutar el programa?");
if (opcion == true) {
    if (opcion == true) {
        div();
    } else {
        
     }
   }

   function div() {
    alert("El siguiente programa determina sí un numero es la suma de los otros dos");
    n1=(prompt("Ingrese el primer numero")); 
    n2=(prompt("Ingrese el segundo numero"));
    n3=(prompt("Ingrese el tercer numero"));  
    if (n1 == n2 + n3) {
        alert(n1+" es la suma de los otros dos");
     }
        else if (n2 == n1 + n3) {

        alert(n2+" es la suma de los otros dos");
        }   
        else if (n3 == n1 + n2) {
        alert(n3+" es la suma de los otros dos");
        }
        else {
        alert("error");
        }
    }
