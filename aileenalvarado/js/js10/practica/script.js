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
    const ul = document.getElementById('authors');
    const url = 'https://reqres.in/api/users?page=' + pagina;
    console.log("Llamando a la funcion")

    const contenedorUsuarios = document.getElementById('usuarios');
    let cabecera = `<table class="table table-dark table-hover">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo electrónico</th>
            <th>Avatar</th>
        </tr>
    </thead>`;


    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let usuarios = data.data;
            let result = cabecera;
            for (let user of data.data) {
                result += ` <tr>
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
        })
        .catch(function (error) {
            console.log(error);
        });
}

//esta funcion es la que va a generar el HTML para pintar los usuarios
function generarHTMLUsuarios(usuarios) {
    //let usuarios = data.data;
    let result = cabecera;
    for (let user of data.data) {
        result += ` <tr>
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