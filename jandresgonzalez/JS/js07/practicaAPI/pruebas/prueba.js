console.log("Link prueba");
localStorage.clear();



setLocalStore('https://reqres.in/api/users?page=2');
setTimeout(getLocalStoreTwo, 5000);
    
function setLocalStore(url) {
    fetch(url)
    .then(response => {return response.json()})
    .then(users => {
        let info = users.data

            info.forEach(element => {
                localStorage.setItem("Card" + element.id, JSON.stringify (
                    {
                        id: element.id,
                        name: `${element.first_name} ${element.last_name}`,
                        contact: element.email,
                        avatar: element.avatar,
        
                    },
                    ))

            })

/*         let day = Date.now();
        let expirationTime = Date.now() + 1000*60;
        localStorage.setItem("expirationInfo", JSON.stringify ({
            input: day,
            expiration: expirationTime,
        }))
 */
});
}

    
    function getLocalStoreTwo(){
        const cardSeven = JSON.parse(localStorage.getItem("Card7"));
        const cardEight = JSON.parse(localStorage.getItem("Card8"));
        const cardNine = JSON.parse(localStorage.getItem("Card9"));
        const cardTen = JSON.parse(localStorage.getItem("Card10"));
        const cardEleven = JSON.parse(localStorage.getItem("Card11"));
        const cardTwelve = JSON.parse(localStorage.getItem("Card12"));

        let objects = [cardSeven, cardEight, cardNine, cardTen, cardEleven, cardTwelve];
        console.log(objects);
        for (card of objects) {
            console.log(card.avatar);
        }
        objects = [];
        console.log(objects);
    }