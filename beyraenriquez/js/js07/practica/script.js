function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function obtenerUsuarios(pagina) {
    let usuariosLocal =recuperarUsuariosLocalStorage(pagina);
    if (usuariosLocal){
        generarHTMLUsuarios(usuariosLocal);
    }else{
        llamaAPIUsuarios(pagina);
    }
}

function llamaAPIUsuarios(pagina){
    const url = 'https://reqres.in/api/users?page=' + pagina;
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let usuarios = data.data;
            guardarUsuariosLocalStorage(pagina, usuarios);
            generarHTMLUsuarios(usuarios);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function generarHTMLUsuarios(usuarios) {
    
    console.log("Llamando a la funcion")

    const contenedorUsuarios = document.getElementById('usuarios');
    let cabecera = `<table class="table table-responsive table-light" 
    style= background-color:"blue">
    <thead>
        <tr>
            <th>Id</th>    
            <th>Nombre</th>
            <th>Apellido</th>
            <th>e-mail</th>
            <th>Imagen</th>
        </tr>
    </thead>`;
    let result = cabecera;
    for (let user of usuarios) {
        result += ` <tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</th>
            <td><img src="${user.avatar}" style="border-radius: 50%; width:50px" ></td>
            </tr>`;
    }
    result += "</table>";


    contenedorUsuarios.innerHTML = result;
    console.log(usuarios);
}

function guardarUsuariosLocalStorage(pagina, usuarios){
    localStorage.setItem("usuariosLocal2"+pagina, JSON.stringify(usuarios));
}

function recuperarUsuariosLocalStorage(pagina){
    return JSON.parse( localStorage.getItem( 'usuariosLocal2'+pagina));
}