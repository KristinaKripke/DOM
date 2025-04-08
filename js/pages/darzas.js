const h1DOM = document.querySelector('h1');
const titleDOM = document.querySelector('title');
const pDOM = document.querySelector('p');

const originalTitle = titleDOM.textContent;
const newTitle = 'Zuikio daržas';
let increment = 0;

h1DOM.textContent = newTitle;


const timer = setInterval(() => {
    titleDOM.textContent = increment++ %2 === 0 
    ? newTitle : originalTitle;

    // kaip sustabdyti esama laikrodi
    /* if (increment >= 10) {
        clearInterval(timer);
    } */
}, 1000); 

let pTime = 0;
setInterval(() => {
    pDOM.textContent = (pTime++ / 100) + 's';
}, 1000);

const vegetables = ['Pomidoras', 'Agurkas', 'Svogunas', 'Bulve'];

const vegsDOM = document.querySelector('.vegs');

vegsDOM.innerHTML = '<li>Bananas</li>';

for (const veg of vegetables) {
    vegsDOM.innerHTML += `<li>${veg}</li>`;
}

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const namesDOM = document.querySelector('.names');

for (const name of names) {
    namesDOM.insertAdjacentHTML('beforeend', `<li>${name}</li>`);
}





