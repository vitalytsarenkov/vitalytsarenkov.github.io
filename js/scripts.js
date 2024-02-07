const body = document.querySelector("body");

// Hide scrolling

const menuToggle = body.querySelector(".menu-toggle");
const menuCross = body.querySelector(".menu-cross");

let menuCrossState = getComputedStyle(menuCross);

function hideScroll() {
    if (
        menuCrossState.getPropertyValue("display") == "block" &&
        menuCrossState.getPropertyValue("visibility") == "visible") {
        body.style.setProperty("overflow", "hidden");
    } else {
        body.style.setProperty("overflow", "auto");
    }
};

menuToggle.addEventListener("click", () => {
    body.classList.toggle("toggle-menu");
    hideScroll();
});

window.onresize = function () {
    hideScroll();
};

// Toggle dark and light modes

const modeToggle = body.querySelector(".mode-toggle");
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const currentMode = localStorage.getItem("mode");
if (currentMode == "dark") {
    body.classList.toggle("dark-mode");
} else if (currentMode == "light") {
    body.classList.toggle("light-mode");
}

modeToggle.addEventListener("click", () => {
    if (prefersDarkMode.matches) {
        body.classList.toggle("light-mode");
        var mode = body.classList.contains("light-mode") ?
            "light" :
            "dark";
    } else {
        body.classList.toggle("dark-mode");
        var mode = body.classList.contains("dark-mode") ?
            "dark" :
            "light";
    }
    localStorage.setItem("mode", mode);
});
