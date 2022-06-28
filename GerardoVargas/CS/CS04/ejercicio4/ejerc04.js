//Cree un programa que recorra las 2 matrices; si hay algún curso común, imprímalo en la consola.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for (i=0; i<student1Courses.length;i++){
     if (student1Courses[i] == student2Courses [i] ){
     console.log(student1Courses[i]);
}   
}