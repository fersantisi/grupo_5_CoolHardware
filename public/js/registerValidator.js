const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");

const errFirstname = document.getElementById("errFirstname");
const errLastname = document.getElementById("errLastname");
const errUsername = document.getElementById("errUsername");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");
const errPassConfirm = document.getElementById("errPassConfirm");


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    let counter = 0;
    /* firstname */
    if (firstname.value == "") {
        errFirstname.style.display = "block";
        errFirstname.innerHTML = "Enter your first name F";
        firstname.focus();
        counter++;
    } else {
        errFirstname.style.display = "none";
    }
    /* lastname */
    if (lastname.value === "") {
        errLastname.style.display = "block";
        errLastname.innerHTML = "Enter your last name F";
        lastname.focus();
        counter++;
    } else {
        errLastname.style.display = "none";
    }
    /* username */
    if (username.value === "") {
        errUsername.style.display = "block";
        errUsername.innerHTML = "Enter your user name F";
        username.focus();
        counter++;
    } else {
        errUsername.style.display = "none";
    }
    /* Email */
    const charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email.value);
    if (email.value === "") {
        errEmail.style.display = "block";
        errEmail.innerHTML = "Enter your email F";
        email.focus();
        counter++;
    } else if (!charEmail) {
        errEmail.style.display = "block";
        errEmail.innerHTML = "Invalid format F";
        email.focus();
        counter++;
    } else {
        errEmail.style.display = "none";
    }
    /* pass */
    console.log(pass.value.length);
    if (pass.value === "") {
        errPass.style.display = "block";
        errPass.innerHTML = "Enter your password F";
        pass.focus();
        counter++;
    } else if (pass.value.length < 8) {
        errPass.style.display = "block";
        errPass.innerHTML = "La contraseña debe tener al menos 8 caracteres F";
        pass.focus();
        counter++;
    } else {
        errPass.style.display = "none";
    }
    /* passconfirm */
    if (passConfirm.value !== pass.value || passConfirm.value === '') {
        errPassConfirm.style.display = "block";
        errPassConfirm.innerHTML = "Tus contraseñas no coinciden F";
        passConfirm.focus();
        counter++;
    } else {
        errPassConfirm.style.display = "none";
    }
    console.log(counter);
    if (counter == 0) {
        evento.target.submit();
    }

}
