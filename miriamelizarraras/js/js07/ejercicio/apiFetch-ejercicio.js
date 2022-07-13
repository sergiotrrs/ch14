console.log("Sesión JS07 apiFetch");

let btn = document.getElementById("usuarios");
btn.addEventListener("click", pag1, true);

let btn2 = document.getElementById("usuarios2");
btn2.addEventListener("click", pag2, true);

function funcionAsociadaBoton() {
  history.go(-1);
}

let cuenta = 0;
function contador() {
  if (cuenta == 0) {
    cuenta = 1;
    cargarUsuarios();
    tiempoFinal();
  } else {
    if (localStorage.length > 0) {
      borrarStorage();
    } else {
      recuperarDatos();
    }
  }
}

function pag1() {
  return link("https://reqres.in/api/users?delay=3");
}

function pag2() {
  return link("https://reqres.in/api/users?page=2");
}

function link(url) {
  fetch(url)
    .then((responseJSON) => {
      return responseJSON.json();
    })
    .then((usuarios) => guardarDatos(usuarios));
}

function guardarDatos(usuarios) {
  //console.log(usuarios.data[0])
  for (user of usuarios.data) {
    //console.log(`id: ${user.id} tiene email ${user.email}`)
    let key = user.id;
    localStorage.setItem(key, JSON.stringify(user));
  }
  recuperarDatos();
  imprimir(usuarios);
}

function recuperarDatos() {
  let datos = "";
  for (let i = 1; i <= localStorage.length; i++) {
    //i= i+1; i=+; datos = datos+1
    lista = JSON.parse(localStorage.getItem(i)); //la i = a la llave (key)
    console.log(lista);
    datos =
      datos +
      `<tr><td>${lista.id} </td>
                        <td>${lista.first_name} </td>
                        <td>${lista.last_name} </td>
                        <td>${lista.email} </td>
                        <td><img class="avatar" src ="${lista.avatar}"> </td>`;
  }
  document.getElementById("data").innerHTML = datos;
}

function imprimir(usuarios) {
  let datos = "";
  for (let user of usuarios.data) {
    console.log(user);
    datos =
      datos +
      `<tr><td>${user.id} </td>
                        <td>${user.first_name} </td>
                        <td>${user.last_name} </td>
                        <td>${user.email} </td>
                        <td><img class="avatar" src ="${user.avatar}"> </td>`;
  }
  document.getElementById("data").innerHTML = datos;
}

function tiempoFinal() {
  let tiempoExpira = Date.now() + 1000 * 10;
  localStorage.setItem(
    "expiracion", //expiración: es la llave que nos permite acceder a expirar el tiempo
    JSON.stringify({ expiracion: tiempoExpira })
  );
}

function borrarStorage() {
  tiempoFinal();
  if (JSON.parse(localStorage.getItem("expiracion")).expiration < Date.now()) {
    localStorage.clear();
    tiempoFinal();
    link("https://reqres.in/api/users?delay=3");
  } else {
    recuperarDatos();
  }
}
