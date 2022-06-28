/*Exercise #4
let student1Courses = ["Math","English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console.*/

let student1Courses = ["Math","English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];
let commoncourses=[]

for (let i=0; i<=student1Courses.length-1;i++){
    if ((student2Courses.indexOf(student1Courses[i]))!=-1){
        commoncourses.push(student2Courses[student2Courses.indexOf(student1Courses[i])]);
    }
}
alert(commoncourses.join(" & "));