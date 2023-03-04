const form = document.getElementById("form");
const search = document.getElementById("search");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    if (search.value != "") {
        evento.target.submit();
    }
}
