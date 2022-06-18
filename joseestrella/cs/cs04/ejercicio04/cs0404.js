console.log("Acá pongo mi código");
/*
Aquí merito, por favor.
*/
/*Exercise #4
let student1Courses = [&#39;Math&#39;, &#39;English&#39;, &#39;Programming&#39;];
let student2Courses = [&#39;Geography&#39;, &#39;Spanish&#39;, &#39;Programming&#39;];
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console.*/

let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

for(let i = 0; i < student1Courses.length; i++){
  if (student2Courses.includes(student1Courses[i])){
    console.log("Tienen en comun: " + student1Courses[i])
  }    
} 
