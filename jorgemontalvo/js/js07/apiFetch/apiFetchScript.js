console.log("Sesion JS07 apiFetch");

//El metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON => (responseJSON.json()))
  .then(usuarios => {
     //console.log(usuarios.data[0])
    for (user of usuarios.data){
        console.log(`id tiene: ${user.id} 
        tiene email: ${user.email} 
        nombre tiene: ${user.first_name}`)}
    
})
.catch(error => console.log(error));

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))