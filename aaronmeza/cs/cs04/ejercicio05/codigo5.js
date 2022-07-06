/* Inciso a)*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

for(let i = 0; i <= people.length - 1 ; i++){
    console.log(people[i]);
}

/* Inciso b) */


for(let i=0; i<=people.length -1 ; i++){
    if(people[i] == 'Dani'){
       people.splice(i,1);
    }
    console.log(people[i]);
}

/* Inciso c) */
let act = [];

for( let i=0; i<=people.length; i++){
    if(people[i] == 'Juan'){
        act= people.splice(i,1);
    }
    console.log(people[i]);
}

/* Inciso d) y e) */

for(i=0; i<=people.length; i++){
    if(people[i] == 'Luis'){
        act= people.splice(i,1);
    }
}
people.unshift('Luis')

people.push('Aarón');

/* Inciso f) */

for(i=0; i<=people.length - 1 ; i++){
    if(people[i] == 'Maria'){
        console.log("El nombre de Maria está en la posición = " + i);
    }
}

for(i=0; i< people.length; i++){
    console.log(people[i]);
}




