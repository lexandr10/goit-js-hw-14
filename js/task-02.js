const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
// function createTitle(arr) {
//   return arr.map(element => {
//     const title = document.createElement('li');
//     title.textContent = element;
//     title.classList.add('item');
//     list.appendChild(title);
//   });
// }

const createItem = ingredients.map(element => {
  const title = document.createElement('li');
  title.textContent = element;
  title.classList.add('item');
  return title;
});
list.append(...createItem);
console.log(list);
