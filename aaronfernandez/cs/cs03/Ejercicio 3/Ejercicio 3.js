do {
    let x = 20;
    let num = prompt("Inserta un número del 1 al 100: ");
 
    if (num < x) {
     console.log("Tu número es muy bajo");
    } else if (num > x) {
     console.log("Tu npumero es muy alto");
    } else if (num == x) {
     console.log("Adivinaste el número");
    }
   } while(num != 0 && num != x);
 