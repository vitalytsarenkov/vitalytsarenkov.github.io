const html = document.querySelector("html");
const body = document.querySelector("body");

// Test function

function test() {
    alert("!!!");
};

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
        body.classList.add("hide-scroll");
    } else {
        body.classList.remove("hide-scroll");
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

function carousel(carousel) {
    const images = carousel.querySelectorAll(".carousel-content li");
    const positions = carousel.querySelectorAll(".carousel-position li");
    const left = carousel.querySelector(".left");
    const right = carousel.querySelector(".right");

    let counter = 0;
    let amount = images.length;
    let currentImage = images[0];
    let currentPosition = positions[0];

    function navigate(direction) {
        currentImage.classList.remove("shown");
        currentPosition.classList.remove("shown");
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
        currentPosition = positions[counter];
        currentImage.classList.add("shown");
        currentPosition.classList.add("shown");
    };

    left.addEventListener("click", () => {
        navigate(-1);
    });

    right.addEventListener("click", () => {
        navigate(1);
    });

    navigate(0);
};

for (let i = 0; i < carousels.length; i++) {
    carousel(carousels[i]);
};

// Modal images

const images = document.images;
const page = body.querySelector(".page");
const modal = body.querySelector(".modal");
const modalClose = body.querySelector(".modal-close");
const modalContent = body.querySelector(".modal-content");

let modalState = getComputedStyle(modal);

const modalTransition = getComputedStyle(html).getPropertyValue("--modal-transition");
const modalTransitionMs = parseFloat(modalTransition) * 1000;

function openModal(image) {
    image.addEventListener("click", () => {
        if (modalState.getPropertyValue("display") == "none") {
            body.classList.add("unclicable");
            modal.classList.add("show-modal");
            modalContent.src = image.src;

            modalContent.addEventListener("load", () => {
                modalContent.width /= window.devicePixelRatio;
                getModalDimensions();
                setModalSlider();
                centerScroll();
            }, {
                once: true
            });

            setTimeout(() => {
                modal.classList.toggle("fade-modal");
            }, "100");

            setTimeout(() => {
                body.classList.remove("unclicable");
                page.classList.add("hide-page");
                html.classList.add("hide-scroll");
            }, modalTransitionMs);
        }
    });
};

function closeModal() {
    body.classList.add("unclicable");
    page.classList.remove("hide-page");
    html.classList.remove("hide-scroll");
    modal.classList.toggle("fade-modal");

    setTimeout(() => {
        body.classList.remove("unclicable");
        modal.classList.remove("show-modal");
        modalContent.removeAttribute("src");
        modalContent.removeAttribute("width");
    }, modalTransitionMs);
};

function centerScroll() {
    modal.scrollLeft = (modal.scrollWidth - modal.clientWidth) / 2;
    modal.scrollTop = (modal.scrollHeight - modal.clientHeight) / 2;
};

for (let i = 0; i < images.length; i++) {
    openModal(images[i]);
};

modalClose.addEventListener("click", () => {
    closeModal();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalState.getPropertyValue("display") !== "none") {
        closeModal();
    }
});

function panModal() {
    const startPoint = {
        x: 0,
        y: 0
    };
    let panning = false;

    const panStart = (event) => {
        event.preventDefault();
        panning = true;
        startPoint.x = modal.scrollLeft + event.clientX;
        startPoint.y = modal.scrollTop + event.clientY;
    };

    const panMove = (event) => {
        if (!panning) return;
        modal.scrollTo(
            startPoint.x - event.clientX,
            startPoint.y - event.clientY
        );
        modalContent.style.cursor = "grabbing";
    };

    const panEnd = () => {
        panning = false;
        modalContent.style.cursor = "grab";
    };

    modalContent.addEventListener("pointerdown", panStart);
    addEventListener("pointermove", panMove);
    addEventListener("pointerup", panEnd);
};

if (window.matchMedia("(pointer: fine)").matches) {
    panModal();
};

// Zoom image

const modalSlider = body.querySelector(".modal-slider");

let originalWidth,
    originalHeight;

function getModalDimensions() {
    originalWidth = modalContent.width;
    originalHeight = modalContent.height;
};

function setModalSlider() {
    modalSliderMin();
    modalSlider.max = originalWidth;
    modalSlider.value = originalWidth;
};

function modalSliderMin() {
    const modalProportion = originalWidth / originalHeight;
    const windowProportion = window.innerWidth / window.innerHeight;
    const portrait = windowProportion < 1 ? "true" : "false";
    const minimumWidth = window.innerHeight / originalHeight * originalWidth;

    if (originalWidth < window.innerWidth && originalHeight < window.innerHeight) {
        modalSlider.min = originalWidth;
    }

    if (portrait == "true") {
        if (modalProportion < windowProportion) {
            modalSlider.min = minimumWidth;
        } else {
            modalSlider.min = window.innerWidth;
        }
    }

    if (portrait == "false") {
        if (modalProportion > windowProportion) {
            modalSlider.min = window.innerWidth;
        } else {
            modalSlider.min = minimumWidth;
        }
    }
};

function updateSlider() {
    const oldRange = modalSlider.max - modalSlider.min;
    const oldValueShift = modalSlider.value - modalSlider.min;
    const delta = oldRange / oldValueShift;

    modalSliderMin();

    const newRange = modalSlider.max - modalSlider.min;
    const newValueShift = newRange / delta;

    modalSlider.value = Number(modalSlider.min) + newValueShift;
    modalContent.width = modalSlider.value;
};

window.onresize = function () {
    if (modalState.getPropertyValue("display") !== "none") {
        updateSlider();
    }
};

function zoomModal() {
    const oldWidth = modalContent.width;
    const oldHeight = modalContent.height;

    const x = modal.scrollLeft + modal.clientWidth / 2;
    const y = modal.scrollTop + modal.clientHeight / 2;

    modalContent.width = modalSlider.value;

    const newWidth = modalContent.width;
    const newHeight = modalContent.height;

    const ratioX = newWidth / oldWidth;
    const ratioY = newHeight / oldHeight;

    const xNew = x * ratioX;
    const yNew = y * ratioY;

    modal.scrollTo({
        left: xNew - modal.clientWidth / 2,
        top: yNew - modal.clientHeight / 2
    });
};

modalSlider.addEventListener("input", () => {
    zoomModal();
});

// console.log("x =" + " " + x);
