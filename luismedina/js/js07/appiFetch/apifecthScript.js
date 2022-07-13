console.log("Sesion JS07 apifetch");

//El metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
    .then(response => { return response.json() })
    .then(usuarios => {
        console.log(usuarios.data)//el .data es por el id que se tiene en la api 
        // console.log(usuarios.data[0]);
        for (user of usuarios.data) {
            console.log(`id: ${user.id} Tiene email ${user.email}`);
        }

    });

    // fetch('https://fakestoreapi.com/products/1')
    // .then(res=>res.json())
    // .then(json=>console.log(json))


