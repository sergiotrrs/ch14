/*Exercise #5
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

const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//#1
console.log(people);
//#2
people.splice(1, 1);
console.log(people);
//#3
people.splice(2, 1);
console.log(people);
//#4
people.splice(0, 2, "Luis", "Maria");
console.log(people);
// #5
people.push("Abi");
console.log(people);

//#6
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Maria") {
        console.log("Maria");
        break;
    }
}
// #7
console.log("Maria esta en la posicion index: " + people.indexOf("Maria", 0))
// #theEnd
console.log(people);