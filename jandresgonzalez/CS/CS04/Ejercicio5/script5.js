//Repaso final del CS04

//Esta función utiliza el método splice para eliminar datos de un array
function byeByePerson(value) {
    console.log(`¿Ya te vas, ${value}?`);
    for (let i =0; i < people.length; i++) {
    if (people[i] == value) {
        //let byePerson=people[i]
        people.splice(i, 1);
        //console.log("Adiós,", byePerson, ", ahora solo están", people);
    }
}
console.log(people); //Y regresa en la consola cómo va el array
}


const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1.	Write a command that prints out all of the people in the list.
//people.forEach(consolePrint);
people.forEach(value => console.log(`En el array fiestero están: ${value}`));
//2.	Write the command to remove "Dani" from the array.
let name = "Dani";
byeByePerson(name);
//3.	Write the command to remove "Juan" from the array.
name = "Juan";
byeByePerson(name);
//4.	Write the command to move "Luis" to the front of the array.
name = "Luis";
byeByePerson(name);   
/* for (let i= 0; i < people.length; i++) {
    if (people[i] == nameToFront) {
        people.splice(i, 1);
        break;
    }
} */
console.log("¡Ah! Luis, mejor pasa al frente del array, ¿cómo ves?");
people.unshift(name);
console.log("Ahora el array está así:", people);
//5.	Write the command to add your name to the end of the array.
console.log("¿¿¿Abue??? ¡Pásale al array!")
people.push("El Abue hackerman");
console.log("People es", people);
//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
console.log("Oigan, ¿y Maria?");
for (let i=0; i < people.length; i++) {
    console.log("Se iterarán los nombres hasta que se imprima Maria: "+ people[i]);
    if (people[i] == "Maria") {
        break;
    }
}

//7.	Write the command that gives the indexOf where "Maria" is located.
console.log("¡Te encontramos, Maria!");
console.log( "¡Estabas en el lugar", people.indexOf("Maria", 0), "del array!");
console.log("¡Así queda la fiesta!:", people , "¡Wooo!");