//Inicializaciones
let indicePag = 1;
let primeraVez = true;
document.getElementById("anterior").disabled = true;
document.getElementById("actual").innerHTML = `Página ${indicePag}`;

for (let i = 1; i < 7; i++) {
    creaFilas(i);
    creaCols(i);
    creaImg(i);
}

cargaDatos("https://reqres.in/api/users?page=1", "Uno");

//Botón anterior
document.getElementById("anterior").addEventListener('click', () => {
    //Disminuir el valor del índice de página
    indicePag -= 1;
    //Actualizar el índice de página y formulario
    document.getElementById("actual").innerHTML = `Página ${indicePag}`;
    if (indicePag <= 1) {
        document.getElementById("anterior").disabled = true;
    }

    switch (indicePag) {
        case 1:
            cargaDatos("https://reqres.in/api/users?page=1", "Uno");
            break;

        case 2:
            cargaDatos("https://reqres.in/api/users?page=2", "Dos")
            break;

    }

    //Habilitar botón siguiente
    if (indicePag <= 2) {
        document.getElementById("siguiente").disabled = false;
    }
});

//Botón siguiente
document.getElementById("siguiente").addEventListener('click', () => {
    //Aumentar el valor del índice de página
    indicePag += 1;
    //Actualizar el índice de página y formulario
    document.getElementById("actual").innerHTML = `Página ${indicePag}`;
    if (indicePag > 2) {
        document.getElementById("siguiente").disabled = true;
    }

    switch (indicePag) {
        /*  case 1:
             cargaDatos("https://reqres.in/api/users?page=1","Uno");
             break; */

        case 2:
            cargaDatos("https://reqres.in/api/users?page=2", "Dos")
            break;

        case 3:

            if (primeraVez) {
                cargaDatos("https://reqres.in/api/users?delay=3", "Tres");
                primeraVez = false;
            } else {
                //Verifica límite de tiempo
                if (localStorage.expPagTres - Date.now() > 0) {
                    //Recupera del localStorage
                    const USUARIOS = JSON.parse(localStorage.getItem("pagTres")); //Se reconvierte a Objeto para leerlo
                    
                    for (user in USUARIOS) {

                        //console.log(`${usuarios.data[user].email} tiene email ${user}`);
                        document.getElementsByClassName("id")[user].innerHTML = USUARIOS[user].id;
                        document.getElementsByClassName("email")[user].innerHTML = USUARIOS[user].email;
                        document.getElementsByClassName("fName")[user].innerHTML = USUARIOS[user].first_name;
                        document.getElementsByClassName("lName")[user].innerHTML = USUARIOS[user].last_name;
                        document.getElementsByClassName("img-avatar")[user].src = USUARIOS[user].avatar;
                    }

                } else {
                    //Recarga los datos
                    cargaDatos("https://reqres.in/api/users?delay=3", "Tres");
                }

                //formulario.elements['nombre'].value = localStorage.getItem("nombre");
            }
            break;
    }

    //Habilitar botón anterior
    if (indicePag > 1) {
        document.getElementById("anterior").disabled = false;
    }
});



/**
 * 
 * @param {string} url de la página
 * @param {string} pagina número de página
 */
function
    cargaDatos(url, pagina) {
    //Carga datos
    fetch(url)
        .then(response => response.json())
        .then(usuarios => {
            //console.log(usuarios.data)
            for (user in usuarios.data) {

                //console.log(`${usuarios.data[user].email} tiene email ${user}`);
                document.getElementsByClassName("id")[user].innerHTML = usuarios.data[user].id;
                document.getElementsByClassName("email")[user].innerHTML = usuarios.data[user].email;
                document.getElementsByClassName("fName")[user].innerHTML = usuarios.data[user].first_name;
                document.getElementsByClassName("lName")[user].innerHTML = usuarios.data[user].last_name;
                document.getElementsByClassName("img-avatar")[user].src = usuarios.data[user].avatar;
            }

            //Guarda los datos
            limite = Date.now() + 1000 * 60 + 3
            localStorage.setItem(`pag${pagina}`, JSON.stringify(usuarios.data));
            localStorage.setItem(`expPag${pagina}`, limite);  //Se ingresa el tiempo de expiración: un minuto
        });
}

/**
 * Crea una fila con el índice indicado
 * @param {*} indiceFila A partir de 2
 */
function creaFilas(indiceFila) {
    const fila = document.createElement("tr");
    const filaCreada = document.getElementsByTagName("tbody")[0].appendChild(fila); //El elemento 0 del arreglo de elementos tbody
    filaCreada.id = `r${indiceFila}`
}

/**
 * Crea las columnas con clases para una fila dada
 * @param {*} indiceFila A partir de 1 (la primer tr está thead)
 */
function creaCols(indiceFila) {
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
function creaImg(indiceFila) {
    document.getElementsByClassName("avatar")[indiceFila - 1].appendChild(document.createElement("img")).className = "img-avatar";
    //Para que coincida el valor del índiceFila con creaFila y creaCols

}

/**
 * A resolver:
 * 1. Mostrar sólo un determinado número de elementos
 * 2. Ocupar botones para avanzar el "mostrador"
 * 3. Con el "regreso", mostrar elementos guardados en localStorage
 */