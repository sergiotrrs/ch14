/*
Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function commonCourses(student1, student2) {
    let common = [];
    for (let i = 0; i < student1.length; i++){
        for (let j = 0; j < student2.length; j++) {
            if (student1[i] == student2[j]){
                common.push(student1[i]);
            }
        }
    }

    if (common.length != 0){
        console.log(`The students have this courses in common: ${common.join()}.`);
    }

    else {
        console.log("The students don't have any course in common.");
    }

}

commonCourses(student1Courses, student2Courses)