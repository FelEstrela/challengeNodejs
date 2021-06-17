const form = document.querySelector('#form-login')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const errorEmail = document.querySelector('.error-email')
const errorPassword = document.querySelector('.error-password')
const errorsMessage = document.querySelectorAll('.input_field')

function resetErrors() {a
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
    if (!validateEmail(email.value)) {
        errorEmail.innerText = "Ingresa un email"
        errorEmail.style.display = "block"
        errors = true
    }

    if (password.value.length < 4 || password.value.length > 20) {
        errorPassword.innerText = "Ingresa una contraseña entre 4 y 20 caracteres"
        errorPassword.style.display = "block"
        errors = true
    }

    if (errors) {
        e.preventDefault()
    }

})