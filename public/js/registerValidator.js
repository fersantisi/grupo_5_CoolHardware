const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const passConfirm = document.getElementById("passConfirm");
const errorP = document.querySelector("#errormsg")

const inputs = [form,firstname,lastname,username,email,pass,passConfirm,]

const error = [];

inputs.forEach((input, i)=> {
    input.addEventListener("input", (e)=>{
        const div = e.target.parentElement;
        const errorP = div.lastElementChild
        
        if (firstname.value === '' || firstname.value === null) {
            if(!error.includes(i)){
                error.push(i);
            }
            errorFirst.innerText = "Error en nombre";
        }else{
            if(error.lastIndexOf(i) !== -1){
                error = error.filter(error => error !== i)
            }
            errorFirst.innerText = "";
        }
        if (lastname.value === '' || lastname.value === null) {
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
        if (username.value === '' || username.value === null) {
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
        if (email.value === '' || email.value === null) {
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
        if (pass.value.length <= 8 || pass.value === '' || pass.value === null) {
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
        if (pass.value.length >= 20) {
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
        if (!passConfirm.value === pass) {
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
        if(error){
            console.log("hay errores");
            document.getElementById('habilitar').disabled = "disabled"
        }else{
            console.log("no hay errores");
            document.getElementById('habilitar').disabled = "";
        }
    });
});



