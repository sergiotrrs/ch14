console.log("Acá pongo mi código");
/*
Aquí merito, por favor.
*/
/*Exercise #5
For each of the exercises below, assume you are starting with the following people
array.
let people = [&quot;Maria&quot;, &quot;Dani&quot;, &quot;Luis&quot;, &quot;Juan&quot;, &quot;Camila&quot;];
1. Write a command that prints out all of the people in the list.
2. Write the command to remove &quot;Dani&quot; from the array.
3. Write the command to remove &quot;Juan&quot; from the array.
4. Write the command to move &quot;Luis&quot; to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log &quot;Maria&quot;, exit
from the loop.
7. Write the command that gives the indexOf where &quot;Maria&quot; is located.
At the end of the exercise, there should be 4 people in the array.*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];


function printOutString(){        //1
    return people.join(" ");
}
printOutString();
//----------------------------------------------------------------------------------


let eliminadoDani = people.splice(1, 1);    //2
console.log("Dani ha sido elimnado");
console.log(people);
//-----------------------------------------------------------------------------------

let eliminadoJuan = people.splice(2, 1);    //3
console.log("Juan ha sido elimnado");
console.log(people);
//-----------------------------------------------------------------------------------


people.splice(0, 1, "Luis");                //4
people.splice(1, 1, "Maria");
console.log("Luis ha sido cambiado de lugar");
console.log(people);
//---------------------------------------------------------------------------------


people.push("Jose");                         //5
console.log("Acabo de agregar mi nombre");
console.log(people);
//--------------------------------------------------------------------------------


for(let i = 0; i < people.length; i++){          //6
    console.log(people[i]); 
    if(people1[i] == "Maria"){
      break;
    }
  } 
console.log("Aqui esta Maria");
//--------------------------------------------------------------------------------


let ubicacionMaria = people.indexOf("Maria");  //7
console.log("Maria esta en la posicion " + ubicacionMaria);
console.log(people);

