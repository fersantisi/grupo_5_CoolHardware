const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");
const errorP = document.querySelector("#errormsg")

const inputs = Array.from(document.querySelectorAll('.formulario input'))

const error = [];

inputs.forEach((input, i)=> {
    input.addEventListener("input", (e)=>{
        const div = e.target.parentElement;
        const errorP = div.lastElementChild
        
        if (e.target.firstname.value === '' || e.target.firstname.value === null) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en nombre";
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = "";
        }
        if (e.target.lastname.value === '' || e.target.lastname.value === null) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en apelid"
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = '';
        }
        if (e.target.username.value === '' || e.target.username.value === null) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en username"
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = '';
        }
        if (e.target.email.value === '' || e.target.email.value === null) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en email"
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = '';
        }
        if (e.target.pass.value.length <= 8 || e.target.pass.value === '' || e.target.pass.value === null) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en pass"
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = '';
        }
        if (e.target.pass.value.length >= 20) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en pass leng"
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = '';
        } 
        if (!e.target.passConfirm.value === pass) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorP.innerText = "Error en passC"
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorP.innerText = '';
        } 
        if (error.length > 0) {
            document.getElementById('habilitar').disabled = "disabled"
        }else{
            document.getElementById('habilitar').disabled = ""
        }

        inputs.forEach(input => {
            if(input.value === ''){
                document.getElementById('habilitar').disabled = "disabled"
            }
        });
    });
});



