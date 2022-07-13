console.log("hola")
//Declaraciones de variable 
const URL1 = "https://reqres.in/api/users?page=1";
const URL2 = "https://reqres.in/api/users?page=2";
const URL3 = "https://reqres.in/api/users?delay=3";

//Se realiza un evento y se le acciona a los botones
let btn = document.getElementById("pagina1");
btn.addEventListener('click', pagina1, true);
let btn2 = document.getElementById("pagina2");
btn2.addEventListener('click', pagina2, true);
let btn3 = document.getElementById("pagina3");
btn3.addEventListener('click', pagina3, true);

function pagina1() {
    return api(URL1);
}

function pagina2() {
    return api(URL2);
}

function pagina3() {    
        if (localStorage.getItem('Expiracion')) {
            console.log("hay tiempo de expiracion: " + JSON.parse(localStorage.getItem("Expiracion")).expiration +" VS " +Date.now());            
            revisar();
        }
        else {
            api(URL3);
            expiracion();
        }   
}
/**
 * Función que revisa si esta dentro del tiempo de expiración. 
 * Si rebaso el tiempo de expiracion entonces se borra la informacion el localStorage,
 *     se incializa un nuevo tiempo de expiración  y se llama a mandar al información desde la AP
 * No revasa el tiempo de expiración entonces podemos pedir la información desde la LocalStorage[ existente();]
 */
function revisar() {
    if (JSON.parse(localStorage.getItem("Expiracion")).expiration < Date.now()) {
        localStorage.clear();//borra los datos en local      
        expiracion(); //se determina un nuevo tiempo de cache
        api("https://reqres.in/api/users?delay=3");
        console.log("NUEVO TIEMPO" + JSON.parse(localStorage.getItem("Expiracion")).expiration);
    }
    existentes();
}

/**
 * Determina el tiempo de expiración y lo guarda en la localStorage
 */
function expiracion() {
    localStorage.setItem("Expiracion", JSON.stringify({
        expiration: Date.now() + 60000,
    }));
}

/**
 * Funcion que que manda a llamar a la api para obtener la información. 
 * La entrada de la variable es una url de la api  
 */
function api(url) {
    fetch(url)
        .then((responseJSON) => {
            return responseJSON.json();
        })
        .then(usuario => guardar(usuario))
}
/** 
 * La información extraida de la api se gurdar en la localStorage
 */ 
function guardar(usuario) {
    for (let user of usuario.data) {
        let llave = JSON.stringify(user.id)
        localStorage.setItem(llave, JSON.stringify(user));
    }
    recuperar(usuario);
}

/**
 * Funcion que lee los datos de la localStorage y las coloca en el HTML
 */
function recuperar(usuario) {
    let datos = "";
    for (let user of usuario.data) {

        datos = datos + `<div class="col">
        <div class="card h-100">
          <img src="${user.avatar}" class="avatar">
          <div class="card-body">
            <h5 class="card-title">${user.first_name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${user.last_name}</li>
              <li class="list-group-item">${user.email}</li>
              <li class="list-group-item">ID  ${user.id}</li>
            </ul>
          </div>
        </div>
        </div>`;
    }
    document.getElementById("data").innerHTML = datos;
}

/**
 * Funcion que lee los datos guardados en la cache
 */

function existentes() {
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





















