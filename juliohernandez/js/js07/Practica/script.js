for(let i=1;i<7;i++){
    creaFilas(i);
    creaCols(i);
    creaImg(i);
}


 //El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?delay=3')
  .then(response => response.json())
  .then(usuarios => {
    //console.log(usuarios.data)
     for (user in usuarios.data){
        
        //console.log(`${usuarios.data[user].email} tiene email ${user}`);
        document.getElementsByClassName("id")[user].innerHTML = usuarios.data[user].id;
        document.getElementsByClassName("email")[user].innerHTML = usuarios.data[user].email;
        document.getElementsByClassName("fName")[user].innerHTML = usuarios.data[user].first_name;
        document.getElementsByClassName("lName")[user].innerHTML = usuarios.data[user].last_name;
        document.getElementsByClassName("img-avatar")[user].src = usuarios.data[user].avatar;
        document.getElementsByClassName("img-avatar")[user].style = "border-radius: 50%"
    } 
});

/**
 * Crea una fila con el índice indicado
 * @param {*} indiceFila A partir de 2
 */
function creaFilas(indiceFila){
    const fila = document.createElement("tr");
    const filaCreada = document.getElementsByTagName("tbody")[0].appendChild(fila); //El elemento 0 del arreglo de elementos tbody
    filaCreada.id = `r${indiceFila}`
}

/**
 * Crea las columnas con clases para una fila dada
 * @param {*} indiceFila A partir de 1 (la primer tr está thead)
 */
function creaCols(indiceFila){
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "id";
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "email";
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "fName";
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "lName";
    document.getElementsByTagName("tr")[indiceFila].appendChild(document.createElement("td")).className = "avatar";
}

/*
 * Crea elemento img con clase img-avatar dentro del elemento de clase avatar 
 * @param {*} indiceFila Iniciando desde el 1
 */
function creaImg(indiceFila){
    document.getElementsByClassName("avatar")[indiceFila-1].appendChild(document.createElement("img")).className = "img-avatar";
   //Para que coincida el valor del índiceFila con creaFila y creaCols
    
}

/**
 * A resolver:
 * 1. Mostrar sólo un determinado número de elementos
 * 2. Ocupar botones para avanzar el "mostrador"
 * 3. Con el "regreso", mostrar elementos guardados en localStorage
 */