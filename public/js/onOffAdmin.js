let $ = document;
const btn = $.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
});
