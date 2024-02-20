const html = document.querySelector("html");
const body = document.querySelector("body");

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

// Carousel

const carousels = body.querySelectorAll(".carousel");

for (let i = 0; i < carousels.length; i++) {

    const carousel = function () {

        const images = carousels[i].querySelectorAll(".carousel-content li");
        const slides = carousels[i].querySelectorAll(".slide-number p");
        const left = carousels[i].querySelector(".left");
        const right = carousels[i].querySelector(".right");

        let counter = 0;
        let amount = images.length;
        let currentImage = images[0];
        let currentSlide = slides[0];

        function navigate(direction) {
            currentImage.classList.remove("shown");
            currentSlide.classList.remove("shown");
            counter = counter + direction;
            if (direction === -1 &&
                counter < 0) {
                counter = amount - 1;
            }
            if (direction === 1 &&
                !images[counter]) {
                counter = 0;
            }
            currentImage = images[counter];
            currentSlide = slides[counter];
            currentImage.classList.add("shown");
            currentSlide.classList.add("shown");
        }

        left.addEventListener("click", () => {
            navigate(-1);
        });

        left.addEventListener("touchmove", () => {
            navigate(-1);
        });

        right.addEventListener("click", () => {
            navigate(1);
        });

        right.addEventListener("touchmove", () => {
            navigate(1);
        });

        navigate(0);
    };

    carousel();
};
