const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let ingredientsList = document.querySelector("#ingredients")

for (let ingredient of ingredients) {
  let li = document.createElement('li');
  li.innerText = ingredient;
  li.classList = "item";
  ingredientsList.appendChild(li);
}
