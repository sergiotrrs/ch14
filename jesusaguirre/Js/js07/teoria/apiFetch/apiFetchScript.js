console.log("apifetch js07 apifecthch");
// El metodo por default que realiza fetch es Get
fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => {
       /*  data.data.forEach(element => {
            console.log("email:",element.email,"\n","id:", element.id)
        }); */
        for(user of data.data){
            console.log(`ìd: ${user.id} email: ${user.email}`);
        }
    });
    /* fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json)) */
