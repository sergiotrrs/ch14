let student1Courses = ['Math','Geography', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming','Math'];
let contador =0;
console.log("Las materias del primer alumno son: ");
console.log(student1Courses);
console.log("Las materias del segundo alumno son: ");
console.log(student2Courses);

for (let i =0; i<student1Courses.length;i++){
    let materia1= student1Courses[i];
    for (let j =0; j<student2Courses.length;j++){
        let materia2 = student2Courses[j];
            if (materia1==materia2){
                console.log("Los dos alumnos comparten la materia de: " +materia1);
             contador = contador+1;
            }              
    }
  
}
  if(contador < 1){
                console.log("No comparten ninguna materia");
            }