let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

for ( let i = 0; i <= student1Courses.length - 1; i++) {
    for( let j=0; j<= student2Courses.length - 1 ; j++){
        if(student1Courses[i] === student2Courses[j]){
            console.log("Curso en común : " + student1Courses[i]);
        }
    }
}

