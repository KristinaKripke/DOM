const titleDOM = document.getElementById('title');

titleDOM.textContent = 'Pomidoras'; // visas turinys //
titleDOM.innerText = 'Agurkas'; //supaprastinta turinio versija (be space)//

console.log(titleDOM.textContent);

const liDOM = document.querySelectorAll('ul li');

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].textContent = liDOM[i].textContent.repeat(5) + '!';
    
}

for (const li of liDOM) {
    li.textContent = li.textContent.repeat(3) + '?';
}

const colors = ['yellow', 'green', 'red', 'purple'];
const vegsDOM = document.querySelectorAll('ol li');

let index = 0;

for (const vegDOM of vegsDOM) {
    const colorIndex = index++ % colors.length;
    const color = colors[colorIndex];
    vegDOM.style.fontSize = (1 + index * 0.3) + 'rem';
    vegDOM.style.backgroundColor = color;
}

const lrlDOM = document.querySelectorAll('div p');

for (const pDOM of lrlDOM) {
    pDOM.textContent = pDOM.dataset.number + ') ' + pDOM.textContent;
    pDOM.style.backgroundColor = pDOM.dataset.color;

   // const { number, color } = pDOM.dataset; //
    
}




