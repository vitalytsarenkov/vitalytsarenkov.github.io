const html = document.querySelector("html");
const menuToggle = document.querySelector(".menu-toggle");
const menuCross = document.querySelector(".menu-cross");

let menuCrossState = getComputedStyle(menuCross);

menuToggle.addEventListener("click", () => {
    html.classList.toggle("toggle-menu");
    if (
        menuCrossState.getPropertyValue("visibility") == "visible") {
        html.style.setProperty("overflow", "hidden");
    } else {
        html.style.setProperty("overflow", "auto");
    }
});

window.onresize = function () {
    if (
        menuCrossState.getPropertyValue("display") == "block" &&
        menuCrossState.getPropertyValue("visibility") == "visible") {
        html.style.setProperty("overflow", "hidden");
    } else {
        html.style.setProperty("overflow", "auto");
    }
};
