console.log("Sesion JS07 apiFetch");

//El método por default que realiza fetch es Get
fetch('https://reques.in/api/users?page=2')
.then(responseJSON => {return responseJSON.json()})
.then(usuarios => {
    //console.log(usuarios.data[0]);
    for(user of usuarios.data){
        console.log(`id: ${user.id} tiene email ${user.email}`)
    }
});

/*fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/
