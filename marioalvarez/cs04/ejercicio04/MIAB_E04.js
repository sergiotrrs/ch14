/**
Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let msg= document.getElementsByTagName("p")[0];

for(let i=0; i<student1Courses.length;i++){
    for(let j=0; j<student2Courses.length;j++){

        if(student1Courses[i]==student2Courses[j]){
            msg.innerHTML=msg.innerHTML+student1Courses[i]+"<br>";
            console.log(student1Courses[i]);
        }
    }
}

