/*
Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/    

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


student1Courses.forEach( (valor1, indice1, arreglo1, valor2, indice2, arreglo2) => {
    for(let indice2 = 0;indice2<=student2Courses.length;indice2 ++){
        if(valor1==student2Courses[indice2]){
            console.log(valor1+" es la misma clase que "+ student2Courses[indice2]);
        }    
    }   
    
}); 
