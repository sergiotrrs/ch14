//Exercise #4

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses =['Geography', 'Spanish', 'Programming'];
let rep = [];

for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] == student2Courses[j]) {
            rep.push(student1Courses[i])
        }
    }
}
console.log("Tus cursos en comun son: "+rep.join(" - "))