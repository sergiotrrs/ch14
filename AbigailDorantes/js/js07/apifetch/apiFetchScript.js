console.log("Sesion JS07 apiFetch 07/07/22")

fetch('https://reqres.in/api/users?page=2')
.then(responseJSON =>{return responseJSON.json()})
.then(usuarios =>{ //console.log(usuarios.data[0]
    for(user of usuarios.data){
        console.log(`id: ${user.id} tiene email ${user.email}`)
    }
});

/* fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */