/*
    Proporciona interfaz para recuperar recursos (incluso a través de la red)
*/
console.log("API FECTH");

//El método por default que realiza fecth es GET
// el return y las {} no son necesarias cuando solo es una instruccion
//Lo que me regresa en el primer then, lo trabajo en el segundo, yo lo pongo nombre a la variable
//responseIsJSON.json() me lo parsea a objeto

/* REspuesta del JSON
    {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}
*/
fetch('https://reqres.in/api/users?page=2')
  .then(responseIsJSON =>{return responseIsJSON.json()})
  .then(usuariosObject =>{ 
        //console.log(usuariosObject.data[0].id); //Imprime 7
        for(user of usuariosObject.data){
            console.log(`id ${user.id} tiene email: ${user.email}`);
        }   
    });


    //Esta es otra API
    //https://fakestoreapi.com/
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            


