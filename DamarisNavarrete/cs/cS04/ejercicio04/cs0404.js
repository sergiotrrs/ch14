
let estudiantesCurso1=["Matematicas", "Ingles","Progrmacion"];
let estudiantesCurso2=["Geografia", "Español", "Programacion"];
//crea un programa que recorra 2 matrices; si hay algun curso en comun, imprimelo en la consola

for (let i=0; i < estudiantesCurso1.lenght; i++){
    if(estudiantesCurso2.includes(estudiantesCurso1[i])){
     console.log("Las coincidencias son" + estudiantesCurso1 [i])   
    }
    
}

    
