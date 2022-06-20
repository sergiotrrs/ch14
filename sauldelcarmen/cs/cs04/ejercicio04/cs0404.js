    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];
function cursosiguales(array1 = student1Courses, array2 = student2Courses) {
    
    let cursos = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {

            if (array1[i] == array2[j]) {
                cursos.push(array1[i])
            }

        }

    }

    console.log(`los cursos iguales son ${cursos.join(" ")}`)


}
cursosiguales();
