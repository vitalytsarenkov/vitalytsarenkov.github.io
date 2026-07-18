"use strict";

const html = document.querySelector("html");
const body = document.querySelector("body");

// Test function

function test() {
    alert("!!!");
};

// Toggle menu

const menuOpen = body.querySelector(".menu-open");
const menuClose = body.querySelector(".menu-close");
const sidebar = body.querySelector(".sidebar");
const main = body.querySelector(".main");

let sidebarState = getComputedStyle(sidebar);

const menuTransition = getComputedStyle(html).getPropertyValue("--menu-transition");
const menuTransitionMs = parseFloat(menuTransition) * 1000;

let isMenuOpen;

function preventDefaultScroll(event) {
    event.preventDefault();
}

function disableScroll(element) {
    element.classList.add("hide-scroll");
    body.addEventListener("touchmove", preventDefaultScroll, {
        passive: false
    });
}

function enableScroll(element) {
    element.classList.remove("hide-scroll");
    body.removeEventListener("touchmove", preventDefaultScroll);
}

function updateScroll() {
    if (sidebarState.getPropertyValue("position") === "fixed") {
        disableScroll(html);
    } else {
        enableScroll(html);
    }
}

window.addEventListener("resize", () => {
    if (isMenuOpen === true) {
        updateScroll();
    }
});

menuOpen.addEventListener("click", () => {
    body.classList.add("unclicable");
    isMenuOpen = true;
    disableScroll(html);
    menuOpen.classList.toggle("toggle-menu-open");
    menuClose.classList.toggle("toggle-menu-close");
    sidebar.classList.toggle("toggle-sidebar");

    setTimeout(() => {
        sidebar.classList.add("full-opacity");
    }, 100);

    setTimeout(() => {
        body.classList.remove("unclicable");
    }, menuTransitionMs);
});

menuClose.addEventListener("click", () => {
    body.classList.add("unclicable");
    isMenuOpen = false;
    enableScroll(html);
    menuOpen.classList.toggle("toggle-menu-open");
    menuClose.classList.toggle("toggle-menu-close");
    sidebar.classList.remove("full-opacity");

    setTimeout(() => {
        sidebar.classList.toggle("toggle-sidebar");
        body.classList.remove("unclicable");
    }, menuTransitionMs);
});

// Toggle dark and light modes

const modeToggle = body.querySelector(".mode-toggle");

const modeTransition = getComputedStyle(html).getPropertyValue("--mode-transition");
const modeTransitionMs = parseFloat(modeTransition) * 1000;

function setAriaLabel() {
    if (currentMode === "dark") {
        modeToggle.setAttribute("aria-label", "Change to light mode");
    } else {
        modeToggle.setAttribute("aria-label", "Change to dark mode");
    }
};

setAriaLabel();

modeToggle.addEventListener("click", () => {
    let newMode = currentMode === "dark" ? "light" : "dark";
    let newAriaLabel = newMode === "dark" ? "Change to light mode" : "Change to dark mode";

    modeToggle.setAttribute("aria-label", newAriaLabel);
    html.setAttribute("data-theme", newMode);

    localStorage.setItem("mode", newMode);
    currentMode = newMode;

    body.classList.add("unclicable");
    html.classList.toggle("toggle-mode");

    setTimeout(() => {
        html.classList.toggle("toggle-mode");
        body.classList.remove("unclicable");
    }, modeTransitionMs);
});

// Carousel

const carousels = body.querySelectorAll(".carousel");

