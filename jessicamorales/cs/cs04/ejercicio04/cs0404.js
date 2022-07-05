let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
let cursosIguales = [];

function cursos(curso1 = student1Courses, curso2 = student2Courses) {
    for(let i = 0; i < student1Courses.length; i++){
        for(let j = 0; j < student2Courses.length; j++){
            if(curso1[i] == curso2[j]){
                cursosIguales.push(curso1[i]);
            }
        }
    }
    console.log("Los cursos que son iguales son: ", cursosIguales);
}
cursos();