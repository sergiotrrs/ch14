console.log("Link");
const idHTML = document.getElementById("id");
//const idHTML = document.getElementById("id");
const fNameHTML = document.getElementById("fName");
const lNameHTML = document.getElementById("lName");
const emailHTML = document.getElementById("email");
const avatarHTML = document.getElementById("avatar")

fetch('https://reqres.in/api/users?page=2') 
    .then(responseJSON => {return responseJSON.json()})
    .then(usuarios => {
        const objects = [];
        //console.log(usuarios.data[0]);
        for (let i=0; i<usuarios.data.length; i++) {
            objects.push(usuarios.data[i]);
        }
        //console.log(objects);
        /* for (object of objects) {
            console.log(object);
        }
 */
        let id;
        let firstName;
        let lastName;
        let email;
        let avatar;
        for (object of objects) {
            id = object.id;
            firstName = object.first_name;
            lastName = object.last_name;
            email = object.email;
            avatar = object.avatar;

            console.log("Query:" + document.querySelector(.1));

            idHTML.innerHTML = id;
            fNameHTML.innerHTML = firstName;
            lNameHTML.innerHTML = lastName;
            emailHTML.innerHTML = email;
            avatarHTML.innerHTML = `<img src =${avatar}></img>`;
            
 //           if (class == id) {
/*             idHTML.innerHTML = id;
            fNameHTML.innerHTML = firstName;
            lNameHTML.innerHTML = lastName;
            emailHTML.innerHTML = email;
            avatarHTML.innerHTML = `<img src =${avatar}></img>`;
            }
            else {
                console.log("nope");
            } */
        }


/* 
        for (object of objects) {
            console.log(object.id);
        }
        for (object of objects) {
            console.log(object.email);
        }
        for (object of objects) {
            console.log(object.first_name);
        }
        for (object of objects) {
            console.log(object.last_name);
        }
        for (object of objects) {
            console.log(object.avatar);
        } */




        

        //console.log(objects[0]);
    //console.log(usuarios.data);
    //usuarios.data.forEach(element => { console.log(element);
        
    });
    
    
/*  
    let avatar;
    for (user of usuarios.data) {
        console.log(`UserId: ${user.id} Email: ${user.email}`);
        avatar = user.avatar;
        console.log(avatar);
    }
    document.getElementById("demo").innerHTML = `<img src =${avatar}></img>`;
     */
//});

/* 
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
 */