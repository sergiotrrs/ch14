/*Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

const stu1 = ['Math', 'English', 'Programming'];
const stu2 = ['Geography', 'Spanish', 'Programming'];
let materia=[];

for (let i=0; i<stu1.length; i++){
    for (let j=0; j<stu2.length ; j++){
        if ( stu1[i] == stu2[j]){           
        materia.push(stu1[i])           
        }
    }
}
 console.log("La materia que se repite es: " + materia)   