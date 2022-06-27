let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1. Write a command that prints out all of the people in the list.
console.log(people); //Imprimir nombres

//2. Write the command to remove "Dani" from the array.
let eliminado1 = people.splice(1,1);
console.log(people); //Imprimir nombres sin Dani

//3. Write the command to remove "Juan" from the array.
let eliminado2 = people.splice(2,1);
console.log(people); //Imprimir nombres sin Juan

//4. Write the command to move "Luis" to the front of the array.
people.splice(1,1);
people.unshift("Luis");
console.log(people);

//5. Write the command to add your name to the end of the array.
people.push("Montse");
console.log(people);

//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for (let i = 0; i < people.length; i++) {
        if (people[i] == "Maria") {
            console.log("Maria");
            break;
        }
}

//7. Write the command that gives the indexOf where "Maria" is located.
console.log("El indeOf de María es: ", people.indexOf("Maria"));