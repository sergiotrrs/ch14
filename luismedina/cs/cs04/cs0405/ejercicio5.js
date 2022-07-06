console.clear();
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
let eliminado1= people.splice(1,1); //elimine a Dani
console.log(people);
let eliminado2 = people.splice(2,1)// eliminar a Juan
console.log(people);
let mover = people.splice(1,1);
people.unshift(mover.join()); //mueve a Luis al principio
console.log(people)
let nombre = ["David"];
people.push(nombre.join()); //Escriba el comando para agregar su nombre al final de la matriz.
console.log(people);

for(let i=0;i<people.length;i++){
   nombre = people[i];
   if(nombre == "Maria"){
    console.log(nombre);
        break;
    }
}

console.log(`El indice de Maria es`,people.indexOf("Maria"));
console.log(people);