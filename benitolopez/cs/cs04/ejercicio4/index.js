const materia1 = ['Math', 'Programming', 'English'];
const materia2 = ['Math', 'Spanish', 'Programming'];
let materiaRepeat=[];

for (let i=0; i<materia1.length; i++){
    for (let j=0; j<materia2.length ; j++){
        if ( materia1[i] == materia2[j]){           
             materiaRepeat.push(materia1[i])           
        }
    }
}
 console.log("La materia que se repite es: \n"  +materiaRepeat)   