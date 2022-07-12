console.log("Sesion js07 apiFetch");

//metodo default para fetch es get
fetch('https://reqres.in/api/users?page=2')
  .then(responseJSON => {return responseJSON.json()})
  .then(usuarios => {
   // console.log(usuarios.data[0])\
   for(user of usuarios.data){
    console.log(`id: ${user.id} tiene email ${user.email}`)
   }
    
  });