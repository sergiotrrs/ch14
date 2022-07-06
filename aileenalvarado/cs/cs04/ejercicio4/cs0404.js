

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for(let i=0; i<student1Courses.length; i++){
  if (student2Courses.includes(student1Courses[i])){
    console.log("Encontrado "+ student1Courses[i])
  }    
} 
