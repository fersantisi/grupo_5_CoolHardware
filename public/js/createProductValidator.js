// const name = document.getElementById("name");
// const category = document.getElementById("category");
// const stock = document.getElementById("stock");
// const price = document.getElementById("price");
// const iscount = document.getElementById("iscount");


// const errName = document.getElementById("errName");
// const errCategory = document.getElementById("errCategory");
// const errStock = document.getElementById("errStock");
// const errPrice = document.getElementById("errPrice");
// const errDiscount = document.getElementById("errDiscount");


// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("form").addEventListener('submit', validarFormulario);
// });

// function validarFormulario(evento) {
//     evento.preventDefault();
//     let counter = 0;
//     /* name */
//     if (name.value == "") {
//         errName.style.display = "block";
//         errName.innerHTML = "Enter your first name F";
//         name.focus();
//         counter++;
//     } else {
//         errName.style.display = "none";
//     }
//     /* Category */
//     if (category.value === "") {
//         errCategory.style.display = "block";
//         errCategory.innerHTML = "Enter your last name F";
//         category.focus();
//         counter++;
//     } else {
//         errCategory.style.display = "none";
//     }
//     /* errStock */
//     if (stock.value === "") {
//         errStock.style.display = "block";
//         errStock.innerHTML = "Enter your user name F";
//         stock.focus();
//         counter++;
//     } else {
//         errStock.style.display = "none";
//     }
//     /* Email */
//     const charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email.value);
//     if (email.value === "") {
//         errEmail.style.display = "block";
//         errEmail.innerHTML = "Enter your email F";
//         email.focus();
//         counter++;
//     } else {
//         errEmail.style.display = "none";
//     }
//     /* errPrice */
//     if (price.value === "") {
//         errPrice.style.display = "block";
//         errPrice.innerHTML = "Enter your password F";
//         rice.focus();
//         counter++;
//     }  else {
//         errPrice.style.display = "none";
//     }
//     /* Discount */
//     if (discount.value !== pass.value || discount.value === '') {
//         errDiscount.style.display = "block";
//         errDiscount.innerHTML = "Tus contraseñas no coinciden F";
//         discount.focus();
//         counter++;
//     } else {
//         errDiscount.style.display = "none";
//     }
//     console.log(counter);
//     if (counter == 0) {
//         evento.target.submit();
//     }

// }
