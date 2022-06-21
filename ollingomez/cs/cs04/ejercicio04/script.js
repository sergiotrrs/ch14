/**Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
**/
//Declaro mis arreglos y mis variables
let student1Courses = ['Math','Programming','English'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let titulo;

//Comparo arreglos y busco la posición en donde se encuentra la palabara que es igual 
for(let i=0; i<student1Courses.length; i++){
    for(let j=0; j<student2Courses.length; j++){
        if(student1Courses[i]===student2Courses[j]){
            console.log(student1Courses[i]);
            titulo=alert("La palabra que se repite es: " + student1Courses[i]);
            titulo=alert(`Se encuentra en el primer arreglo en la posición ${i+1}`);
            titulo=alert(`Se en cuentra en el segundo arreglo en la posición ${j+1}`);
        }        
    }
}

