const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//1.primera instrucción//
console.log(people);
//2.segunda instruccióm//
people.splice(1, 1);
console.log(people);
//3.tercera instrucción//
people.splice(2, 1);
console.log(people);
//4.cuarta instrucción//
people.splice(0, 2, "Luis", "Maria");
console.log(people);
//5.quinta instruccióm//
people.push("Oswaldo");
console.log(people);

//6.sexta instruccióm//
for (let i = 0; i < people.length; i++) {
    if (people[i] == "Maria") {
        console.log(people[i]);
        break;}}
//7.Septima instruccióm//
console.log("Maria esta en el index: " + people.indexOf("Maria", 0))
// último array//
console.log(people);