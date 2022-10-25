const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const ingredientsRef = document.querySelector('#ingredients');
  const itemArr = [];
for (let i = 0; i < ingredients.length; i+=1) {
  const itemRef = document.createElement("li");
  itemArr.push(itemRef)
  itemRef.textContent = ingredients[i];
  itemRef.classList.add('item')
};
ingredientsRef.append(...itemArr);





