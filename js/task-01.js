const numberOfCategories = document.querySelector('#categories');

const headersOfItems = document.querySelectorAll('.item');

const categoriesLength = headersOfItems.length;
console.log(`Number of categories: ${categoriesLength}`);

headersOfItems.forEach(item => {
  let category = item.firstElementChild.innerHTML;
  let elements = item.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
