console.log("Sesión JS07 apiFetch");


//El métpdp ´pr default que realiza Fetch en Get
function traer(){
fetch('https://reqres.in/api/users?delay=3')
.then(responseJSON => {return responseJSON.json()})
.then(usuarios => {
    //console.log(usuarios.data[0])
    for (user of usuarios.data){
        (`id: ${user.id} tiene email ${ user.email}`)// for que me itera a todos mis usuarios
        document.getElementById('datos').innerHTML
    }
})
};



