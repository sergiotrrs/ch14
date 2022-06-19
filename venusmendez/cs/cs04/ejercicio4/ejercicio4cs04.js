console.log("Código");
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function compara(Arr1,Arr2){
    let n1 = Arr1.length;
    let n2 = Arr2.length;
    for(let i=0;i<n1;i++){
        for(let j=0;j<n2;j++){
            if(Arr1[i]==Arr2[j]){
                console.log(Arr1[i]);
            }
        }
    }
}

compara(student1Courses,student2Courses);