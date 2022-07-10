//For each of the exercises below, assume 
//you are starting with thefollowing people array.
//At the end of the exercise, there should be 4 people in the array.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

alert(people);

people.splice(1,1);
alert(people);
people.splice(2,1);
alert(people);
people.splice(0,2,"Luis","Maria")
//let nameAux = people[0];
//people[0]=people[1];
//people[1]=nameAux;
alert(people);
people.push("Gilberto");
alert(people);
for(let i=0;i<people.length;i++){
   nombre = people[i];
    console.log(nombre);
    if(nombre == "Maria"){
        break;
    }
}
alert("El índice de Maria es: " + people.indexOf("Maria"));
alert(people);