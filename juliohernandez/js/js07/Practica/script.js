for(let i=2;i<=7;i++){
    creaFilas(i);
    creaCols(i);
}

 //El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(usuarios => {
    //console.log(usuarios.data)
     for (user in usuarios.data){
        
        //console.log(`${usuarios.data[user].email} tiene email ${user}`);
        document.getElementsByClassName("id")[user].innerHTML = usuarios.data[user].id;
        document.getElementsByClassName("email")[user].innerHTML = usuarios.data[user].email;
        document.getElementsByClassName("fName")[user].innerHTML = usuarios.data[user].first_name;
        document.getElementsByClassName("lName")[user].innerHTML = usuarios.data[user].last_name;
        document.getElementsByClassName("avatar")[user].innerHTML = usuarios.data[user].avatar;
    } 
});

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