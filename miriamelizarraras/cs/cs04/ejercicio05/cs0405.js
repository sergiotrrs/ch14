let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];


//1. 	Write a command that prints out all of the people in the list.
console.log(people);
//2.	Write the command to remove "Dani" from the array.
people.shift("Dani");
console.log(people);
//3.	Write the command to remove "Juan" from the array.
people.shift("Juan");
console.log(people);
//4.	Write the command to move "Luis" to the front of the array.
console.log(people.unshift(2));
//5.	Write the command to add your name to the end of the array.
people.push("Miriam");
console.log(people);
//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let i = 0; i <= people.length; i++) {
    if (people[i] === "Maria") {
        break;
    } 
    console.log("se encontro a " + people[i]);
}
//7.	Write the command that gives the indexOf where "Maria" is located.
people.indexOf(Maria)

//At the end of the exercise, there should be 4 people in the array

