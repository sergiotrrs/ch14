/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.

1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/

    
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function Ejercico5(array = people, introduceTuMombre) {
    for (let i = 0; i < array.length; i++) {
        let letra = array[i].toLowerCase();
        array[i] = array[i].charAt(0).toUpperCase() + letra.slice(1)
    }

    console.log("las personas son: ", array.join(" "))
    if (array.includes("Dani")) {
        let indice = array.indexOf("Dani")

        array.splice(indice, 1)
    }

    if (array.includes("Juan")) {
        let indice = array.indexOf("Juan")

        array.splice(indice, 1)
    }

    if (array.includes("Luis")) {
        let indice = array.indexOf("Luis")
        let luis = array.splice(indice, 1)
        array.push(luis.join(""))

    }

    array.push(introduceTuMombre)





    console.log(array.join(" "))

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Maria") {
            console.log("Maria");
            break;
        }

    }

}

Ejercico5();

