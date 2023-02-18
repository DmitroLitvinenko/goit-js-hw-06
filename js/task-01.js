

const categoriesEl = document.querySelector('#categories');

const categoriesList = categoriesEl.querySelectorAll('.item');
console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(item => {
    const categoryName = item.querySelector('h2');
    const categoryItems = item.querySelectorAll('li')

    console.log('Category:', categoryName.textContent)
    console.log('Elements:', categoryItems.length)
});
