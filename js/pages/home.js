import { header } from "../components/header.js";
header();


const h1DOM = document.getElementsByTagName('h1');

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);

const liDOM1 = document.getElementsByTagName('li');
console.log(liDOM1);

const liDOM2 = ulDOM[0].getElementsByTagName('li');
console.log(liDOM2);

const liDOM3 = ulDOM[1].getElementsByTagName('li');
console.log(liDOM3);
console.clear();

const titleDOM = document.getElementById('title');
console.log(titleDOM);
console.log([titleDOM]);

const listDOM = document.getElementsByClassName('list');
console.log(listDOM);

const itemDOM = document.getElementsByClassName('item');
console.log(itemDOM);

const itemDOM1 = listDOM[0].getElementsByClassName('item');
console.log(itemDOM1);
console.clear();

const vienasDOM = document.querySelector('.list > .item');
const vienasDOM1 = document.querySelector('ul > li');
console.log(vienasDOM);
console.log(vienasDOM1);


const skaiciaiDOM = document
    .querySelectorAll('.list:nth-of-type(1) > .item');
    console.log(skaiciaiDOM);
    






