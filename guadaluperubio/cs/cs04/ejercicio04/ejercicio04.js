consolelog("ejercicio04 cs04");


/*
Cree un programa que recorra las 2 matrices; si hay algún curso común,
imprímalo en la consola.

*/


let estudiante1Cursos = ['matematicas', 'ingles', 'programacion'];
let estudiante2Cursos= ['geografia', 'español', 'programacion];

let cursoComun = [...estudiante1Cursos, ...estudiante2Cursos].reduce((total, item, index, array) => {
  (array.indexOf(item, index + 1) !== -1 && total.indexOf(item) === -1) ? total.push(item) : null
  return total
}, [])

console.log(cursoComun);