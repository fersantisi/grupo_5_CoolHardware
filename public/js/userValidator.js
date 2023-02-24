const user = document.getElementById("user");
const pass = document.getElementById("pass");

const errUser = document.getElementById("errUser");
const errPass = document.getElementById("errPass");


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    let counter = 0;
    /* user */
    if (user.value === "") {
        errUser.style.display = "block";
        errUser.innerHTML = "Enter your user  F";
        user.focus();
        counter++;
    } else {
        errUser.style.display = "none";
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
    console.log(counter);
    if (counter == 0) {
        evento.target.submit();
    }

}