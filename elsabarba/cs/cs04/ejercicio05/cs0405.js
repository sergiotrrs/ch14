/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Write a command that prints out all of the people in the list.
console.log(people.join())

// Write the command to remove "Dani" from the array.
const remover = (arr, name) => { 
    return arr.filter( elem => { 
        if(elem !== name) {
          return elem
        }   
    })
 }
people = remover(people, "Dani")
console.log(people)

// Write the command to remove "Juan" from the array.
people = remover(people, "Juan")
console.log(people)

// Write the command to move "Luis" to the front of the array.
function moveElement(arr, name){
 let index = arr.indexOf(name)
 arr.splice(index, 1)
 arr.unshift(name)
}
moveElement(people, "Luis")
console.log(people)

// Write the command to add your name to the end of the array.
people.push("Elsa")
console.log(people)

// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let i = 0; i < people.length; i++) {
 if (people[i] != "Maria"){
  console.log(people[i])
 }
 else {
  console.log(people[i])
  break
 }
 
}
