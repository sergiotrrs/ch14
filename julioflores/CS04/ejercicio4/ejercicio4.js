/*
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.


else if (edad ==35) {
        console.log ("Estás ruco pero pásale a lo barrido")
    }
    else {
        console.log("Abrete a tu casa");
    }
    
}
for (let i = 0; i < student1Courses.length; i++){ 
}
if (class[i] == student1Courses[i]) {
        console.log ("Las materias generales que coinciden son:");
    }
*/
let student1Courses = ['Psychology', 'English', 'Programming'];
let student2Courses = ['Chemestry', 'Spanish', 'Programming'];

let classes = ['Math', 'Geography'];
let language = ['English', 'Spanish'];
let program = ['Programming'];
let i=0
for (; i < student1Courses.length; i++) {
    if (classes[i] == student1Courses[i] || student2Courses[i]) {
    console.log ("The classes are: " + classes);
    if (language[i] == student1Courses[i] || student2Courses[i]){
        console.log ("The languages are: " + language);
        if (program[i] == student1Courses[i] || student2Courses[i]){
        console.log ("The programs are: " + program);
        }
    }
}
}