function carousel(carousel) {
    const carouselContent = carousel.querySelector(".carousel-content");
    const titles = carousel.querySelectorAll(".carousel-title li");
    const contents = carousel.querySelectorAll(".carousel-content li");
    const skips = carousel.querySelectorAll(".carousel-content li *");
    const positions = carousel.querySelectorAll(".carousel-position li");
    const captions = carousel.querySelectorAll(".carousel-figcaption > li");
    const links = carousel.querySelectorAll(".carousel-link li");
    const left = carousel.querySelector(".left");
    const right = carousel.querySelector(".right");

    let counter = 0;
    let amount = contents.length;
    let currentTitle = titles[0];
    let currentContent = contents[0];
    let currentPosition = positions[0];
    let currentCaption = captions[0];
    let currentLink = links[0];

    function navigate(direction) {
        currentTitle.classList.remove("shown");
        currentContent.classList.remove("shown");
        currentPosition.classList.remove("shown");
        currentCaption.classList.remove("shown");
        if (currentLink) {
            currentLink.classList.remove("shown");
        }

        if (carousel.classList.contains("skip")) {
            skips[counter].removeAttribute("id");
        }

        counter = counter + direction;

        if (direction === -1 &&
            counter < 0) {
            counter = amount - 1;
        }
        if (direction === 1 &&
            !contents[counter]) {
            counter = 0;
        }

        if (titles.length > 1) {
            currentTitle = titles[counter];
        } else {
            currentTitle = titles[0];
        }
        currentContent = contents[counter];
        currentPosition = positions[counter];
        if (captions.length > 1) {
            currentCaption = captions[counter];
        } else {
            currentCaption = captions[0];
        }
        if (links.length > 1) {
            currentLink = links[counter];
        } else {
            currentLink = links[0];
        }

        currentTitle.classList.add("shown");
        currentContent.classList.add("shown");
        currentPosition.classList.add("shown");
        currentCaption.classList.add("shown");
        if (currentLink) {
            currentLink.classList.add("shown");
        }

        if (carousel.classList.contains("skip")) {
            skips[counter].setAttribute("id", "skip");
        }
    };

    left.addEventListener("click", () => {
        navigate(-1);
    });

    right.addEventListener("click", () => {
        navigate(1);
    });

    navigate(0);

    let swipeDistance;
    let swipeStart;
    let swipeEnd;

    carouselContent.addEventListener("pointerdown", (event) => {
        swipeStart = event.clientX;
    });

    carouselContent.addEventListener("pointerup", (event) => {
        swipeEnd = event.clientX;
        swipeDistance = Math.abs(swipeStart - swipeEnd);
        if (swipeDistance > 5) {
            if (swipeEnd > swipeStart) {
                navigate(-1);
            } else {
                navigate(1);
            }
        }
    });
};

for (let i = 0; i < carousels.length; i++) {
    carousel(carousels[i]);
};

// Modal images

let isRotating = false;

const images = document.images;
const page = body.querySelector(".page");
const modal = body.querySelector(".modal");
const modalImageContainer = body.querySelector(".modal-image-container");
const modalClose = body.querySelector(".modal-close");
const modalImage = body.querySelector(".modal-image");

const modalTransition = getComputedStyle(html).getPropertyValue("--modal-transition");
const modalTransitionMs = parseFloat(modalTransition) * 1000;

// Loading indicator

const modalLoading = body.querySelector(".modal-loading");
const loadingDots = body.querySelector(".loading-dots");

let dots = "";
let dotCounter = 0;
let loadingIntervalId = null;

function loadingModal() {
    loadingDots.innerHTML = dots;

    if (dotCounter < 3) {
        dots = dots + ".";
        dotCounter++;
    } else {
        dots = "";
        dotCounter = 0;
    }
};

// Open and close modal images

let activeElement;

function checkPortrait() {
    return (window.innerWidth / window.innerHeight) <= 1;
}

function openModal(image, eventType) {
    image.addEventListener(eventType, (event) => {
        if (!modal.classList.contains("show-modal")) {
            if (eventType === "click" || (eventType === "keydown" && (event.key === "Enter" || event.key === " "))) {

                event.preventDefault();
                activeElement = document.activeElement;

                function setModal() {
                    body.classList.add("unclicable");
                    disableScroll(body);

                    modal.classList.add("show-modal");
                    zoomOut.classList.add("disable-zoom");
                    zoomIn.classList.add("disable-zoom");
                    modalImage.classList.add("fit-content");

                    modalImage.addEventListener("load", imageLoaded, {
                        once: true
                    });

                    modalImage.src = image.src;
                    modalImage.alt = image.alt;

                    if (modalImage.complete) {
                        modalImage.removeEventListener("load", imageLoaded);
                        imageLoaded();
                    } else {
                        clearInterval(loadingIntervalId);
                        dots = "";
                        dotCounter = 0;
                        loadingDots.innerHTML = dots;
                        loadingIntervalId = setInterval(loadingModal, 250);

                        modalImageContainer.classList.add("show-loading");
                    }
                };

                setModal();

                setTimeout(() => {
                    html.classList.add("hide-scroll");
                    page.classList.add("zero-opacity");
                    body.classList.remove("unclicable");
                }, modalTransitionMs);
            }
        }
    });
};

