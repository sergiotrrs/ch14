//Exercise #4
let student1Courses = ['Math', 'English', 'Programming', 'Art'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'Art'];
let cursosIguales = [];

//console.log(student1Courses.sort());
//console.log(student2Courses.sort());

for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] == student2Courses[j]) {
            cursosIguales.push(student2Courses[i])
        }
    }
}

console.log(`Cursos Iguales:  ${cursosIguales.join(", ")}`)