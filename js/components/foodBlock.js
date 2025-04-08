export function foodBlock(item, currency) {
    return `
    <li class="food">
    <img class="img" src="./${item.photo}" alt="${item.name}">
    <p class="title">${item.name}</p>
    <p class="price">${item.price / 100} ${currency}</p>
    <p class="availability">${item.availability}</p>
</li>`;
}