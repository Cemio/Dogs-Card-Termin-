const dogsAPI = document.getElementById("dogsAPI")
const btn = document.querySelector("button")

btn.addEventListener('click', function() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then((reponse) => {
            return reponse.json(); //on dit qu'on veut la réponse en json
        })

    .then((resultat) => {
        dogsAPI.src = resultat['message'];
        //console.log(resultat);

        document.getElementById('dogId').innerHTML = Math.ceil(Math.random() * 20)
        document.getElementById('dogAge').innerHTML = Math.ceil(Math.random() * 20) + " years"
        document.getElementById('dogRegistry').innerHTML = Math.ceil(Math.random() * 20)
    });

}, false)