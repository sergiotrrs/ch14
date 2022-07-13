console.log("Link");

fetch('https://reqres.in/api/users?page=2') 
    .then(responseJSON => {return responseJSON.json()})
    .then(usuarios => {
    //console.log(users.data[0]));
    let avatar;
    for (user of usuarios.data) {
        console.log(`UserId: ${user.id} Email: ${user.email}`);
        avatar = user.avatar;
        console.log(avatar);
    }
    document.getElementById("demo").innerHTML = `<img src =${avatar}></img>`;
});

/* 
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
 */