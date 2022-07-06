const student1Courses = [' Math', ' English', ' Programming'];
const student2Courses = [' Geography', ' English', ' Programming'];
let materias = [];

for (let i = 0; i < student1Courses.length; i++) {
    for (let i2 = 0; i2 < student2Courses.length; i2++) {
        if (student1Courses[i] == student2Courses[i2]) {
            materias.push(student1Courses[i])}}};

console.log("La materia que se repite es/son " + materias);