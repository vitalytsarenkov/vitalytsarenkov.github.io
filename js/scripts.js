const html = document.querySelector("html");
const body = document.querySelector("body");

// Rotation change reload

let images = Array.from(document.images);
let angle = screen.orientation.angle;
//const angles = [0, 90, 180, 270];

screen.orientation.addEventListener("change", (event) => {

    images.forEach((element) => {
        element.style.setProperty("display", "none");
    });

    images.forEach((element) => {
        if (angle == 0 || angle == 90 || angle == 180 || angle == 270) {
            element.style.setProperty("display", "block");
        }
    });

    alert(screen.orientation.type + " " + screen.orientation.angle);
});

// Toggle menu

const menuButton = body.querySelector(".menu-button");
const menuCross = body.querySelector(".menu-cross");
const sidebar = body.querySelector(".sidebar");

let sidebarState = getComputedStyle(sidebar);

const menuTransition = getComputedStyle(html).getPropertyValue("--menu-transition");
const menuTransitionMs = parseFloat(menuTransition) * 1000;

function hideScroll() {
    if (sidebarState.getPropertyValue("display") == "flex" &&
        sidebarState.getPropertyValue("position") == "fixed") {
        body.classList.add("hide-scroll");
    } else {
        body.classList.remove("hide-scroll");
    }
};

menuButton.addEventListener("click", () => {
    body.classList.toggle("unclicable");
    body.classList.add("hide-scroll");
    menuButton.classList.toggle("toggle-menu-button");
    menuCross.classList.toggle("toggle-menu-cross");
    sidebar.classList.toggle("toggle-sidebar");

    setTimeout(() => {
        sidebar.classList.toggle("fade-sidebar");
    }, "100");

    setTimeout(() => {
        body.classList.toggle("unclicable");
    }, menuTransitionMs);
});

menuCross.addEventListener("click", () => {
    body.classList.toggle("unclicable");
    body.classList.remove("hide-scroll");
    menuButton.classList.toggle("toggle-menu-button");
    menuCross.classList.toggle("toggle-menu-cross");
    sidebar.classList.toggle("fade-sidebar");

    setTimeout(() => {
        body.classList.toggle("unclicable");
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
