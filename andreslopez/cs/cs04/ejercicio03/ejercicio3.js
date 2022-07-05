//Hacer un programa que sume y multiplique los elementos de un arreglo entre sí

let num=[2,4,6]
let resultadoSuma=0
num.forEach((numero=>resultadoSuma=resultadoSuma+numero))
//console.log(resultadoSuma)

let resultadoMulti=1
num.forEach((numero=>resultadoMulti=resultadoMulti*numero))
//console.log(resultadoMulti)

console.log("El resultado de sumarlos es "+resultadoSuma+". "+"El resultado de multiplicarlos es "+ resultadoMulti +"." )