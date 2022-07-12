//Funcion Principal
function obtenerUsuarios(pagina) {
    let usuariosLocal =recuperarUsuariosLocalStorage(pagina);
    //verificamos si existe en localStorage los usuarios
    if (usuariosLocal){ //Verificamos si usuario local tiene valor
        //Esta funcion genera el html de los usuarios
        generarHTMLUsuarios(usuariosLocal);
    }else{
        llamaAPIUsuarios(pagina);
    }
}

//Llamada a la url de los usuarios
function llamaAPIUsuarios(pagina){
    const url = 'https://reqres.in/api/users?page=' + pagina; 

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) { 
            //Si la respuesta fue exitosa aqui 
            let usuarios = data.data; //Obtenemos la lista de usuarios
            guardarUsuariosLocalStorage(pagina, usuarios);
            generarHTMLUsuarios(usuarios);
        })
        .catch(function (error) {
            console.log(error);
        });
}


//esta funcion es la que va a generar el HTML para pintar los usuarios
function generarHTMLUsuarios(usuarios) {
    
    //Este es ub div en donde guardaremos el html que se genere
    const contenedorUsuarios = document.getElementById('usuarios');
    let cabecera = `<table class="table table-dark table-hover ">
    <thead>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th> 
            <th>E-mail</th>
            <th>Avatar</th>
        </tr>
    </thead>`;
    let result = cabecera; 
    //Iteramos c/u de los usuarios y generamos un table row
    for (let user of usuarios) {
        result += ` <tr> 
                <td>${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td><a href="mailto:${user.email}">${user.email}</a></td>
                <td><img src="${user.avatar}" style="border-radius: 50%; width:50px" ></td>
                </tr>`;
    }
    result += "</table>";

    //asignamos la tabla en el div
    contenedorUsuarios.innerHTML = result;
    console.log(usuarios);
}

function guardarUsuariosLocalStorage(pagina, usuarios){
    let expiracion= new Date().getTime() + 10000; 
    //Guardamos un nuevo LocalStorage por pagina, calculando la fecha de expiracion en +10 segundos
    localStorage.setItem("expiracion"+pagina, expiracion);
    //Guardamos JSON como string en el local storage
    localStorage.setItem("usuariosLocal2"+pagina, JSON.stringify(usuarios));
}
function recuperarUsuariosLocalStorage(pagina){
    let expiracion=localStorage.getItem('expiracion'+pagina);

    if (new Date().getTime() > expiracion) {
		 //Removemos los usuarios de local Storage por que ya expiro el tiempo
		localStorage.removeItem("usuariosLocal2"+pagina)
		return null
	}else{
        //Convertimos de String a JSON
        return JSON.parse( localStorage.getItem( 'usuariosLocal2'+pagina));
    }  

} 

