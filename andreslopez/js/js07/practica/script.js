const id = [];
const email = [];
const firstName = [];
const lastName = [];
const avatar = [];
//Pongo mis constantes por afuera y, bueno como constantess, para que en el for se queden guardados todos los datos y no solo el último.

function cambiar() {
    fetch('https://reqres.in/api/users?delay=3')
        .then(api => api.json())
        .then(datos => {
            for (user of datos.data) {
                id.push(user.id);//debo usar el push ya que son constantes y no funcionaria id=user.id
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
                    //acá meto al localStorage cada arreglo con todos los valores de cada key ¿es esta una forma pobre de hacerlo?
                }
                ));

            }
            //aquí se grafica con delay
            let info = "";
            for (user of datos.data) {
                info = info + `<tr>
        <td>${user.id}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td><img class="rounded-circle" src='${user.avatar}'</td></tr>`;
            }
            document.getElementById("datos").innerHTML = info;

        })

    let localData = JSON.parse(localStorage.getItem("info"));
    //aquí abajo reviso que condiciones puedo usar para mi if, que permitirá acceder al localStorage
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
        <td>${localData.first_name[i]}</td>
        <td>${localData.last_name[i]}</td>
        <td><img class="rounded-circle" src='${localData.avatar[i]}'</td></tr>`;
        }
        document.getElementById("datos").innerHTML = info2;
    }
    const myTimeout = setTimeout(borrar, 10000);

    //Intenté por bastante rato la eliminación del storage por esta y otras formas, pero un poco de ayuda para ver bien el problema sirvió
    function borrar() {
        localStorage.removeItem("info");
        console.log("ya");

    }

}
//Me ha costado mucho más de lo que pensé, pero por la hora me arriesgo a no poder subirlo a canvas a pesar de la verguenza que me genera no haber podido profundizar en mis estilos







