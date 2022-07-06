let people1 = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 
//1.	Write a command that prints out all of the people in the list.
for(let i=0; i<people1.length; i++){
 console.log(people1[i]); 
  } 
//2.	Write a command that prints out all of the people in the list.
people1.splice(1,1) //Borrando Dani 
console.log("borrando Dany "+people1);

//3.	Write the command to remove "Juan" from the array.
people1.splice(2,1) //Borrando Juan 
console.log("borrando Juan "+people1);

//4.	Write the command to move "Luis" to the front of the array. 
people1.unshift("Luis"); 
console.log("Agregando luis al inicio "+people1);

//5.	Write the command to add your name to the end of the array.
people1.push("Aileen"); 
console.log("Agergando Aileen al final"+people1);

//6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
for(let i=0; i<people1.length; i++){
    console.log(people1[i]); 
    if(people1[i]=="Maria"){
      break;
    }
  } 
console.log("Imprimiendo hasta que salga Maria");
//7.	Write the command that gives the indexOf where "Maria" is located.
console.log("Posicion de Maria "+ people1.indexOf("Maria"));
people1.indexOf("Maria"); 