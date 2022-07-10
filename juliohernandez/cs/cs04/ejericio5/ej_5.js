/*For each of the exercises below, assume you are starting with the following people
array.
let people = ["Maria","Dani","Luis","Juan","Camila"];
1. Write a command that prints out all of the people in the list.
2. Write the command to remove &quot;Dani&quot; from the array.
3. Write the command to remove &quot;Juan&quot; from the array.
4. Write the command to move &quot;Luis&quot; to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log &quot;Maria&quot;, exit
from the loop.
7. Write the command that gives the indexOf where &quot;Maria&quot; is located.
At the end of the exercise, there should be 4 people in the array.*/

let people = ["Maria","Dani","Luis","Juan","Camila"]

//Number 1
people.join(", ");
console.log(people);

//Number 2
people.splice(people.indexOf("Dani"),1);
console.log(people);

//Number 3
people.splice(people.indexOf("Juan"),1);
console.log(people);

//Number 4
let eliminados=people.splice(people.indexOf("Luis"),1);
people.unshift(eliminados[0]);
//OR eliminados.push(people.splice(people.indexOf("Luis"),1)[0])
console.log(people);

//Number 5
people.push("Julio H.");
console.log(people);

//Number 6
let noParar=true;
  while (noParar){
    for (let i=0;i<=people.length-1;i++){
        console.log(people[i]);
        if (people[i]=="Maria") {
          noParar=false;
          break;
        }
    }
  }

//Number 7
let indice=people.indexOf("Maria");
console.log(`Maria se encuentra en el índice ${indice}`);
