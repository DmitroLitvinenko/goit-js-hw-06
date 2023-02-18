const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(item => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  ingredient.classList.add('item');
  return ingredient;
})
console.log(ingredientsEl);
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsEl);