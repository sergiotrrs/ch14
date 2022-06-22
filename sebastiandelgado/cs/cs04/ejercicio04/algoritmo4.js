// 4.- Crear un programa que relacione los dos arreglos, si hay alguna materia común, imprimirlas

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let i;
let j;
for (i = 0; i <= student1Courses.length; i++) {
    for(j=0; j< student2Courses.length ; j++){
        if(student1Courses[i] === student2Courses[j]){
            console.log("Curso en común : " + student1Courses[i]);
        }
    }
}

