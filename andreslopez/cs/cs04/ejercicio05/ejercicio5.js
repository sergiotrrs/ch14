//Escribir los comandos solicitados

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Imprimir los nombres
people.forEach(nombre=>console.log(nombre))

//Remover a Dani
people.splice(1,1)
console.log(people)

//Remover a Juan
people.splice(2,1)
console.log(people)

//Mover a Luis al inicio
people.splice(0,2,"Luis","Maria")
console.log(people)

//Escribir mi nombre al final del array
people.push("Andrés")
console.log(people)

//Hacer un loop y terminarlo al imprimir Maria. Pero ¿realmente se termina el bucle? 
people.forEach((cosa)=>{
    if(cosa=="Maria"){
        console.log(cosa)
        }
})    

//Escribir el comando para encontrar la posición de Maria
people.indexOf("Maria")
