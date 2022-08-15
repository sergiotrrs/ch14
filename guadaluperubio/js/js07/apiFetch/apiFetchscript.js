console.log ("sesion apifetch");

//El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON =>{ return responseJSON.json()} )
  .then(usurarios => {
    // console.log(usurarios.data[0])
    
    for (user of usurarios.data){      //user hace referencia a cada index
      console.log(` id: ${user.id} tiene email ${user.email}`)
    }
  }); 

  // fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))