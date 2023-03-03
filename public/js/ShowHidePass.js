// con esta funcion le permitimos al usuario ver la contraseña que esta escribiendo para evitar errores y ayudar al usuario 

// requerimientos del formulario para implementar la funcionalidad
const showPassword = document.querySelector("#showPass");
const passwordField = document.querySelector("#pass");
const passwordConfirmField = document.querySelector("#passConfirm");


// Dentro de esta funcion revisamos si el typo que tiene asignado el elemento segun nos lo indique el usuario cambiamos de oculto a visible tambien cambiamos el icono para que sea visualmente amigable y no sea engorroso para el usuario saber cuando puede ver o no su contraseña
// Esto se encuentra en todos los campos donde l usuario necesite ver su contraseña

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    let type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type",type);
    passwordConfirmField.setAttribute("type",type);
})