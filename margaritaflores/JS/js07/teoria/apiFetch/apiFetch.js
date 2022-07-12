console.log("ApiFetch");

//El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=1')
  .then(responseJSON => {return responseJSON.json()}) //No es necesario return y {} si solo es una instrucción
  .then(usuarios => {
    //console.log(usuarios.data[1])
    for (user of usuarios.data){
        console.log(`${user.id} tiene email ${ user.email}`)
    }
  });

  fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))