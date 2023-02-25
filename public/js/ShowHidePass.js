const showPassword = document.querySelector("#showPass");
const passwordField = document.querySelector("#pass");
const passwordConfirmField = document.querySelector("#passConfirm");


showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    let type = passwordField.getAttribute("type")
    let typeConfirm = passwordConfirmField.getAttribute("type")

    if(type === "password" || typeConfirm === "password"){
        passwordField.setAttribute("type",type);
        passwordConfirmField.setAttribute("type",type);
    }else{
        passwordField.setAttribute("type",type);
        passwordConfirmField.setAttribute("type",type);
    }
    
})



// showPassword.addEventListener("click", function(){
//     this.classList.toggle("fa-eye");
//     let type = passwordField.getAttribute("type") === "password" ? "text" : "password";
//     passwordField.setAttribute("type",type);
// })