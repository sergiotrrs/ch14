console.log("Sesión J07 apiFetch");

//El método por default que reslizs fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(response =>{ return response.json()})//Conviete a formato JSON
  .then(usuarios =>{
    //console.log(usuarios.data[0])
    for (user of usuarios.data){
        console.log(`id: ${user.id} tiene email ${user.email}`)
    }
});

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))