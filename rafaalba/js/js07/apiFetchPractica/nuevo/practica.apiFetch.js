console.log("Practica datos de usuario Api Fetch");
// https://reqres.in/api/users?page=2
// 

//Boton dinámico
let btn = document.getElementById("usuarios");
btn.addEventListener("click", pag1, true);

let btn2 = document.getElementById("usuarios2");
btn2.addEventListener("click", pag2, true);

// let btn3 = document.getElementById("usuarios3");
// btn3.addEventListener("click", pag3, true);

let cuenta = 0;
function contador() {
    if (cuenta == 0) {
        cuenta = 1;
        cargarUsuarios();
        tiempoFinal();
        console.log(cuenta);
    } else {
        cuenta++;
        recuperarDatos();
        console.log(cuenta);
    }
}

function pag1() {
    return link('https://reqres.in/api/users?delay=3');
}

function pag2() {
    return link('https://reqres.in/api/users?page=2');
}

// function pag3() {
//     return link('https://reqres.in/api/users?page=1');
// }

function link(url) {
    fetch(url)//'https://reqres.in/api/users?delay=3'
        .then(responseJSON => { 
            return responseJSON.json() 
        })
        .then(usuarios => guardarDatos(usuarios));
}

function guardarDatos(usuarios) {
    //console.log(usuarios.data[0])
    for (user of usuarios.data) {
        //console.log(`id: ${user.id} tiene email ${user.email}`)
        let indice = user.id;
        localStorage.setItem(indice, JSON.stringify(user));
    }
    recuperarDatos();
    imprimir(usuarios);
}

function recuperarDatos() {
    let datos = "";
    for (let i = 1; i <= localStorage.length; i++) { //i=i+1; i=+; datos = datos+1
        datos = JSON.parse(localStorage.getItem(i));// i = a la llave indice
        console.log(datos);
        datos = datos + 
        `<tr><td>${user.id} </td>
        <td>${user.first_name} </td>
        <td>${user.last_name} </td>
        <td>${user.email} </td>
        <td><img class="avatar" src ="${user.avatar}"> </td>`;
    }
    document.getElementById("data").innerHTML = datos;
}

function imprimir(usuarios) {
    let datos = "";
    for (let user of usuarios.data) {
        console.log(user);
        datos = datos + `<tr><td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td>`;
    }
    document.getElementById("data").innerHTML = datos;
}

function tiempoFinal() {
    let tiempoTermina = Date.now()+1000*2;
    localStorage.setItem("expira", JSON.stringify({expira:tiempoTermina}));
}

function borrarStorage() {
    tiempoFinal();
    if (JSON.parse(localStorage.getItem("expira")).expira < Date.now()){
        localStorage.clear();
        console.log("Se borraron los datos");
    }else{
        console.log("No se borraron los datos");
    }
}