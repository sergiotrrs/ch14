const student1Courses = [' Math', ' English', ' Programming'];
const student2Courses = [' Geography', ' Spanish', ' Programming'];
let courses = [];

for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] == student2Courses[j]) {
            courses.push(student1Courses[i])
        }
    }
}
console.log("The common courses are : " + courses)
