alert(`escojeras 3 numeros del 1 al 100 y
te dire cual es el menor`)

let var1 = prompt("escoge tu primer numero ")
let var2 = prompt("escoge tu segundo numero ")
let var3 = prompt("escoge el tercer numero ")


if (var1 < var2 && var1 < var3) {
    alert(`${var1} es el menor`)
} else {
    if (var2 < var3) {
        alert(`${var2} es el menor`)
    } else {
        alert(`${var3} es el menor`)
    }
}