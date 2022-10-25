const btnDecrRef = document.querySelector('button[data-action="decrement"]');
const btnIncrRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;
btnDecrRef.addEventListener('click', decrement);
btnIncrRef.addEventListener('click', increment);

function decrement(evt) {
return spanRef.textContent = counterValue -=1; 
};

function increment(evt) {
return spanRef.textContent = counterValue +=1; 
};