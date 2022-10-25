const formEl = document.querySelector('.login-form');
console.log(formEl)

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены')
    } 
    let obj = {
        email: email.value,
        password: password.value
    }
    console.log(`Имейл: ${obj.email} Пароль: ${obj.password}`)
    evt.currentTarget.reset()
   
}

