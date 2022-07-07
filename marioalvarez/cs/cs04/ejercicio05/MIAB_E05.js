/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/ 

//1
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log("1.	Write a command that prints out all of the people in the list.");
console.log(people);
document.getElementsByTagName("p")[0].innerHTML="["+people+"]";


//2
console.log("2.	Write the command to remove \"Dani\" from the array.");
people.splice(people.indexOf("Dani"),1);
console.log(people);
document.getElementsByTagName("p")[1].innerHTML="["+people+"]";

//3
console.log("3.	Write the command to remove \"Juan\" from the array.");
people.splice(people.indexOf("Juan"),1);
console.log(people);
document.getElementsByTagName("p")[2].innerHTML="["+people+"]";


//4
console.log("4.	Write the command to move \"Luis\" to the front of the array.");
people.splice(0,0,people.splice(people.indexOf("Luis"),1)[0]);
console.log(people);
document.getElementsByTagName("p")[3].innerHTML="["+people+"]";

//5
console.log("5.	Write the command to add your name to the end of the array.");
people.push("Mario");
console.log(people);
document.getElementsByTagName("p")[4].innerHTML=people;


//6
let msg=document.getElementsByTagName("p")[5];
console.log("6.	Using a loop, iterate through this array and after console.log \"Maria\", exit from the loop.");
for(let i=0; i<people.length;i++){
    console.log(people[i]);
    msg.innerHTML=msg.innerHTML+people[i]+"<br>";
    if(people[i]=="Maria")
        break;
}

//7
console.log("7.	Write the command that gives the indexOf where \"Maria\" is located.");
console.log(people.indexOf("Maria"));
document.getElementsByTagName("p")[6].innerHTML="Está en el index "+people.indexOf("Maria");

//8
document.getElementsByTagName("p")[7].innerHTML="["+people+"]"+"   Longitud:"+people.length;