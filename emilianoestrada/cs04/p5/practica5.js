let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

people.join();
delete people[1];
delete people[3];
console.log(people);

[people[0], people[2]] = [people[2], people[0]]
people.push("Emiliano");

console.log(people);
 for (let i = 0; i < people.length; i++) {
 console.log(people[i]);
    if (people[i] == "Maria")
  {
  break;
}}

people.indexOf("Maria");