function imageLoaded() {
    clearInterval(loadingIntervalId);
    modalImage.width /= window.devicePixelRatio;

    getModal();
    updateModal();
    centerModal();
    getScrollPosition();
    enableScroll(body);
    disableZoom();

    modalObserver.observe(modalImageContainer);
    modalImageContainer.classList.remove("show-loading");

    modalImage.classList.add("full-opacity");

    if (!modalImage.classList.contains("fit-size")) {
        modalImageContainer.focus();
    } else {
        modalClose.focus();
    }

    if (!checkPortrait() && !modalImage.classList.contains("fit-size")) {
        zoomModalOut();
    }
};

function closeModal() {
    if (body.classList.contains("unclicable")) return;

    clearInterval(loadingIntervalId);
    modalObserver.disconnect();

    body.classList.add("unclicable");
    activeElement.focus({
        preventScroll: true
    });

    html.classList.remove("hide-scroll");
    page.classList.remove("zero-opacity");
    modal.classList.remove("show-modal");
    modalImage.classList.remove("full-opacity");

    enableScroll(body);

    setTimeout(() => {
        clearModal();
        resetModal();
        body.classList.remove("unclicable");
    }, modalTransitionMs);
};

function clearModal() {
    zoomOut.classList.add("disable-zoom");
    zoomIn.classList.add("disable-zoom");

    modalImageContainer.classList.remove("show-loading");

    modalScrollLeft = 0;
    modalScrollTop = 0;

    modalImage.removeEventListener("load", imageLoaded);
    modalImage.src = "";
    modalImage.removeAttribute("alt");
    modalImage.removeAttribute("width");
};

function centerModal() {
    modalImageContainer.scrollLeft = (modalImageContainer.scrollWidth - modalImageContainer.clientWidth) / 2;
    modalImageContainer.scrollTop = (modalImageContainer.scrollHeight - modalImageContainer.clientHeight) / 2;
}

for (let i = 0; i < images.length; i++) {
    openModal(images[i], "click");
    openModal(images[i], "keydown");
};

modalClose.addEventListener("click", () => {
    closeModal();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("show-modal") && !body.classList.contains("unclicable")) {
        closeModal();
    }
});

// Pan modal images

let isDragging = false;

function panModal() {
    const startPoint = {
        x: 0,
        y: 0
    };
    let panning = false;

    const panStart = (event) => {
        if (modalImage.classList.contains("fit-size")) return;

        if (event.pointerType === "mouse" && modalImage.classList.contains("fit-content")) {
            event.preventDefault();
        }

        panning = true;
        isDragging = false;
        startPoint.x = modalImageContainer.scrollLeft + event.clientX;
        startPoint.y = modalImageContainer.scrollTop + event.clientY;
    };

    const panMove = (event) => {
        if (!panning) return;

        isDragging = true;

        modalImageContainer.scrollTo(
            startPoint.x - event.clientX,
            startPoint.y - event.clientY
        );
        if (modalImage.classList.contains("fit-content")) {
            modalImage.classList.add("grabbing");
        }
    };

    const panEnd = () => {
        panning = false;
        modalImage.classList.remove("grabbing");
        getScrollPosition();
    };

    modalImage.addEventListener("pointerdown", panStart);
    addEventListener("pointermove", panMove);
    addEventListener("pointerup", panEnd);
};

if (window.matchMedia("(pointer: fine)").matches) {
    panModal();
};

// Zoom modal images

const zoomOut = body.querySelector(".zoom-out");
const zoomIn = body.querySelector(".zoom-in");

let originalWidth;
let originalHeight;
let modalScrollLeft;
let modalScrollTop;

function getModal() {
    originalWidth = modalImage.width;
    originalHeight = modalImage.height;
};

