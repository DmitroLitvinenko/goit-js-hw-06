

const categoriesEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesEl.length);

const categoriesListEl = document.querySelector('ul#categories');
const animalsListEl = categoriesListEl.firstElementChild;
const animalsTitleEl = animalsListEl.querySelector('h2');
console.log('Category:', animalsTitleEl.textContent);
console.log('Elements:', animalsListEl.length);

