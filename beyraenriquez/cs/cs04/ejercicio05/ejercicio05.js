const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//#1
console.log(people);
//#2
people.splice(1,1);
console.log(people);
//#3
people.splice(2,1);
console.log(people);
//#4
people.splice(0,2, "Luis", "Maria");
console.log(people);
//#5
people.push("Beyra");
console.log(people);

//#6
 for (let i = 0; i < people.length; i++) {
        if (people[i] === "Maria") {
            console.log("Maria");
            break;
        }
 }
//#7
console.log("Maria esta en el index: " + people.indexOf("Maria", 0))
console.log(people);