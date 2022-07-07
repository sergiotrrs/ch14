/* //El método por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then(usuarios => {
    //console.log(usuarios.data[0])
    for (user of usuarios.data){
        
        console.log(`${user.id} tiene email ${user.email}`);
    }
    document.getElementById("r1")[0]=usuarios.data[0].id;
}); */

function creaCols(){
    document.getElementsByClassName("tbody")[0]
}