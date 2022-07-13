console.log("Sesion JS07 api Fetech")

//El metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON => { return responseJSON.json()} )
  .then(usuarios =>{
    //console.log(ususarios.data[0])
    for (user of usuarios.data) {
        console.log(`id: ${user.id} tiene email ${user.email}`)

    }
})

/* fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */


