//Exercise #5
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

people.splice(1,1);
console.log(people);
console.log("hola");