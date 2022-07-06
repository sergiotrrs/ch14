let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

people.splice(1,1);
console.log(people);
people.splice(2,1);
console.log(people);
people.splice(0,2,"Luis","Maria")
//let nameAux = people[0];
//people[0]=people[1];
//people[1]=nameAux;
console.log(people);
people.push("Francisco");
console.log(people);
for(let i=0;i<people.length;i++){
   nombre = people[i];
  //  console.log(nombre);
    if(nombre == "Maria"){
        console.log(nombre);
        break;
    }

}
console.log("El índice de Maria es: ", people.indexOf("Maria"));

