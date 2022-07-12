console.log("Sesion JS07 apiFetch");

fetch('https://reqres.in/api/users?page=1')
    .then(responseJSON => { return responseJSON.json() })
    .then(users => {
        //console.log(usuarios.data[0])
        for (user of users.data) {
            console.log(`id: ${user.id} tiene email ${user.email}`)
        }
    });

/*fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))*/

