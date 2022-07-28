const link1 = "https://reqres.in/api/users?page=1";
const link2 = "https://reqres.in/api/users?page=2";
const link3 = "https://reqres.in/api/users?delay=3";


console.log("Sesión JS07 spiFetch");

let btn = document.getElementById("usuarios");
btn.addEventListener("click", pagina1, true);

let btn2 = document.getElementById("usuarios2");
btn2.addEventListener("click", pagina2, true);

let btn3 = document.getElementById("usuarios3");
btn3.addEventListener("click", contador, true);


function contador() {
    if (localStorage.getItem("expira")) {
        borrarStorage();
    } else {
        pagina3();
        tiempoExpira();
    }
}

function pagina1() {
    return liga(link1);
}

function pagina2() {
    return liga(link2);
}

function pagina3() {
    return liga(link3);
}


function liga(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then((usuarios) => guardarDatos(usuarios));
}

function guardarDatos(usuarios) {
    for (user of usuarios.data) {
        let key = user.id;
        localStorage.setItem(key, JSON.stringify(user));
    }
    recuperarDatos();
    imprimir(usuarios);
}


function recuperarDatos() {
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



function imprimir(usuarios) {
    let datos = "";
    for (let user of usuarios.data) {
        // console.log(user);
        datos = datos +
            `<tr><td>${user.id} </td>
            <td>${user.first_name} </td>
            <td>${user.last_name} </td>
            <td>${user.email} </td>
            <td><img class="avatar" src ="${user.avatar}"> </td></tr>`;
    }
    document.getElementById("data").innerHTML = datos;
}


function tiempoExpira() {
    let tiempoAcaba = Date.now() + 1000*60;
    localStorage.setItem("expira", JSON.stringify({ expira: tiempoAcaba }));
}

function borrarStorage() {
    if (JSON.parse(localStorage.getItem("expira")).expira < Date.now()) {
        localStorage.clear();
        console.log("Se ha borrado la info");
        tiempoExpira();
        liga("https://reqres.in/api/users?delay=3")
    } else {
        recuperarDatos();
        console.log("no se borro nada porque la info aun anda viva");

    }
}

