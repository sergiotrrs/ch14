console.log("Sesión JS07 apiFetch")
// el método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios => {
    //console.log(usuarios.data)usuarios.data[0]
    for (user of usuarios.data){
        console.log(`El ${user.id} tiene email ${user.email}`)
    }
  });

/*  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/
            
