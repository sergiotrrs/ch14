console.log("API FETCH JS07")


//El método por default que realiza fetch es GET
fetch('https://reqres.in/api/users?page=2')
  .then(response => {return response.json()})
  .then(usuarios => {
    //console.log(usuarios.data[0])
    for (user of usuarios.data){
        document.write(`ID ${user.id} tiene email ${ user.email}`)
    }
  });


/*   fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */