console.log('Practica ApiFetch')

fetch('https://reqres.in/api/users?page=1')
  .then(responseJSON => {return responseJSON.json()})//parseo a json
  .then(usuarios=> 
    {
        console.log(usuarios.data[0])

        for (let user of usuarios.data){
            console.log(`${user.id} tiene email ${user.email}`)
        }//esto me trae el id y el user de la pagina 1 de la api
});//pasar a objeto con data 

//api que trae productos

/*fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))*/