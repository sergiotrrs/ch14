// Ejercicio 5: Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
let a=Number(prompt("Tecle un número: "))
let b=Number(prompt("Tecle otro número: "))
let c=Number(prompt("Tecle otro número: "))

//Las opciones son 3+1
if (a + b == c) {
  console.log(`${c} es el resultado de la suma de ${a} y ${b}`)
} 
else if (a+c==b){
console.log(`${b} es el resultado de la suma de ${a} y ${c}`)
}
else if (b + c == a) {
  console.log(`${a} es el resultado de la suma de ${c} y ${b}`)
} else{
  console.log(`${a}, ${b}, y ${c} ninguno es resultado de la suma de los otros dos`)
}
