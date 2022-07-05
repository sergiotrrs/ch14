/* Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

/* Ejercicio #4
let estudiante1Cursos = ['Matemáticas', 'Inglés', 'Programación'];
let estudiante2Cursos = ['Geografía', 'Español', 'Programación'];
Cree un programa que recorra las 2 matrices; si hay algún curso común, imprímalo en la consola.

*/


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourse = [...student1Courses, ...student2Courses].reduce((total, item, index, array) => {
  (array.indexOf(item, index + 1) !== -1 && total.indexOf(item) === -1) ? total.push(item) : null
  return total
}, [])

console.log(commonCourse)