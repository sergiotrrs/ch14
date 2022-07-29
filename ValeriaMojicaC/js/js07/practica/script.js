//Link de la pagina uno
let paginaUno = "https://reqres.in/api/users?page=1";
//Link de la pagina dos
let paginaDos = "https://reqres.in/api/users?page=2";
//Link que tarda en cargar
let paginaTres = "https://reqres.in/api/users?delay=3";
//Llave---------Valor
let llave = "datosUsuario";


//Saber si hay datos guardados o no
function solicitud(url,pagina) {
    if(datosGuardados(pagina)) {
        solicitarDatos();
    } else {
        datosA(url,pagina);
    };
};

//Para solicitar datos desde el localStorage
function solicitarDatos(){
    let datosLocales=localStorage.getItem(llave);
    let datosUsuario=JSON.parse(datosLocales);
    localStorage.setItem(llave,JSON.stringify({ userArray:datosUsuario.userArray, time:Date.now()}));
    borrarDatos();
    mostrarDatos(datosUsuario.userArray);
};

//Obtener los datos locales
function datosA(url,pagina){
    fetch(url)
    .then(responseIsJSON =>{return responseIsJSON.json()})
    .then(dataJSON =>{ 
                        if(pagina==3){
                            localStorage.setItem("datosUsuario",JSON.stringify({ userArray:dataJSON.data, time:Date.now()}));
                        }
                        borrarDatos();
                        return mostrarDatos(dataJSON.data);
                    })
    .catch(error => {console.log('Error de Solicitud', error);});        
};

//Calcular el tiempo limite para optener los datos de manera local
function datosGuardados(pagina){
    if(pagina != 3) {
        return false;
    };
   
    let datosLocales = localStorage.getItem(llave);
    if(datosLocales != null){
        let datosUsuario = JSON.parse(datosLocales);
        let tiempo = Date.now();
        let tiempoLimite = 1 * 30 * 1000 + datosUsuario.time; 
        if(tiempo < tiempoLimite){
            return true;
        };
        localStorage.removeItem("datosUsuario");
    };
    return false;
};

//Crea las filas con los datos de usuarios
function mostrarDatos(arrUsers){
    let tablaUsuarios=document.getElementById("tablaUsuarios");
    for(let user of arrUsers){
    let tabla = document.createElement("tr");
    tabla.innerHTML=`
        <td class="id">${user.id}</td>
        <td class="nombre">${user.first_name} ${user.last_name}</td>
        <td class="email">${user.email}</td>
        <td class="avatar"><image class="photoIm" src="${user.avatar}"/></td>
        `;
    tablaUsuarios.appendChild(tabla);
    }   
};


let unoPagina=document.getElementById("paginaUno");
let dosPagina=document.getElementById("paginaDos");
let tresPagina=document.getElementById("paginaTres");
let borrar=document.getElementById("borrar");

unoPagina.addEventListener('click',()=>{document.getElementById("titulo").innerHTML="";solicitud(paginaUno,1);});
dosPagina.addEventListener('click',()=>{document.getElementById("titulo").innerHTML="";solicitud(paginaDos,2);});
tresPagina.addEventListener('click',()=>{document.getElementById("titulo").innerHTML="";solicitud(paginaTres,3);});
borrar.addEventListener('click',()=>{document.getElementById("titulo").innerHTML="";borrarDatos();});

//Borra los datos de la tabla
function borrarDatos(){
    let tablaUsuarios=document.getElementById("tablaUsuarios")
    tablaUsuarios.innerHTML="";
};