//forEach
const cohortes = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

// Con for-in

for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}

for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}

for (let fila of cohortes){
    for (let columna of fila)console.log(columna)
}
