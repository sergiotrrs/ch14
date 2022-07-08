//Solicitar 3 números (entre el 1 y el 100)  y definir cuál es el menor
let a = prompt("Escriba un número del 1 al 100")
let b = prompt("Escriba un número del 1 al 100")
let c = prompt("Escriba un número del 1 al 100")

if (a<=b&&a<=c) {
    alert(a + " es el número menor")
}
else if (b<=a&&b<=c) {
    alert(b + " es el número menor")
}
else {
    alert(c + " es el número menor")
}
