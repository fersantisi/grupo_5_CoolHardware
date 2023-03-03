// Este es nuestro validador del frotn-end aca hacemos las validaciones para que no lleguen cosas inesperadas a cargar el backend o que lleguen a la base de datos

// requerimientos del formulario y cada uno de los items a validar
const user = document.getElementById("user");
const pass = document.getElementById("pass");

// Requerimiento de las etiquetas donde vamos a enviar los errores en caso de que haya errores en el formulario 
const errUser = document.getElementById("errUser");
const errPass = document.getElementById("errPass");


// Aca llamamos a al formulario y esperamos al evento para empezar a utilizar la funcion de validacion
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

// funcion de validacion del formulario lo primero que hacemos es evitar el normal funcionamiento del formulario para que no se pueda enviar sin estar completo y en condiciones
// dentro de cada campo verificamos que la informacion no pueda ser nula o indefinida ademas de los casos puntuales de cada condicional
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