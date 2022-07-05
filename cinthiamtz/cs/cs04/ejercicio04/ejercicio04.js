/* Ejercicio 04: Programa que recorre dos arrreglos e imprime en consola los comunes
*/
//Añadi mas elementos para probar que el programa funciona
let arregloUno = ['Math', 'English', 'Programming', 'Italian'];
let arregloDos = ['Geography', 'Spanish', 'Programming', 'French', 'Italian'];
console.log('Arreglo 1: ' + arregloUno.join(' , '));
console.log('Arreglo 2: ' + arregloDos.join(' , '));


let max = 0
//En este programa el tamaño de los arreglos puede ser diferete
if (arregloUno.length > arregloDos.length) {
    max = arregloUno.length;
}
else {
    max = arregloDos.length;
}
//Comparara los elementos comunes inclusive si no estan en el mismo indice 
console.log('Cursos en comun:');
for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
        if (arregloUno[i] == arregloDos[j]) {
            console.log(arregloUno[i]);
        }
    }
}