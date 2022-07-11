console.log("Prueba de conexión");


function pagina1(){
    return api("https://reqres.in/api/users?page=1");
}
function pagina2(){
    return api("https://reqres.in/api/users?page=2");
}
function pagina3(){
    return api("https://reqres.in/api/users?delay3");
}

function api(url){
    fetch(url)
    .then((responseJSON) => {
        return responseJSON.json();
    })
    .then (usuario => traerDato(usuario))
}

function traerDato(usuario){
    console.log(usuario)
    let datos ="";
    for (let user of usuario.data){
        //console.log(user);
        console.log("**************");
        console.log(user);
        datos = datos + `<tr> <td>${user.id} </td>
                        <td> ${user.first_name} </td>
                        <td> ${user.lastname} </td>
                        <td> ${user.email} </td>
                        <td> <img class="avatar" src="${user.avarat} style="border-radius: 30px"> </td>
                        </tr>`;

    }
}