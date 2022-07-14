console.log("Sesión Api-Fetch");
//El método por default que hace fetch es get
fetch('https://reqres.in/api/users?page=1')
  //.then(response => response.json()) 
  // como es solo una instrucción no es necesario poner corchetes ni return
  .then(responseJSON => { return responseJSON.json()}) 
  .then(usuarios => {
    // console.log(usuarios.data[0])
    for (user of usuarios.data ){ // user va a obtener cada objeto del arreglo usuarios.data 
        console.log(`Id ${user.id} tiene email ${user.email}`);
    }
});


// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json));
