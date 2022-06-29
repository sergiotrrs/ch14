//Exercise 4//
let student1Courses = ["Math", "English","Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

for (let i = 0; i < student1Courses.length; i++){
    for (let j =0; j <student2Courses.length; j++){
        if(student1Courses[i] == student2Courses[j]){
            console.log ("El mismo curso es: "+student1Courses[i]);
        };
    }
      
}