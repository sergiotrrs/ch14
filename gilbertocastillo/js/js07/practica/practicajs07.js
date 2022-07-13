//Una disculpa por el formato y el codigo, me apoye del codigo de mis compañeros de equipo, Aun me quedan
//dudas acerca de este ejercicio pero lo mejorare porteriormente, perdi mucho tiempo ya que queria entregar un codigo de varias paginas
//y me atore y ya no supe como realizarlo. ESPERO MEJORARLO POSTERIORMENTE.




const id = [];
const email = [];
const firstName = [];
const lastName = [];
const avatar = [];

function cambiar() {
    fetch('https://reqres.in/api/users?delay=3')
        .then(api => api.json())
        .then(datos => {
            for (user of datos.data) {
                id.push(user.id);
                email.push(user.email);
                firstName.push(user.first_name);
                lastName.push(user.last_name);
                avatar.push(user.avatar);
                localStorage.setItem("info", JSON.stringify({
                    id: id,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    avatar: avatar,
                    
                }
                ));

            }
            
            let info = "";
            for (user of datos.data) {
                info = info + `<tr>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img class="rounded-circle" src='${user.avatar}'</td></tr>`;
            }
            document.getElementById("datos").innerHTML = info;

        })

    let localData = JSON.parse(localStorage.getItem("info"));
    let type = typeof (localData);
    console.log(type);
    console.log(localData);


    if (localData !== null) {
        conLocal();
    }

    function conLocal() {
        let info2 = "";
        for (i = 0; i < 6; i++) {
            //let info = "";        
            info2 = info2 + `<tr>
        <td>${localData.id[i]}</td>
        <td>${localData.email[i]}</td>
        <td>${localData.first_name[i]}</td>
        <td>${localData.last_name[i]}</td>
        <td><img class="rounded-circle" src='${localData.avatar[i]}'</td></tr>`;
        }
        document.getElementById("datos").innerHTML = info2;
    }
    const myTimeout = setTimeout(borrar, 10000);


    function borrar() {
        localStorage.removeItem("info");
        console.log("ya");

    }

}