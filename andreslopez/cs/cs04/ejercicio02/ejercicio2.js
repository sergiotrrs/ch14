//Imprimir un nuevo arreglo que tenga el valor duplicado del primero
let num = [1,2,3]
let num2=[]
num.forEach(function doble (valor){
    
    num2.push(valor*2)
    return num2
})
console.log(num2)