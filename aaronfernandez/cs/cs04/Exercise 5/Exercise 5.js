/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1. Write a command that prints out all of the people in the list.
console.log(people)

//2. Write the command to remove "Dani" from the array.
let daniDeleted = people.splice(1, 1);
console.log("Dani was removed");
console.log(people);

//3. Write the command to remove "Juan" from the array.
let juanDeleted = people.splice(2, 1);
console.log("Juan was removed");
console.log(people);

//4. Write the command to move "Luis" to the front of the array.
people.splice(0, 1, "Luis");
console.log("Luis has been moved");
console.log(people);

//5. Write the command to add your name to the end of the array.
people.push("Aarón");
console.log("My name has been added");
console.log(people);

//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.


//7. Write the command that gives the indexOf where "Maria" is located.
let mariaLocated = people.indexOf("Maria");
console.log("Maria is in the position: " + mariaLocated);
console.log(people);

//At the end of the exercise, there should be 4 people in the array.