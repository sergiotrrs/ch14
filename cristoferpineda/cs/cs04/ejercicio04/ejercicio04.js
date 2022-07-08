//Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function conicidencias(a,b) {
  for (let i = 0; i <a.length; i++){
    for (let j = 0; j < b.length; j++){
      if(b[j]== a[i]){
        console.log("Clase repetida: "+b[j]);
        break;
      }
      if(a[i]== b[j]){
        console.log("Clase repetida: "+a[i]);
        break;
      }
    }
  }
  
  
  
}
conicidencias(student1Courses,student2Courses);