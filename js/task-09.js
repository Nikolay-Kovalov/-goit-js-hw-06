const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

function addStyle() {
return bodyRef.style.backgroundColor = `${getRandomHexColor()}` 
}

btnRef.addEventListener('click', addColor);

function addColor(evt) {
 addStyle() 
  spanRef.textContent = bodyRef.style.backgroundColor
  return
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