function updateModal() {
    if (originalWidth < window.innerWidth && originalHeight < window.innerHeight) {
        modalImage.classList.add("fit-size");
    } else if (originalWidth === window.innerWidth && originalHeight < window.innerHeight || originalWidth < window.innerWidth && originalHeight === window.innerHeight) {
        modalImage.classList.add("fit-size");
    } else {
        modalImage.classList.remove("fit-size");
    }

    if (modalImage.classList.contains("fit-content")) {
        resetScrollPosition();
    } else {
        modalImage.classList.remove("fit-width");
        modalImage.classList.remove("fit-height");
        zoomModalOut();
    }
    disableZoom();
};

function resetModal() {
    modalImage.classList.remove("fit-size");
    modalImage.classList.remove("fit-width");
    modalImage.classList.remove("fit-height");
    modalImage.classList.remove("fit-content");
    modalImage.classList.remove("grabbing");
};

function zoomModalOut() {
    getScrollPosition();

    const modalProportion = originalWidth / originalHeight;
    const windowProportion = window.innerWidth / window.innerHeight;
    const isPortrait = checkPortrait();

    if (isPortrait) {
        if (modalProportion > windowProportion) {
            modalImage.classList.add("fit-width");
        } else {
            modalImage.classList.add("fit-height");
        }
    } else {
        if (modalProportion < windowProportion) {
            modalImage.classList.add("fit-height");
        } else {
            modalImage.classList.add("fit-width");
        }
    }

    modalImage.classList.remove("fit-content");

    disableZoom();

    if (isPortrait) {
        zoomIn.focus();
    }
};

function zoomModalIn() {
    getScrollPosition();
    modalImage.classList.add("fit-content");
    modalImage.classList.remove("fit-width");
    modalImage.classList.remove("fit-height");
    resetScrollPosition();
    disableZoom();
    modalImage.focus();
};

function toggleZoom() {
    modalImage.classList.contains("fit-content") ? zoomModalOut() : zoomModalIn();
}

function disableZoom() {
    if (modalImage.classList.contains("fit-size")) {
        zoomOut.classList.add("disable-zoom");
        zoomIn.classList.add("disable-zoom");

        zoomOut.disabled = true;
        zoomIn.disabled = true;

    } else if (modalImage.classList.contains("fit-content")) {
        zoomOut.classList.remove("disable-zoom");
        zoomIn.classList.add("disable-zoom");

        zoomOut.disabled = false;
        zoomIn.disabled = true;

        modalImageContainer.focus();

    } else {
        zoomOut.classList.add("disable-zoom");
        zoomIn.classList.remove("disable-zoom");

        zoomOut.disabled = true;
        zoomIn.disabled = false;
    }
};

function getScrollPosition() {
    if (isRotating) return;

    if (modalImage.classList.contains("fit-content")) {
        const maxScrollLeft = modalImageContainer.scrollWidth - modalImageContainer.clientWidth;
        const maxScrollTop = modalImageContainer.scrollHeight - modalImageContainer.clientHeight;

        modalScrollLeft = maxScrollLeft > 0 ? (modalImageContainer.scrollLeft / maxScrollLeft) : 0;
        modalScrollTop = maxScrollTop > 0 ? (modalImageContainer.scrollTop / maxScrollTop) : 0;
    }
};

function resetScrollPosition() {
    const maxScrollLeft = modalImageContainer.scrollWidth - modalImageContainer.clientWidth;
    const maxScrollTop = modalImageContainer.scrollHeight - modalImageContainer.clientHeight;

    let targetLeft = modalScrollLeft * maxScrollLeft;
    let targetTop = modalScrollTop * maxScrollTop;

    targetLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));
    targetTop = Math.max(0, Math.min(targetTop, maxScrollTop));

    modalImageContainer.scrollTo({
        left: targetLeft,
        top: targetTop
    });
};

const modalObserver = new ResizeObserver((_) => {
    if (!modal.classList.contains("show-modal")) return;

    isRotating = true;

    requestAnimationFrame(() => {
        if (modalImage.classList.contains("fit-content")) {
            updateModal();
        } else {
            resetModal();
            updateModal();
        }

        requestAnimationFrame(() => {
            isRotating = false;
        });
    });
});

zoomOut.addEventListener("click", () => {
    zoomModalOut();
});

