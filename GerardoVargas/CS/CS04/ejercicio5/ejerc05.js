/*Para cada uno de los ejercicios a continuación, suponga que está comenzando con la siguiente 
matriz de personas*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

/*Instrucciones:
1 - Escriba un comando que imprima a todas las personas de la lista.
2 - Escriba el comando para eliminar "Dani" de la matriz.
3 - Escriba el comando para eliminar "Juan" de la matriz.
4 - Escriba el comando para mover a "Luis" al frente de la matriz.
5 - Escriba el comando para agregar su nombre al final de la matriz.
6 - Usando un ciclo, itere a través de esta matriz y después de console.log "Maria", salga del ciclo.
7 - Escriba el comando que da el índice de donde se encuentra "María".
8 - Al final del ejercicio, debe haber 4 personas en la matriz.*/

//1
console.log(people);
//2
people.splice(1,1);
console.log(people);
//3
people.splice(2,1);
console.log(people);
//4
people.splice(0,2, "Luis", "Maria");
console.log(people);
//5
people.push("Jorge");
console.log(people);

//6
 for (let i = 0; i < people.length; i++) {
        if (people[i] === "Maria") {
            console.log("Maria");
            break;
        }
 }
//7
console.log("Maria esta en el index: " + people.indexOf("Maria", 0))
console.log(people);