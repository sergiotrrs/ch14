//Declaraciones de variable 
//guardando en una nueva variable constate las url
const link1 = "https://reqres.in/api/users?page=1";
const link2 = "https://reqres.in/api/users?page=2";
const link3 = "https://reqres.in/api/users?delay=3";

//Asiendo la opccion onclick desde java
let pulsa = document.getElementById("pagina1")
pulsa.addEventListener('click', pagina1, true)

let intr = document.getElementById("pagina2")
intr.addEventListener('click', pagina2, true)

let btn = document.getElementById("pagina3")
btn.addEventListener('click', conta, true)

//verificamos si hay valores en la local storage
function conta() {
    if (JSON.parse(localStorage.getItem("expiration"))) {
        borrarStorage();        
    }
    else {
        pagina3();
        tiempoFin();
    }
   
}

//Obtenemos las ligas que van a entrar a la api
function pagina1() {
    return api(link1);
}

function pagina2() {
    return api(link2);
}


function pagina3() {
    return api(link3);
}

//Funcion promesa de api fetch
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => guardar(usuario))
}

//guardamos valores en local storage
function guardar(usuario) {
    for (let user of usuario.data) {
        let llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
    }
    imprime(usuario);
}

//imprime valoresde de local storage
function imprime(usuario) {
    let datos = "";
    for (let user of usuario.data) {
        datos = datos + `<tr><td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td></tr>`;
    }
    document.getElementById("data").innerHTML = datos;

}

//Obtenemos valores de local storage
function existentes() {
    datos = "";
    for (let i = 1; i < localStorage.length; i++) {
        lista = JSON.parse(localStorage.getItem(i));
        datos = datos + `<tr><td>${lista.id} </td>
        <td>${lista.first_name} </td>
        <td>${lista.last_name} </td>
        <td>${lista.email} </td>
        <td><img class="avatar" src ="${lista.avatar}"> </td></tr>`;
    }          
    document.getElementById("data").innerHTML = datos;
  }


function borrarStorage() {
    if (JSON.parse(localStorage.getItem("expiration")).expiration < Date.now()) {
        localStorage.clear()
        console.log("se borró la info");
        tiempoFin();
        api("https://reqres.in/api/users?delay=3");
    } else {
        existentes();
    }
}


function tiempoFin() {
    let tiempoExpira = Date.now() + 1000 * 10;
    localStorage.setItem("expiration", JSON.stringify({ expiration: tiempoExpira }));
}

