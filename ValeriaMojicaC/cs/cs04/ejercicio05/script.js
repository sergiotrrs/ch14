//Exercise #5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

//Write the command to remove "Dani" from the array.
people.splice(1,1);
console.log(people);

//Write the command to remove "Juan" from the array.
people.splice(2,1);
console.log(people);

//Write the command to move "Luis" to the front of the array

//Write the command to add your name to the end of the array.
people.push("Valeria");
console.log(people);

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop

//Write the command that gives the indexOf where "Maria" is located.
