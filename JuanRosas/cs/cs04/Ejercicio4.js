let Courses1 = ['Math', 'English', 'Programming'];
let Courses2 = ['Geography', 'Math', 'Programming'];

for(let i = 0 ; i < Courses1.length ; i++){
    for(let j = 0 ; j < Courses2.length ; j++){
        console.log('i : ' + i + " j :" + j);
        if (Courses1[i] === Courses2[j]) {
            console.log(Courses1[i]);
        }
    }
} 