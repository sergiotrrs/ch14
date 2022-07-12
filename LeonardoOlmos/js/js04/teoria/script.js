const arreglo = ["dato string", false, 23, true]

console.log(arreglo)
console.log(arreglo.toString())
console.log(arreglo.join("-"))

const frutas = [
    ["mango", "platano", "melon", "guanabana", "aguacate", "kiwi"],
    ["mango", "platano", "melon", "guanabana", "aguacate", "kiwi"]
]
console.log(frutas.join(" "))


for (let i = 0; i < frutas.length; i++) {
    for (let j = 0; j < frutas[i].length; j++) {
        console.log(frutas[i][j])
    }


}