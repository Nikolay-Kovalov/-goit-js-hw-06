const inputRef = document.querySelector('#name-input');

const spanRef = document.querySelector('name-output');
const titleRef = document.querySelector('h1')

inputRef.addEventListener('input', addValue);
function addValue(evt) {
    if (evt.currentTarget.value === '') {
       return titleRef.firstElementChild.textContent = 'Anonymous';
        
    }

    return titleRef.firstElementChild.textContent = evt.currentTarget.value

};

