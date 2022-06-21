console.log("Codigo 4 de cs04")

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const merged = student1Courses.concat(student2Courses);

let duplicados = [];
 
const tempArray = [...merged].sort();
 
for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
}
 
console.log(duplicados);

/*
crear el array duplicados, vacío en un principio, que es en donde almacenaremos los elementos duplicados.
Seguidamente, propagamos los elementos del array (merged) mediante el operador spread de propagación en un nuevo
array que ordenamos mediante el método sort para luego asignar el resultado al array tempArray, que usaremos temporalmente.

Luego recorremos los elementos del array tempArray, comprobando si cada uno de ellos es igual al siguiente elemento del array.
Si son iguales, significará que el elemento está duplicado, por lo que lo agregamos al array duplicados.

*/