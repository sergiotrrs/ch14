//La siguiente función revisa si un programa se repite en otro
function checkSameValue(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j=0; j < array2.length; j++) {
            if (array2[j] == array1[i]) {
                console.log("La materia", array2[j], "también se ve en", array1[i]);
            }
        }
    }
}

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

checkSameValue(student1Courses, student2Courses);
