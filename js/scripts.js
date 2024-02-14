const html = document.querySelector("html");
const body = document.querySelector("body");

// Toggle menu

const menuButton = body.querySelector(".menu-button");
const menuCross = body.querySelector(".menu-cross");
const sidebar = body.querySelector(".sidebar");

let menuButtonState = getComputedStyle(menuButton);
let menuCrossState = getComputedStyle(menuCross);
let sidebarState = getComputedStyle(sidebar);

const menuTransition = getComputedStyle(html).getPropertyValue("--menu-transition");
const menuTransitionMs = parseFloat(menuTransition) * 1000;

function hideScroll() {
    if (sidebarState.getPropertyValue("display") == "flex" &&
        sidebarState.getPropertyValue("position") == "fixed") {
        body.classList.add("hide-scroll");
        html.classList.add("hide-scroll");
    } else {
        body.classList.remove("hide-scroll");
        html.classList.remove("hide-scroll");
    }
};

menuButton.addEventListener("click", () => {
    body.classList.toggle("unclicable");
    body.classList.add("hide-scroll");
    html.classList.add("hide-scroll");
    menuButton.classList.toggle("fade-menu-button");
    menuCross.classList.toggle("toggle-menu-cross");
    sidebar.classList.toggle("toggle-sidebar");

    setTimeout(() => {
        body.classList.toggle("fade-cross-sidebar");
    }, "100");

    setTimeout(() => {
        body.classList.toggle("unclicable");
        menuButton.classList.toggle("toggle-menu-button");
    }, menuTransitionMs);
});

menuCross.addEventListener("click", () => {
    body.classList.toggle("unclicable");
    body.classList.remove("hide-scroll");
    html.classList.remove("hide-scroll");
    menuButton.classList.toggle("toggle-menu-button");
    body.classList.toggle("fade-cross-sidebar");

    setTimeout(() => {
        menuButton.classList.toggle("fade-menu-button");
    }, "100");

    setTimeout(() => {
        body.classList.toggle("unclicable");
        menuCross.classList.toggle("toggle-menu-cross");
        sidebar.classList.toggle("toggle-sidebar");
    }, menuTransitionMs);
});

window.onresize = function () {
    hideScroll();
};

// Toggle dark and light modes

const modeToggle = body.querySelector(".mode-toggle");

const modeTransition = getComputedStyle(html).getPropertyValue("--mode-transition");
const modeTransitionMs = parseFloat(modeTransition) * 1000;

function setAriaLabel() {
    if (currentMode == "dark") {
        modeToggle.setAttribute("aria-label", "Change to light mode");
    } else {
        modeToggle.setAttribute("aria-label", "Change to dark mode");
    }
};

setAriaLabel();

modeToggle.addEventListener("click", () => {
    const newMode = currentMode === "dark" ? "light" : "dark";
    const newAriaLabel = newMode === "dark" ? "Change to light mode" : "Change to dark mode";

    modeToggle.setAttribute("aria-label", newAriaLabel);
    html.setAttribute("data-theme", newMode);

    localStorage.setItem("mode", newMode);
    currentMode = newMode;

    body.classList.toggle("unclicable");
    html.classList.toggle("toggle-mode");

    setTimeout(() => {
        body.classList.toggle("unclicable");
        html.classList.toggle("toggle-mode");
    }, modeTransitionMs);
});
