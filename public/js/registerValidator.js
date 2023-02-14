const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const passConfirm = document.querySelector("#passConfirm");
const form = document.querySelector("#form");
const errorElement = document.querySelector(" #errorElement");

form.addEventListener("submit",(e)=>{
    let message = []
    if(firstname.value === '' || firstname === null){
        message.push("El nombre es necesario") 
    }
    if(lastname.value === '' || lastname === null){
        message.push("El apellido es necesario") 
    }
    if(pass.value.length <= 8){
        message.push('La contraseña tiene que ser mas larga')
    }
    if(pass.value.length >= 20){
        message.push('La contraseña tiene que ser mas larga')
    }
    if(!passConfirm.value === pass){
        message.push('Las contraseña deben coincidir')
    }
    if(message.length > 0){
        e.preventDefault()
    }
})