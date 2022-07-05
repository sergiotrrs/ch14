//Hacer un programa que haga un loop entre dos arreglos e imprima los elementos repetidos

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

student1Courses.forEach((materia,index)=>{
    let materia2 = student2Courses[index];
    //console.log(materia,materia2) sí funcionó :)
    if (materia==materia2){
        console.log("Los cursos en común son: "+materia)
    }
})