const inputRef = document.querySelector('#validation-input')

function onBlur() {
    if (this.getAttribute('data-length') > this.value.length)
    { inputRef.classList.add('invalid') }
    
    else {
        {
            inputRef.classList.remove('invalid')
            inputRef.classList.add('valid')
        }
    }
}
inputRef.addEventListener('blur', onBlur)
    
