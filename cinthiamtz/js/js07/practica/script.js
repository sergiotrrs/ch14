console.log("Prueba Practica");
fetch("https://reqres.in/api/users?page=2")
    .then((responseJSON) => {
        return responseJSON.json();
    })
    //.then(data => mostrarData(valor))
    //.catch(error => console.log(error))


    .then((usuarios) => {
        //console.log(usuarios.data[0]);//llamando solo un elemento
        let datos = "";
        for (let user of usuarios.data) {
            //console.log(`id :  ${user.id} tienen email ${user.email}`) //Para acceceder a los objetos clave:valor
            //console.log(user);
            datos = datos + `<tr><td>${user.id} </td>
                    <td>${user.first_name} </td>
                    <td>${user.last_name} </td>
                    <td>${user.email} </td>
                    <td><img class="avatar" src ="${user.avatar}"> </td>`;
         console.log("DENTRO DEL FOR" + datos)           
        }
        document.getElementById("data").innerHTML = datos;
    });
