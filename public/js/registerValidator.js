const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");
const form = document.getElementById("form");


const regEx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const message = []
form.addEventListener("submit", (e) => {

    if (firstname.value === '' || firstname.value === null) {
        message.push("El nombre es necesario")
    } else {
        message.pop()
    }
    if (lastname.value === '' || lastname.value === null) {
        message.push("El apellido es necesario")
    } else {
        message.pop()
    }
    if (username.value === '' || username.value === null) {
        message.push("El nombre de usuario es necesario")
    } else {
        message.pop()
    }
    if (regEx.test(email.value)) {
        message.push('El email es invalido')
    } else {
        message.pop()
    }
    if (pass.value.length <= 8 || pass.value === '' || pass.value === null) {
        message.push('La contraseña tiene que ser mayor a 8 caracteres')
    } else {
        message.pop()
    }
    if (pass.value.length >= 20) {
        message.push('La contraseña tiene que ser menor a 20 caracteres')
    } else {
        message.pop()
    }
    if (!passConfirm.value === pass) {
        message.push('Las contraseña deben coincidir')
    } else {
        message.pop()
    }

    if (message.length > 0) {
        e.preventDefault();
        let errorElement = document.querySelector("#errorElement");
        message.forEach(error => {
            errorElement.innerHTML += `<p>${error}</p>`
        })
    }
})

