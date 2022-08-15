alert("Este programa te indica si un numero entre 100-200 es multiplo de 3")
const a = prompt("Escribe un numero entre 100-200")

if (a< 100 || a> 200){
    alert("Es una entrada invalida")
}
else if(a>=100 && a<= 200){
    let multiplo = a % 3;
    if (multiplo==0){
        alert("El numero " +a+ " es divisible entre 3")
    }
        else {
            alert("El numero " +a+ " no es divisible entre 3")
        }
    }

