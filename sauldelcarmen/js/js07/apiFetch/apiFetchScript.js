console.log('Api Fetch');

//El metodo por default que realiza la peticion es GET
fetch('https://reqres.in/api/users?page=2')
  .then(response => {return response.json()})
  .then(usuarios => {
    console.log(usuarios.data[0])
   for (user of usuarios.data) {
	 console.log(`id ${user.id} tiene correo ${user.email}`)
   }
});

/*fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/
