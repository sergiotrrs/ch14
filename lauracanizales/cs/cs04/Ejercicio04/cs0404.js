/*
Create a program that loops over the 2 arrays; 
if there are any common courses print them out to the console
*/

let student1Courses = ['Math', 'English', 'Programming', 'Art'];
let student2Courses = ['Geography', 'Spanish', 'Programming', 'Art'];
let common = [];

for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] == student2Courses[j]) {
            common.push(student2Courses[i])
        }
    }
}

console.log("Common courses: " + common);