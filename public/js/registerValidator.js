// Este es nuestro validador del frotn-end aca hacemos las validaciones para que no lleguen cosas inesperadas a cargar el backend o que lleguen a la base de datos

// requerimientos del formulario y cada uno de los items a validar
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");

// Requerimiento de las etiquetas donde vamos a enviar los errores en caso de que haya errores en el formulario 
const errFirstname = document.getElementById("errFirstname");
const errLastname = document.getElementById("errLastname");
const errUsername = document.getElementById("errUsername");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");
const errPassConfirm = document.getElementById("errPassConfirm");

// Aca llamamos a al formulario y esperamos al evento para empezar a utilizar la funcion de validacion
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

// funcion de validacion del formulario lo primero que hacemos es evitar el normal funcionamiento del formulario para que no se pueda enviar sin estar completo y en condiciones
// dentro de cada campo verificamos que la informacion no pueda ser nula o indefinida ademas de los casos puntuales de cada condicional
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
