let cursos1 = ['Math', 'English', 'Programming'];
let cursos2 = ['Geography', 'Spanish', 'Programming'];
let cursos = [];
console.log(cursos1);
console.log(cursos2);

for (let i = 0; i < cursos1.length; i++) {
    for (let j = 0; j < cursos2.length; j++) {
        if (cursos1[i] == cursos2[j]){
            cursos.push(cursos1[i]);
        }
    }
    
}
console.log(`Los cursos iguales son ${cursos}`);

cursos.slice();