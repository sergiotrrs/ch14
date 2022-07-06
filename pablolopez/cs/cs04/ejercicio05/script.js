/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    1. Write a command that prints out all of the people in the list.
    2. Write the command to remove "Dani" from the array.
    3. Write the command to remove "Juan" from the array.
    4. Write the command to move "Luis" to the front of the array.
    5. Write the command to add your name to the end of the array.
    6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
    7. Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1. Write a command that prints out all of the people in the list.
people.forEach((valor, indice) =>{
    console.log(people[indice]);
})

//2. Write the command to remove "Dani" from the array.
people.splice(1,1);
console.log(people);

//3. Write the command to remove "Juan" from the array.
people.splice(2,1);
console.log(people);

//4. Write the command to move "Luis" to the front of the array.
Luis = people.splice(1,1);
people.unshift(Luis[0]);
console.log(people);

//5. Write the command to add your name to the end of the array.
people.push("Pablo");
console.log(people);

//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
function funcion(){
    let mar=people.indexOf('Maria');
    for(let i=0;i<=mar;i++){
        console.log(people[i]);
    }
}
funcion(people);
//7. Write the command that gives the indexOf where "Maria" is located.
//maria = people.indexOf('Maria');
console.log(people.indexOf('Maria'));
