//Cuarta prueba exitosa

console.log("Prueba Practica");

let btn = document.getElementById("pagina1")
btn.addEventListener('click', pagina1, true)


let btn2 = document.getElementById("pagina2")
btn2.addEventListener('click', pagina2, true)

let btn3 = document.getElementById("pagina3")
btn3.addEventListener('click', conta3, true)


contador3 = 0;
function conta3() {
    if (contador3 == 0) {
        contador3 = 1
        pagina3();
    }
    else {
        contador3 = contador3 + 1

        existentes();
        console.log("prueba" + existentes())
    }

}
function pagina1() {
    return api("https://reqres.in/api/users?page=1");
}

function pagina2() {
    return api("https://reqres.in/api/users?page=2");
}


function pagina3() {
    return api("https://reqres.in/api/users?delay=3");
}


function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => guardar(usuario))
}

function guardar(usuario) {
    for (let user of usuario.data) {
        let llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
    }
    
let dayData= Date.now();
let expiracion = dayData
localStorage.setItem("tiempo", JSON.stringify({
    "expiracion" : expiracion,
    "ingreso":dayData

}));
if(Date.now()<=expiracion){
    recuperar(usuario);
    console.log("if)")
}
else{
   for(i=1;i<=6;i++){
    localStorage.removeItem(i)
    console.log("else")
   }
}

}


function recuperar(usuario) {
    console.log(usuario)
    let datos = "";
    for (let user of usuario.data) {
        console.log(user);
        datos = datos + `<tr><td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td>`;
    }
    document.getElementById("data").innerHTML = datos;    
}


function existentes() {
        datos = "";
        
    for (let i = 1; i < localStorage.length; i++) {
        lista = JSON.parse(localStorage.getItem(i));
        datos = datos + `<tr><td>${lista.id} </td>
                            <td>${lista.first_name} </td>
                            <td>${lista.last_name} </td>
                            <td>${lista.email} </td>
                            <td><img class="avatar" src ="${lista.avatar}"> </td>`;
        console.log(lista.last_name)
    }
    document.getElementById("data").innerHTML = datos;
}















//Cuarta prueba exitosa

/* console.log("Prueba Practica");

let btn = document.getElementById("pagina1")
btn.addEventListener('click', pagina1, true)


let btn2 = document.getElementById("pagina2")
btn2.addEventListener('click', pagina2, true)

let btn3 = document.getElementById("pagina3")
btn3.addEventListener('click', conta3, true)


contador3 = 0;
function conta3() {
    if (contador3 == 0) {
        contador3 = 1
        pagina3();
    }
    else {
        contador3 = contador3 + 1

        existentes();
        console.log("prueba" + existentes())

    }

}
function pagina1() {
    return api("https://reqres.in/api/users?page=1");
}

function pagina2() {
    return api("https://reqres.in/api/users?page=2");
}


function pagina3() {
    return api("https://reqres.in/api/users?delay=3");
}


function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => guardar(usuario))
}

function guardar(usuario) {
    for (let user of usuario.data) {
        let llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
    }
    recuperar(usuario);
}


function recuperar(usuario) {
    console.log(usuario)
    let datos = "";
    for (let user of usuario.data) {
        console.log(user);
        datos = datos + `<tr><td>${user.id} </td>
                            <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td>`;
    }
    document.getElementById("data").innerHTML = datos;
}


function existentes() {
    datos = "";
    for (let i = 1; i < localStorage.length; i++) {
        lista = JSON.parse(localStorage.getItem(i));
        datos = datos + `<tr><td>${lista.id} </td>
                            <td>${lista.first_name} </td>
                            <td>${lista.last_name} </td>
                            <td>${lista.email} </td>
                            <td><img class="avatar" src ="${lista.avatar}"> </td>`;
        console.log(lista.last_name)
    }
    document.getElementById("data").innerHTML = datos;
}
 */