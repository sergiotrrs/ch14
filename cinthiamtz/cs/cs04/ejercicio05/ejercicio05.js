// Ejericio 05
//For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1.	Write a command that prints out all of the people in the list.
console.log('Las personas de la lista son: '+ people.join(' , '));//Imprimir todos los elementos del arreglo

//2.	Write the command to remove "Dani" from the array.
people.splice(1, 1);
console.log('Eliminando a Dany de la lista: '+ people.join(' , '));

//3.	Write the command to remove "Juan" from the array.
people.splice(2, 1);
console.log('Eliminando a Juan de la lista: '+ people.join(' , '));

//4.	Write the command to move "Luis" to the front of the array.
people.splice(0, 2, 'Luis', 'Maria');
console.log('Colocar a Luis al inicio: '+ people.join (' , '));

//5.	Write the command to add your name to the end of the array.
people.push("Cinthia")
console.log('Agregar mi nombre al final: ' + people.join(' , '));

//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (i = 0; i < people.length; i++) {
    if (people[i] == "Maria") {
        console.log(people[i])
        break
    }
}

//7.	Write the command that gives the indexOf where "Maria" is located.
console.log('El indice de Maria: '+ people.indexOf('Maria'));

//At the end of the exercise, there should be 4 people in the array.
console.log('Resultado final: '+ people)