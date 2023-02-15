const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");
const form = document.getElementById("form");
const errorElement = document.getElementById("errorElement");

const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const message = []
form.addEventListener("submit",(e)=>{
    
    if(firstname.value === '' || firstname === null){
        message.push("El nombre es necesario") 
    }
    if(lastname.value === '' || lastname === null){
        message.push("El apellido es necesario") 
    }
    if(pass.value.length <= 8){
        message.push('La contraseña tiene que ser mayor a 8 caracteres')
    }
    if(pass.value.length >= 20){
        message.push('La contraseña tiene que ser menor a 20 caracteres')
    }
    if(!passConfirm.value === pass){
        message.push('Las contraseña deben coincidir')
    }    
    if(!email.value.match(regEx)){
        message.push("Ese email es invalido")
    }
    if(message.length > 0){
        e.preventDefault()
        errorElement.innerText += message.join('')
    }
})

