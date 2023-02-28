const showPassword = document.querySelector("#showPass");
const passwordField = document.querySelector("#pass");
const passwordConfirmField = document.querySelector("#passConfirm");


//funcional

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    let type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type",type);
    passwordConfirmField.setAttribute("type",type);
})