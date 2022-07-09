console.log("Link");
const users = [];



/* for (i = 0; i <7 ; i++) 
{const node = document.createElement("div")
node.classList.add("col-6");

// // Create a text node:
const textnode = document.createTextNode("Water");

// // Append the text node to the "li" node:
node.appendChild(textnode);

// // Append the "li" node to the list:
document.getElementById("data").appendChild(node);} */

//https://reqres.in/api/users?delay=3

fetch('https://reqres.in/api/users?page=2') 
    .then(responseJSON => {return responseJSON.json()})
    .then(usuarios => {
        
        //console.log(usuarios.data[0]);
        for (let i=0; i<usuarios.data.length; i++) {
            users.push(usuarios.data[i]);
        }
        //console.log(objects);
        /* for (object of objects) {
            console.log(object);
        }
 */
        users.forEach(user => {
/*             <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text" */

    const col = document.createElement("div");
    const node = document.createElement("div");
    const img = document.createElement("img");
    const card = document.createElement("div");
    const text = document.createElement("p");
    text.classList.add("card-text");
    card.classList.add("card-body");
    img.setAttribute("src", user.avatar);
    img.classList.add("card-img-top");
    node.classList.add("card");
    col.classList.add("col-sm-4");
    node.setAttribute("style", "width: 9rem;")
//    const info = document.createTextNode(`Info: ID --${user.id}-- NAME --${user.first_name} ${user.last_name}-- CONTACT --${user.email}-- ${user.avatar}`);
    text.innerHTML= `<b>Id#:</b> ${user.id} <br> <b>Name:</b> ${user.first_name} ${user.last_name} <br> <b>Contact:</b> <a href="mailto:${user.email}?Subject=Abue%20hackerman%20page%20inquiry">${user.email}</a>`;
    card.appendChild(text);
    //img.appendChild(card);
    node.appendChild(img);
    node.appendChild(card);
    col.appendChild(node);

    document.getElementById("data").appendChild(col);
            
/*             // Se crea un div
            const node = document.createElement("div")
            node.classList.add("row", "col-12", "card");
            const info = document.createTextNode(`Info: ID --${user.id}-- NAME --${user.first_name} ${user.last_name}-- CONTACT --${user.email}-- ${user.avatar}`)
            node.appendChild(info);
            const img = document.createElement("img")
            img.setAttribute("src", user.avatar)
            img.classList.add("card-img-top", "w-25")
            node.appendChild(img);
            document.getElementById("data").appendChild(node);
             */
        });



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
});

//callNames();
function callNames() {
    let id;
    let firstName;
    let lastName;
    let email;
    let avatar;

    console.log(users);

    for (person of users) {
        console.log(person)
        id = person.id;
        firstName = person.first_name;
        lastName = person.last_name;
        email = person.email;
        avatar = person.avatar;

        console.log(`Info ${id} ${firstName} ${lastName} ${email} ${avatar}`)


        idHTML.innerHTML = id;
        fNameHTML.innerHTML = firstName;
        lNameHTML.innerHTML = lastName;
        emailHTML.innerHTML = email;
        avatarHTML.innerHTML = `<img src =${avatar}></img>`;
        
    }

}