/*Exercise #4 Create a program that loops over the 2 arrays; 
if there are any common courses print them out to the console.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for(let i=0; i<student1Courses.length; i++){
  if (student2Courses.includes(student1Courses[i])){
    console.log(student1Courses[i]+ " es el curso en comun ")
  }    
} 