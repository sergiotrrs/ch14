console.log("Sesion JS07 apiFetch");

//el metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON =>{return responseJSON.json()})
  .then(usuarios => {
   // console.log(usuarios.data [0])});//Usuarios.data[0] muestra los datos de los usuarios en el indice especificado.
  for (user of usuarios.data){
    console.log(`${user.id} tiene email ${user.email}`)
  }
});

// este es otra API
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))