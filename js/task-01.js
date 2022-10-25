const listRef = document.querySelector('#categories');
const titleRef = document.querySelectorAll('h2')

console.log(`Number of categories: ${listRef.children.length}`)

for (const element of titleRef) {
    console.log(`Categories: ${element.textContent}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`)
};