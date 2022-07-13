console.log("API FETCH");

//Api recuperar informacion a traves de la red. Ejercicio recuperar un JSON
//fetch ya esta definida en java solicitud get http
//JSOn se parsea con .json

//El metodo por default que realiza fetch es GET
fetch('https://reqres.in/api/users?page=2')
 // .then(response => response.json()) //response es una respuesa 
 //.then(response => {console.log(response)})//asi no se úede trabajat
 .then(responseJSON => {return responseJSON.json()})//asi no se úede trabajat
  //.then(data => console.log(data))
.then(usuarios =>{
    console.log(usuarios.data[0]);//llamando solo un elemento
    for(let user of usuarios.data){
        console.log(`id :  ${user.id} tienen email ${user.email}`) //Para acceceder a los objetos clave:valor
    }
})

