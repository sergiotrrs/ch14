const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//imprimir a todas las personas de la lista
console.log(people);

//eliminar a "Dani"
people.splice(1, 1);
console.log(people);

//eliminar a "Juan"
people.splice(2, 1);
console.log(people);

//mover a Luis al inicio
people.splice(0, 2, "Luis", "Maria");
console.log(people);

//añadir mi nombre al final
people.push("Lucia");
console.log(people);

//ciclo para encontrar a "Maria"
 for (let i= 0; i< people.length; i++) {
        if (people[i] == "Maria") {
            console.log(people[i]);
        }
 }

//en qué index está Maria
console.log("Maria está en el index: " + people.indexOf("Maria", 0))

//fin del ejercicio con solo 4 personas
console.log(people);