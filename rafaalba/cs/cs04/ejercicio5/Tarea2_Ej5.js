//5. For each of the exercises below, assume you are starting with the following people array.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//A. Write a command that prints out all of the people in the list.
console.log(people);

//B. Write the command to remove "Dani" from the array.
people.splice(1,1);
console.log(people);

//C. Write the command to remove "Juan" from the array.
people.splice(2,1);
console.log(people);

//D. Write the command to move "Luis" to the front of the array.
people.splice(0,2,"Luis","Maria")
console.log(people);

//E. Write the command to add your name to the end of the array.
people.push("Rafa");
console.log(people);

//F. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for(let i=0; i<people.length; i++){
   nombre = people[i];
    console.log(nombre);
    if(nombre == "Maria"){
        break;
    }
}
//G. Write the command that gives the indexOf where "Maria" is located.
console.log("El índice de Maria es: ", people.indexOf("Maria"));