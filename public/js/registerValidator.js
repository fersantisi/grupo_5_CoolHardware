const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");
const form = document.getElementById("form");
const parrafo = document.getElementById("parrafo");

const regEx = "^\w+([\.-]*@\w+([\./]?\w+)*(\.\w{2,4})+$)"
const warnings = ""
const entrar = false
parrafo.innerHTML = "" 
form.addEventListener("submit",e=>{
    e.preventDefault()
    if(!regEx.test(email.value)){
        warnings += ''
        entrar = true 
    }
    if(pass.value.length < 8){
        warnings += ""
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})