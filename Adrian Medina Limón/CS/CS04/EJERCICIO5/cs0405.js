/*Exercise #5Para cada uno de los ejercicios a continuación, suponga que está comenzando con la siguiente 
matriz de personas*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

/*
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

function imprimtArray (){
    console.log ( people.join("-"));
  }
  imprimtArray();
  array = people;
  index = 1;
  
  let removed = people.splice (index,1);
  imprimtArray();
  
  index = 2;
  let removed2 = people.splice (index,1);
  imprimtArray();
  
  const array2 = array; 
  
  array[0] = "Luis";
  array [1] = "María";
  imprimtArray (array);
  
      people.push ("Adrian");
  imprimtArray (array);
  
  for (let i =0; i <array.length; i ++){
      console.log (array[i]);
      if (array[i] == "María"){
          break;
   }
  } 
//7
console.log("Maria se encuentra en: " + people.indexOf("Maria", 0))
console.log(people);