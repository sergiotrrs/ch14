const API = 'https://reqres.in/api/users?delay=3';
const cards = document.querySelector('#cards');

function setLocalStorageExpiry(key, value, ttl) {
    const now = new Date()
    const expiry = now.getTime() + ttl;

    const item = {
        value: value,
        expiry: expiry,
    }
    console.log('Time expiry '+new Date(expiry));
    localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

async function getUsuarios() {
    try {
        const usuariosLocalStorage = getWithExpiry('users');
        cards.innerHTML = "";
        if (!usuariosLocalStorage) {
            console.log('No hay en localStorage');
            const response = await fetch(API);
            const data = await response.json();
            const usuarios = data.data;
            setLocalStorageExpiry('users', usuarios, 10000);
            showUsers(usuarios);
        } else {
            console.log('Hay en localStorage');
            showUsers(usuariosLocalStorage);
        }
    } catch (error) {
        console.log(error);
    }
}

function showUsers(usuarios) {
    usuarios.forEach((usuario) => {
        const card = document.createElement('div');
        card.classList.add('card', 'border', 'border-2');
        card.style.width = "15rem";

        const img = document.createElement('img');
        img.src = usuario.avatar;
        card.appendChild(img);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');

        const p1 = document.createElement('p');
        p1.classList.add('card-text');
        p1.innerHTML = usuario.id;
        cardBody.appendChild(p1);

        const p2 = document.createElement('p');
        p2.classList.add('card-text');
        p2.innerHTML = `${usuario.first_name} ${usuario.last_name}`;
        cardBody.appendChild(p2);

        const p3 = document.createElement('p');
        p3.classList.add('card-text');
        p3.innerHTML = usuario.email;
        cardBody.appendChild(p3);

        card.appendChild(cardBody)

        cards.appendChild(card);

    });
}