"use strict";

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Sup brah';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const button = document.querySelector('.btn');
button.style.background = 'red';

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
});

button.addEventListener('mouseover', (e) => {
    document.querySelector('body').style.background = '#ccc';
});


const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
console.log('test');
// Single elements can be selected
const form = document.getElementById('my-form');
// Can select anything such as class, tag, etc (only first one though)
const form2 = document.querySelector('my-form');

// Multiple items
// Returns a nodelist (similar to array and can be manipulated like an array)
document.querySelectorAll('.item');
// Same thing, no '.' as class is implied
// Returns an HTMLCollection which cannot be treated as an array, must be converted. Stick to querySelectorAll
document.getElementsByClassName('item');

// Same idea
document.getElementsByTagName('li');
