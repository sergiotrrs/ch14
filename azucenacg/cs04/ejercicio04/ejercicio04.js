/*Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console.*/

let student1Courses=['Math', 'English', 'Programming'];
let student2Courses=['Geography', 'Spanish', 'Programming'];

/*En este código cuando i=0 y la función boleana se cumple, se va a meter al for 
y ese for va a repetirse desde j=0 hasta j<length, por lo que ese for le va a dar a j
el valor de 0, 1 y 2 mientras el i sigue siendo =0*/

function com(a,b) {

for (i=0;i<a.length;i++){

    
       for (j=0;j<b.length;j++){
           
            if (a[i]==b[j]){
                
            console.log("The course: "+ a[i]+ " of the student 1, matches the course: "+ b[j]+ " of the student 2"); 
            alert ("The course: "+ a[i]+ " of the student 1, matches the course: "+ b[j]+ " of the student 2");
            
            }
        
        }     

}
}


com(student1Courses, student2Courses);
