/* //El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(usuarios => {
    //console.log(usuarios.data[0])
    for (user of usuarios.data){
        
        console.log(`${user.id} tiene email ${user.email}`);
    }
    document.getElementById("r1")[0]=usuarios.data[0].id;
}); */

for(let i=2;i<=4;i++){
    creaFilas(i);
    creaCols(i);
}

/**
 * Crea una fila con el índice indicado
 * @param {*} indiceFila A partir de 2
 */
function creaFilas(indiceFila){
    const fila = document.createElement("tr");
    const filaCreada = document.getElementsByTagName("tbody")[0].appendChild(fila);
    filaCreada.id = `r${indiceFila}`
}

/**
 * Crea las columnas con clases para una fila dada
 * @param {*} indiceFila A partir de 2
 */
function creaCols(indiceFila){
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "id"
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "email"
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "fName"
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "lName"
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "avatar"
}