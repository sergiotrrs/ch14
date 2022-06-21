let cursos1 = ["Math", "English", "Programming"]
let cursos2 = ["Geography", "Spanish", "Programming"]




function CursosIguales(array1 = cursos1, array2 = cursos2) {

    let cursos = []

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {

            if (array1[i] == array2[j]) {
                cursos.push(array1[i])
            }

        }

    }

    alert(`los cursos iguales son ${cursos.join(" ")}`)


}
CursosIguales();