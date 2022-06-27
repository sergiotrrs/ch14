let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];


people.join(" ");
console.log(people);


people.splice(1, 1);    
console.log(people);


people.splice(2, 1); 
console.log(people);


people.unshift["luis"]
console.log(people);


people.push("Johana");                         
console.log(people);


for(let i=0;i<people.length; i++){          
    if(people[i] != "Maria"){
      console.log(people);
    }
    else{
      break;
    }
  } 



for(let i=0;i<people.length;i++){
    
    if(people[i]=="Maria"){
        console.log("El indice de Maria es el: "+i);
    }
     
}