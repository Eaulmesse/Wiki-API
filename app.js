// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

// FORMULAIRE DE RECHERCHE
let input = document.querySelector('#input-text');
let submit = document.querySelector('#button-submit');

let answerContainer = document.querySelector('.answer-container');

let url;

// EVENEMENT
submit.addEventListener('click', ()=> {
    url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${input.value}`;
    fetchUrl();
})





function fetchUrl() {
    fetch(url)
    .then((response) => response.json())
    .then(data => {

        for(var answer of data.query.search) {
            function createCard() {
                let cardContainer = document.createElement('div');
                answerContainer.appendChild(cardContainer);
                cardContainer.style.marginTop = "20px";


                let title = document.createElement('a');
                cardContainer.appendChild(title);
                title.innerHTML = answer.title;
                title.href = `https://en.wikipedia.org/?curid=${answer.pageid}`

                let answerUrl = document.createElement('p');
                cardContainer.appendChild(answerUrl);
                answerUrl.innerText = `https://en.wikipedia.org/?curid=${answer.pageid}`;
                answerUrl.style.color = 'green';

                let snippet = document.createElement('p');
                cardContainer.appendChild(snippet)
                snippet.innerHTML = answer.snippet;

            
            }
            createCard();
        }
    })
}









