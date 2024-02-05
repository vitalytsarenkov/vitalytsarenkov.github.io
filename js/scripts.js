const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
    document.body.classList.toggle("toggle-sidebar");
    document.body.classList.toggle("toggle-menu-button");
    document.body.classList.toggle("toggle-menu-cross");
});
