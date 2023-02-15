const form = document.getElementById("form");
const nameP = document.getElementById("nameProd");
const price = document.getElementById("priceProd");
const stock = document.getElementById("stockProd");


const message = []
form.addEventListener("submit",(e)=>{ 
    if(nameP.value === '' || nameP === null){
        message.push("El nombre del producto es necesario") 
    }
    if(!price === String || price <= 0 || !price === Boolean){
        message.push("Ese precio es invalido")
    }
    if(stock === 0){
        stock.style.toggle("is-active")
    }
    if(message.length > 0){
        e.preventDefault()
        errorElement.innerText += message.join('')
    }
})