zoomIn.addEventListener("click", () => {
    zoomModalIn();
});

document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("show-modal") || body.classList.contains("unclicable")) return;
    if (modalImage.classList.contains("fit-size")) return;

    if (event.key === " " && document.activeElement === modalImageContainer) {
        event.preventDefault();
    }

    if (!checkPortrait()) {
        if (document.activeElement === modalImageContainer) {
            if (event.key === "Enter" || event.key === " ") {
                toggleZoom();
                return;
            }
        }
    } else {
        if (event.key === "-") {
            zoomModalOut();
        }
        if (event.key === "=") {
            zoomModalIn();
        }
    }
});

let lastMouseClickTime = 0;
let tapCounter = 0;
let tapTimeoutId = null;

modalImage.addEventListener("pointerup", (event) => {
    if (modalImage.classList.contains("fit-size")) return;

    getScrollPosition();

    if (event.pointerType === "mouse") {
        if (!isDragging) {
            if (event.timeStamp - lastMouseClickTime < 300) {
                lastMouseClickTime = event.timeStamp;
                return;
            }

            lastMouseClickTime = event.timeStamp;
            toggleZoom();
        }
    } else {
        tapCounter++;

        if (tapCounter === 1) {
            clearTimeout(tapTimeoutId);
            tapTimeoutId = setTimeout(() => tapCounter = 0, 300);
        } else if (tapCounter === 2) {
            clearTimeout(tapTimeoutId);
            tapCounter = 0;
            toggleZoom();
        }
    }
});

// Srcset reload on orientation change

const adaptiveImagesObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
        const img = entry.target;
        const realWidth = entry.contentRect.width;

        if (realWidth <= 0) continue;

        requestAnimationFrame(() => {
            img.setAttribute("sizes", Math.round(realWidth) + "px");

            const currentSrcset = img.getAttribute("srcset");
            img.setAttribute("srcset", currentSrcset);
        });
    }
});

document.querySelectorAll("img[srcset]").forEach(img => {
    adaptiveImagesObserver.observe(img);
});

// Iframes lazy-loading

const iframes = body.getElementsByTagName("iframe");

const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const iframe = entry.target;
            iframe.src = iframe.dataset.src;
            iframeObserver.unobserve(iframe);
        }
    });
};

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

const iframeObserver = new IntersectionObserver(handleIntersect, options);

for (let i = 0; i < iframes.length; i++) {
    iframeObserver.observe(iframes[i]);
};

// Top scroll button visibility control

function checkScroll() {
    const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
    document.body.classList.toggle("has-scroll", hasScroll);
}

checkScroll();
window.addEventListener("resize", checkScroll);

// Accessibility

const logo = body.querySelector(".logo");
const skipNavigation = body.querySelector(".skip-navigation");
const topScrollButton = body.querySelector(".top-scroll-button");

skipNavigation.addEventListener("click", () => {
    document.getElementById("skip")?.focus();
});

topScrollButton?.addEventListener("click", (event) => {
    window.scrollTo({
        top: 0
    });

    logo.focus({
        preventScroll: true
    });

    if (event.pointerType !== "mouse") {
        logo.blur();
    }
});

// Focus trap

document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !modal.classList.contains("show-modal")) return;

    const isPortrait = checkPortrait();
    const hasZoom = modalImage.classList.contains("fit-content");
    const isSmall = modalImage.classList.contains("fit-size");

    const firstElement = modalClose;
    let lastElement = modalImageContainer;

    if (isSmall) {
        lastElement = modalClose;
    } else if (isPortrait && !hasZoom) {
        lastElement = zoomIn;
    }

    const active = document.activeElement;
    const validElements = [modalClose, zoomOut, zoomIn, modalImageContainer];

    if (
        !validElements.includes(active) ||
        (isSmall && active === modalImageContainer) ||
        (isPortrait && !hasZoom && active === modalImageContainer)
    ) {
        event.preventDefault();
        firstElement.focus();
        return;
    }

    if (event.shiftKey) {
        if (active === firstElement) {
            event.preventDefault();
            lastElement.focus();
        }
    } else {
        if (active === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});

// console.log("x =" + " " + x);
