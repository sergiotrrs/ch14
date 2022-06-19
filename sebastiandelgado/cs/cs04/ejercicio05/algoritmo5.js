//5.-  Hacer los demás pasos:

let people = ['Maria','Dani','Luis','Juan', 'Camila'];
let i;
//Número 1: Escribe comando que imprime todos los nombres de la lista:
for(i=0; i< people.length; i++){
            console.log(people[i]);
    }
console.log("---------------------------------------------------");
let act=[];
//Número 2: Escribe un comnado que elimina a Dani del arreglo:

for(i=0; i<=people.length; i++){
    if(people[i] == 'Dani'){
       people.splice(i,1);
    }
    console.log(people[i]);
}
console.log("---------------------------------------------------");

//Número 3: Escribe un comnado que elimina a Juan del arreglo:
for(i=0; i<=people.length; i++){
    if(people[i] == 'Juan'){
        act= people.splice(i,1);
    }
    console.log(people[i]);
}
console.log("---------------------------------------------------");

//Número 4:Escribe un comando paramover a Lius al principio del arreglo
// Número 5: usa un comando para agregar tu nombre al final del arreglo
//JUNTÉ LOS DOS PASOS:

for(i=0; i<=people.length; i++){
    if(people[i] == 'Luis'){
        act= people.splice(i,1);
    }
}
people.unshift('Luis')
//act =people.splice('Juan')
people.push('Sebastian');


//Número 6: usando un ciclo, itera con el arreglo y después del console.log("Maria"), sal del ciclo
//
for(i=0; i<=people.length; i++){
    if(people[i] == 'Maria'){
        console.log("El nombre de Maria está en la posición = " + i);
    }
}

for(i=0; i< people.length; i++){
    console.log(people[i]);
}

