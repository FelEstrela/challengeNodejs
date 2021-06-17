const form = document.querySelector('#form-register')
const Name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const errorName = document.querySelector('.error-name')
const errorPassword = document.querySelector('.error-password')
const errorEmail = document.querySelector('.error-email')
const errorsMessage = document.querySelectorAll('.input_field')

function resetErrors() {
    errorsMessage.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
    let errors = false

    resetErrors()

    if (Name.value.length < 2) {
        errorName.innerText = "Su nombre debe tener al menos 2 caracteres"
        errorName.style.display = "block"
        errors = true
    }

    if (!validateEmail(email.value)) {
        errorEmail.innerText = "Ingresa un email valido"
        errorEmail.style.display = "block"
        errors = true
    }

    if (password.value.length < 4 || password.value.length > 12) {
        errorPassword.innerText = "Ingresa una contraseña entre 6 y 12 caracteres"
        errorPassword.style.display = "block"
        errors = true
    }

    if (errors) {
        e.preventDefault()
    }

})