const html = document.querySelector("html");
const body = document.querySelector("body");

// Toggle menu

const menuButton = body.querySelector(".menu-button");
const menuCross = body.querySelector(".menu-cross");
const sidebar = body.querySelector(".sidebar");

let sidebarState = getComputedStyle(sidebar);

const menuTransition = getComputedStyle(html).getPropertyValue("--menu-transition");
const menuTransitionMs = parseFloat(menuTransition) * 1000;

function hideScroll(state) {
    if (state.getPropertyValue("display") == "flex" &&
        state.getPropertyValue("position") == "fixed") {
        html.classList.add("hide-scroll");
    } else {
        html.classList.remove("hide-scroll");
    }
};

menuButton.addEventListener("click", () => {
    body.classList.add("unclicable");
    body.classList.add("hide-scroll");
    menuButton.classList.toggle("toggle-menu-button");
    menuCross.classList.toggle("toggle-menu-cross");
    sidebar.classList.toggle("toggle-sidebar");

    setTimeout(() => {
        sidebar.classList.toggle("fade-sidebar");
    }, "100");

    setTimeout(() => {
        body.classList.remove("unclicable");
    }, menuTransitionMs);
});

menuCross.addEventListener("click", () => {
    body.classList.add("unclicable");
    body.classList.remove("hide-scroll");
    menuButton.classList.toggle("toggle-menu-button");
    menuCross.classList.toggle("toggle-menu-cross");
    sidebar.classList.toggle("fade-sidebar");

    setTimeout(() => {
        body.classList.remove("unclicable");
        sidebar.classList.toggle("toggle-sidebar");
    }, menuTransitionMs);
});

window.onresize = function () {
    hideScroll(sidebarState);
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

    body.classList.add("unclicable");
    html.classList.toggle("toggle-mode");

    setTimeout(() => {
        body.classList.remove("unclicable");
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

        right.addEventListener("click", () => {
            navigate(1);
        });

        navigate(0);
    };

    carousel();
};

// Modal images

const images = document.images;
const modal = body.querySelector(".modal");
const modalContent = body.querySelector(".modal-content");

let modalState = getComputedStyle(modal);

const modalTransition = getComputedStyle(html).getPropertyValue("--modal-transition");
const modalTransitionMs = parseFloat(modalTransition) * 1000;

for (let i = 0; i < images.length; i++) {

    const imageClick = function () {

        images[i].addEventListener("click", () => {
            body.classList.add("unclicable");
            modalContent.src = images[i].src;

            if (modalState.getPropertyValue("display") == "none") {
                modal.classList.toggle("modal-shown");

                setTimeout(() => {
                    modal.classList.toggle("fade-modal");
                    modal.scrollLeft = (modal.scrollWidth - modal.clientWidth) / 2;
                    modal.scrollTop = (modal.scrollHeight - modal.clientHeight) / 2;
                }, "100");

                setTimeout(() => {
                    body.classList.remove("unclicable");
                    html.classList.add("hide-scroll");
                }, modalTransitionMs + 50);

            } else {
                html.classList.remove("hide-scroll");
                modal.classList.toggle("fade-modal");

                setTimeout(() => {
                    body.classList.remove("unclicable");
                    modalContent.src = "";
                    modal.classList.toggle("modal-shown");
                }, modalTransitionMs);
            }
        });
    }
    imageClick();
};

//window.onresize = function () {
//    hideScroll(modalState);
//};
