const body = document.querySelector("body");
const menuToggle = document.querySelector(".menu-toggle");
const menuCross = document.querySelector(".menu-cross");

let menuCrossState = getComputedStyle(menuCross);

menuToggle.addEventListener("click", () => {
    body.classList.toggle("toggle-menu");
    if (
        menuCrossState.getPropertyValue("visibility") == "visible") {
        body.style.setProperty("overflow", "hidden");
    } else {
        body.style.setProperty("overflow", "auto");
    }
});

window.onresize = function () {
    if (
        menuCrossState.getPropertyValue("display") == "block" &&
        menuCrossState.getPropertyValue("visibility") == "visible") {
        body.style.setProperty("overflow", "hidden");
    } else {
        body.style.setProperty("overflow", "auto");
    }
};
