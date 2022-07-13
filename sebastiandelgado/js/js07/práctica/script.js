console.log("Prueba de conexión");


function pag1() {
    return api("https://reqres.in/api/users?page=1");
}
function pag2() {
    return api("https://reqres.in/api/users?page=2");
}
function pag3() {
    return api("https://reqres.in/api/users?delay3");
}
//****************** */
function revisar() {
    if (JSON.parse(localStorage.getItem("Expiracion")).expiration < Date.now()) {
        localStorage.clear();               //borra los datos   
        expiracion();                       // nvo tiempo de cache
        api("https://reqres.in/api/users?delay=3");
        console.log("tiempo asignado" + JSON.parse(localStorage.getItem("Expiracion")).expiration);
    }
    datoExist();
}

function expiracion() {
    localStorage.setItem("Expiracion", JSON.stringify({
        expiration: Date.now() + 1000*3,
    }));
}
//********* */
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => traerDato(usuario))
}

function guardar(usuario) {
    for (let user of usuario.data) {
        let llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
    }
    traerDato(usuario);
}

function traerDato(usuario) {
    console.log(usuario)
    let datos = "";
    for (let user of usuario.data) {
        //console.log(user);
        console.log("**************");
        console.log(user);


        datos = datos + `<tr> <td>${user.id} </td>
                        <td> ${user.first_name}    </td>
                        <td> ${user.last_name} </td>
                        <td> ${user.email} </td>
                        <td> <img class="avatar" src='${user.avatar}' style="border-radius: 55px" > </td>
                        </tr>`
        document.getElementById('informacion').innerHTML = datos;
    }
}
function datoExist() {
    datos = "";
    for (let i = 1; i < localStorage.length; i++) {
        lista = JSON.parse(localStorage.getItem(i));
        datos = datos + `<div class="col">
        <div class="card h-100">
          <img src="${lista.avatar}" class="avatar">
          <div class="card-body">
            <h5 class="card-title">${lista.first_name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${lista.last_name}</li>
              <li class="list-group-item">${lista.email}</li>
              <li class="list-group-item">ID  ${lista.id}</li>
            </ul>
          </div>
        </div>
        </div>`;
    }
    document.getElementById("data").innerHTML = datos;
}
