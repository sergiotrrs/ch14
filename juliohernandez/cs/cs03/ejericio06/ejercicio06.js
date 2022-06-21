// Ejercicio 6: Leer un valor entero y determinar si se trata de un número par o impar
(function parOimpar (){
    let x = Number(prompt("Dame un número "))
    while (Number.isInteger(x)===false){
     x = Number(prompt("¡Dame un número entero! "))
    }
    let y = x%2==0 ? x + " es par": x + " es impar"
    console.log(y)
  })()