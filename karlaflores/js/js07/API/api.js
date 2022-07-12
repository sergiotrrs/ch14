console.log("Hola")

let boton= document.getElementById("pag");
boton.addEventListener("click",pag_1,true);
let cuenta=0;
function contando(){
if(cuenta==1){
    pag_3();
    console.log(cuenta);
} else{
    cuenta= cuenta + 1;
    console.log(cuenta);
}
};

/*setTimeout(() => {
    localStorage.clear(user);
}, 10000);*/


function pag_1() {
    //El método por default que realiza fetch es Get
    fetch('https://reqres.in/api/users?delay=3')
        .then(response => { return response.json() })//Conviete a formato JSON
        .then(usuarios => almacen(usuarios));
}
function pag_2() {
    //El método por default que reslizs fetch es Get
    fetch('https://reqres.in/api/users?page=2')
        .then(response => { return response.json() })//Conviete a formato JSON
        .then(usuarios => almacen(usuarios));
        document.getElementById("pag2").innerHTML;
}
function pag_3() {
    //El método por default que reslizs fetch es Get
    fetch('https://reqres.in/api/users?page=1')
        .then(response => { return response.json() })//Conviete a formato JSON
        .then(usuarios => almacen(usuarios));
        document.getElementById("pag3").innerHTML;
}

function almacen(usuarios) {
    //console.log(usuarios.data[0])
    for (user of usuarios.data) {
        //console.log(`id: ${user.id} tiene email ${user.email}`)
        let indice = user.id;
        localStorage.setItem(indice, JSON.stringify(user));
        
    }
    
    obtener();
    imprime(usuarios);
    quitardatos();
    
}


function quitardatos() {
   // let datosLocales = localStorage.getItem(clave);
    //if (datosLocales != null) {
      //let datosUsuario = JSON.parse(datosLocales);
      for (user of usuarios.data) {
        //console.log(`id: ${user.id} tiene email ${user.email}`)
        let indice = user.id;
        localStorage.setItem(indice, JSON.stringify(user));
        time: Date.now()
        let tiempoActual = Date.now();
      let expiracion = 1 * 60 * 100 + indice.time;
      if (tiempoActual < expiracion) return true;
      else localStorage.removeItem(indice);
      return false;
    }
}

function obtener() {
    //indice=0;
    datos="";
    for (let i = 1; i < localStorage.length; i++) {
        //indice=indice+user.id;
        lista = JSON.parse(localStorage.getItem(i));
        //console.log(lista);
        datos = datos + `<tr><td>${user.id} </td>
        <td>${user.first_name} </td>
                            <td>${user.last_name} </td>
                            <td>${user.email} </td>
                            <td><img class="avatar" src ="${user.avatar}"> </td>`;
    }
}

/*
function obtener () {

    for(let i=1; i<localStorage.length;i++){
        //indice=user.id;
    lista=JSON.parse(localStorage.getItem(i));
    console.log(lista);
    }
}
*/

function imprime(usuarios) {
    let datos = "";
    for (let user of usuarios.data) {
        datos = datos + `<tr><td class="col-2">${user.id} </td>
                            <td class="col-2">${user.first_name} </td>
                            <td class="col-2">${user.last_name} </td>
                            <td class="col-2">${user.email} </td>
                            <td class="col-4"><img  class="rounded-circle" width="160" height="160"class="avatar" src ="${user.avatar}"> </td>`;

    }
    document.getElementById("data").innerHTML=datos;
}




/*function imprimir(usuarios){
    let datos="";
    for (let user of usuarios.data) {
        datos = datos + `<tr><td>${user.id} </td>
                             <td>${user.first_name} </td>
                             <td>${user.lastName} </td>
                             <td>${user.email} </td>
                             <td><img class="avatar" src="${user.avatar}"> </td>`
    }
        document.getElementById("data").innerHTML=datos;
    }

    function imprime(usuarios) {
        let datos = "";
        for (let user of usuarios.data) {
            datos = datos + `<tr><td>${user.id} </td>
                                <td>${user.first_name} </td>
                                <td>${user.last_name} </td>
                                <td>${user.email} </td>
                                <td><img class="avatar" src ="${user.avatar}"> </td>`;
    
        }
        document.getElementById("data").innerHTML=datos;
    }    



/*local storage para guardar info

function guardar_localstorage () {

    let persona = {
        nombre: 
        correo
        cordenadas
    }
};

let nombre ="juan"

locaStorage.setItem("nombre", json.stringify(persona));

let nombre = localStorage.getItem ("nombre");
let persona = localStorage.getItem ("persona")*/