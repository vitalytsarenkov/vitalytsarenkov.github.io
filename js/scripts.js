"use strict";

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
        sidebar.classList.add("full-opacity");
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
    sidebar.classList.remove("full-opacity");

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
    let newMode = currentMode === "dark" ? "light" : "dark",
        newAriaLabel = newMode === "dark" ? "Change to light mode" : "Change to dark mode";

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

const modalLoading = body.querySelector(".modal-loading");
const loadingIndicator = body.querySelector(".loading-indicator");

let loading = "loading",
    counter = 0;

function loadingModal() {
    loadingIndicator.innerHTML = loading;

    if (counter < 3) {
        loading = loading + ".";
        counter++;
    } else {
        loading = "loading";
        counter = 0;
    }
};

setInterval(loadingModal, 250);

function openModal(image) {
    image.addEventListener("click", () => {
        if (modalState.getPropertyValue("display") == "none") {
            body.classList.add("unclicable");
            modal.classList.add("show-modal");
            modalLoading.classList.add("show-loading");
            modalContent.classList.add("fit-content");
            modalContent.src = image.src;

            modalContent.addEventListener("load", () => {
                modalContent.width /= window.devicePixelRatio;
                getModal();
                updateModal();
                centerModal();
                getScrollPosition();
                modalLoading.classList.remove("show-loading");
                modalContent.classList.add("full-opacity");
            }, {
                once: true
            });

            setTimeout(() => {
                modal.classList.add("full-opacity");
            }, "100");

            setTimeout(() => {
                body.classList.remove("unclicable");
                page.classList.add("zero-opacity");
                html.classList.add("hide-scroll");
            }, modalTransitionMs);
        }
    });
};

function closeModal() {
    body.classList.add("unclicable");
    page.classList.remove("zero-opacity");
    html.classList.remove("hide-scroll");
    modal.classList.remove("full-opacity");

    setTimeout(() => {
        body.classList.remove("unclicable");
        modal.classList.remove("show-modal");
        modalContent.classList.remove("full-opacity");
        clearModal();
        modalContent.removeAttribute("src");
        modalContent.removeAttribute("width");
    }, modalTransitionMs);
};

function centerModal() {
    modal.scrollLeft = (modal.scrollWidth - window.innerWidth) / 2;
    modal.scrollTop = (modal.scrollHeight - window.innerHeight) / 2;
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
        modalContent.classList.add("grabbing");
    };

    const panEnd = () => {
        panning = false;
        modalContent.classList.remove("grabbing");
    };

    modalContent.addEventListener("pointerdown", panStart);
    addEventListener("pointermove", panMove);
    addEventListener("pointerup", panEnd);
};

if (window.matchMedia("(pointer: fine)").matches) {
    panModal();
};

// Zoom image

const zoom = body.querySelector(".zoom");
const zoomOut = body.querySelector(".zoom-out");
const zoomIn = body.querySelector(".zoom-in");

let originalWidth,
    originalHeight,
    modalScrollLeft,
    modalScrollTop;

function getModal() {
    originalWidth = modalContent.width;
    originalHeight = modalContent.height;
};

function updateModal() {
    if (originalWidth < window.innerWidth && originalHeight < window.innerHeight) {
        zoom.classList.add("no-zoom");
    } else if (originalWidth == window.innerWidth || originalHeight == window.innerHeight) {
        zoom.classList.add("no-zoom");
    } else {
        zoom.classList.remove("no-zoom");
    }

    if (modalContent.classList.contains("fit-content")) {
        resetScrollPosition();
    } else {
        modalContent.classList.remove("fit-width");
        modalContent.classList.remove("fit-height");
        zoomModalOut();
    }
};

function clearModal() {
    modalContent.classList.remove("fit-width");
    modalContent.classList.remove("fit-height");
    modalContent.classList.remove("fit-content");
    zoom.classList.remove("no-zoom");
};

function zoomModalOut() {
    getScrollPosition();

    const modalProportion = originalWidth / originalHeight;
    const windowProportion = window.innerWidth / window.innerHeight;
    const portrait = windowProportion < 1 ? "true" : "false";

    if (portrait == "true") {
        if (modalProportion > windowProportion) {
            modalContent.classList.add("fit-width");
        } else {
            modalContent.classList.add("fit-height");
        }
    }

    if (portrait == "false") {
        if (modalProportion < windowProportion) {
            modalContent.classList.add("fit-height");
        } else {
            modalContent.classList.add("fit-width");
        }
    }

    modalContent.classList.remove("fit-content");
};

function zoomModalIn() {
    getScrollPosition();
    modalContent.classList.add("fit-content");
    modalContent.classList.remove("fit-width");
    modalContent.classList.remove("fit-height");
    resetScrollPosition();
};

function getScrollPosition() {
    if (modalContent.classList.contains("fit-content")) {
        modalScrollLeft = modal.scrollLeft + window.innerWidth / 2;
        modalScrollTop = modal.scrollTop + window.innerHeight / 2;
    }
};

function resetScrollPosition() {
    modal.scrollTo({
        left: modalScrollLeft - window.innerWidth / 2,
        top: modalScrollTop - window.innerHeight / 2
    });
};

window.onresize = function () {
    if (modalState.getPropertyValue("display") !== "none") {
        if (!modalContent.classList.contains("fit-content")) {
            clearModal();
        }
        updateModal();
    }
};

zoomOut.addEventListener("click", () => {
    zoomModalOut();
});

zoomIn.addEventListener("click", () => {
    zoomModalIn();
});

modalContent.addEventListener("click", () => {
    getScrollPosition();
});

modalContent.addEventListener("touchend", () => {
    getScrollPosition();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "-" && modalState.getPropertyValue("display") !== "none") {
        zoomModalOut();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "=" && modalState.getPropertyValue("display") !== "none") {
        zoomModalIn();
    }
});

// console.log("x =" + " " + x);
