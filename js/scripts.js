const html = document.querySelector("html");
const body = document.querySelector("body");

// Hide scrolling

const menuToggle = body.querySelector(".menu-toggle");
const menuCross = body.querySelector(".menu-cross");

let menuCrossState = getComputedStyle(menuCross);

function hideScroll() {
    if (
        menuCrossState.getPropertyValue("display") == "block" &&
        menuCrossState.getPropertyValue("visibility") == "visible") {
        body.classList.add("hide-scroll");
    } else {
        body.classList.remove("hide-scroll");
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

function setAriaLabel() {
    if (currentMode == "dark") {
        modeToggle.setAttribute("aria-label", "Change to light mode");
    } else {
        modeToggle.setAttribute("aria-label", "Change to dark mode");
    }
};

setAriaLabel();

modeToggle.addEventListener("mousedown", (event) => {
    const newMode = currentMode === "dark" ? "light" : "dark";
    const newAriaLabel = newMode === "dark" ? "Change to light mode" : "Change to dark mode";
    modeToggle.setAttribute("aria-label", newAriaLabel);
    html.setAttribute("data-theme", newMode);
    localStorage.setItem("mode", newMode);
    currentMode = newMode;
    html.classList.add("toggle-mode");
});

modeToggle.addEventListener("mouseup", handler, false);
modeToggle.addEventListener("mousemove", handler, false);

function handler(event) {
    html.classList.remove("toggle-mode");
}
