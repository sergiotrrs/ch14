/*
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function mostrar(valor) {
}
people.forEach (mostrar);
people.forEach (valor => {
    console.log ("El arreglo tiene a " + valor);
})

deleteDani = people.splice(1,1);
console.log ("Nos quedan 4: " + people);
deleteJuan = people.splice(2,1);
console.log ("Nos quedan 3: " + people);

changeLuis = people.splice(1,1);
luisInit = people.unshift("Luis");
console.log ("Ahora tenemos a " + people);

myNameEnd = people.push("Julio");
console.log ("Ahora tenemos a " + people);

for (let i = 0; i < people.length; i++){
if (people == people[1]){
    break;
}
}

searchMaria = people.indexOf("Maria");
console.log ("Encuentrame al elemento " + searchMaria);