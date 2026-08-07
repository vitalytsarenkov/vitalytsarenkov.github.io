'use strict';

const html = document.querySelector('html');
const body = document.querySelector('body');

function preventDefaultScroll(event) {
    event.preventDefault();
}

function disableScroll(element) {
    element.classList.add('hide-scroll');
    body.addEventListener('touchmove', preventDefaultScroll, {
        passive: false,
    });
}

function enableScroll(element) {
    element.classList.remove('hide-scroll');
    body.removeEventListener('touchmove', preventDefaultScroll);
}

// Toggle dark and light modes

function initModeToggle() {
    const modeToggle = body.querySelector('.mode-toggle');

    if (!modeToggle) return;

    const modeTransition = getComputedStyle(html).getPropertyValue('--mode-transition');
    const modeTransitionMs = parseFloat(modeTransition) * 1000;

    function setAriaLabel() {
        if (currentMode === 'dark') {
            modeToggle.setAttribute('aria-label', 'Change to light mode');
        } else {
            modeToggle.setAttribute('aria-label', 'Change to dark mode');
        }
    }

    setAriaLabel();

    modeToggle.addEventListener('click', () => {
        let newMode = currentMode === 'dark' ? 'light' : 'dark';
        let newAriaLabel = newMode === 'dark' ? 'Change to light mode' : 'Change to dark mode';

        modeToggle.setAttribute('aria-label', newAriaLabel);
        html.setAttribute('data-theme', newMode);

        localStorage.setItem('mode', newMode);
        currentMode = newMode;

        body.classList.add('unclicable');
        html.classList.toggle('toggle-mode');

        setTimeout(() => {
            html.classList.toggle('toggle-mode');
            body.classList.remove('unclicable');
        }, modeTransitionMs);
    });
}

initModeToggle();

// Toggle menu

function initSidebar() {
    const sidebar = body.querySelector('.sidebar');

    if (!sidebar) return;

    const menuOpen = body.querySelector('.menu-open');
    const menuClose = body.querySelector('.menu-close');

    let sidebarState = getComputedStyle(sidebar);

    const menuTransition = getComputedStyle(html).getPropertyValue('--menu-transition');
    const menuTransitionMs = parseFloat(menuTransition) * 1000;

    let isMenuOpen;

    function updateScroll() {
        if (sidebarState.getPropertyValue('position') === 'fixed') {
            disableScroll(html);
        } else {
            enableScroll(html);
        }
    }

    window.addEventListener('resize', () => {
        if (isMenuOpen === true) {
            updateScroll();
        }
    });

    menuOpen.addEventListener('click', () => {
        body.classList.add('unclicable');
        isMenuOpen = true;
        disableScroll(html);
        menuOpen.classList.toggle('toggle-menu-open');
        menuClose.classList.toggle('toggle-menu-close');
        sidebar.classList.toggle('toggle-sidebar');

        setTimeout(() => {
            sidebar.classList.add('full-opacity');
        }, 100);

        setTimeout(() => {
            body.classList.remove('unclicable');
        }, menuTransitionMs);
    });

    menuClose.addEventListener('click', () => {
        body.classList.add('unclicable');
        isMenuOpen = false;
        enableScroll(html);
        menuOpen.classList.toggle('toggle-menu-open');
        menuClose.classList.toggle('toggle-menu-close');
        sidebar.classList.remove('full-opacity');

        setTimeout(() => {
            sidebar.classList.toggle('toggle-sidebar');
            body.classList.remove('unclicable');
        }, menuTransitionMs);
    });
}

initSidebar();

// Carousel

function initCarousels() {
    const carousels = body.querySelectorAll('.carousel');

    if (!carousels.length) return;

    function setupCarousel(carousel) {
        const carouselContent = carousel.querySelector('.carousel-content');
        const titles = carousel.querySelectorAll('.carousel-title li');
        const contents = carousel.querySelectorAll('.carousel-content li');
        const skips = carousel.querySelectorAll('.carousel-content li *');
        const positions = carousel.querySelectorAll('.carousel-position li');
        const captions = carousel.querySelectorAll('.carousel-figcaption > li');
        const links = carousel.querySelectorAll('.carousel-link li');
        const left = carousel.querySelector('.left');
        const right = carousel.querySelector('.right');

        let counter = 0;
        let amount = contents.length;
        let currentTitle = titles[0];
        let currentContent = contents[0];
        let currentPosition = positions[0];
        let currentCaption = captions[0];
        let currentLink = links[0];

        function navigate(direction) {
            currentTitle.classList.remove('shown');
            currentContent.classList.remove('shown');
            currentPosition.classList.remove('shown');
            currentCaption.classList.remove('shown');
            if (currentLink) {
                currentLink.classList.remove('shown');
            }

            if (carousel.classList.contains('skip')) {
                skips[counter].removeAttribute('id');
            }

            counter = counter + direction;

            if (direction === -1 && counter < 0) {
                counter = amount - 1;
            }
            if (direction === 1 && !contents[counter]) {
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

            currentTitle.classList.add('shown');
            currentContent.classList.add('shown');
            currentPosition.classList.add('shown');
            currentCaption.classList.add('shown');
            if (currentLink) {
                currentLink.classList.add('shown');
            }

            if (carousel.classList.contains('skip')) {
                skips[counter].setAttribute('id', 'skip');
            }
        }

        left.addEventListener('click', () => {
            navigate(-1);
        });

        right.addEventListener('click', () => {
            navigate(1);
        });

        navigate(0);

        let swipeDistance;
        let swipeStart;
        let swipeEnd;

        carouselContent.addEventListener('pointerdown', (event) => {
            swipeStart = event.clientX;
        });

        carouselContent.addEventListener('pointerup', (event) => {
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
    }

    carousels.forEach(setupCarousel);
}

initCarousels();

// Modal

function initModal() {
    const modal = body.querySelector('.modal');

    if (!modal) return;

    const images = document.images;

    const MODAL_TRANSITION = 200;

    const blockTouchMove = (event) => event.preventDefault();

    const modalClose = body.querySelector('.modal-close');
    const zoomOut = body.querySelector('.zoom-out');
    const zoomIn = body.querySelector('.zoom-in');
    const modalImageContainer = body.querySelector('.modal-image-container');
    const loadingDots = body.querySelector('.loading-dots');
    const modalImage = body.querySelector('.modal-image');

    let modalWidthBefore = 0;
    let modalHeightBefore = 0;

    let modalScrollLeft = 0;
    let modalScrollTop = 0;

    let openedImage = null;

    let imageWidth = 0;
    let imageHeight = 0;

    // Open modal

    let dots = '';
    let dotCounter = 0;
    let loadingIntervalId = null;

    function loadingModal() {
        if (dotCounter < 3) {
            dots += '.';
            dotCounter++;
        } else {
            dots = '';
            dotCounter = 0;
        }

        loadingDots.textContent = dots;
    }

    function openModal(image, eventType) {
        image.addEventListener(eventType, (event) => {
            if (modal.classList.contains('show-modal')) return;
            if (eventType === 'keydown' && event.key !== 'Enter' && event.key !== ' ') return;

            event.preventDefault();
            openedImage = image;

            const scrollbarWidth = window.innerWidth - html.clientWidth;
            html.style.paddingRight = `${scrollbarWidth}px`;

            html.classList.add('hide-scroll');
            body.classList.add('unclicable');

            body.addEventListener('touchmove', blockTouchMove, { passive: false });

            modal.classList.add('show-modal');
            zoomOut.classList.add('disable-zoom');
            zoomIn.classList.add('disable-zoom');
            modalImage.classList.add('fit-content');

            modalImage.draggable = false;

            modalImage.src = image.src;
            modalImage.alt = image.alt;

            if (modalImage.complete) {
                imageLoaded();
            } else {
                modalImageContainer.classList.add('show-loading');

                clearInterval(loadingIntervalId);
                dots = '';
                dotCounter = 0;
                loadingDots.textContent = dots;
                loadingIntervalId = setInterval(loadingModal, 250);

                modalImage.addEventListener('load', imageLoaded, { once: true });
            }

            setTimeout(() => {
                body.classList.remove('unclicable');
            }, MODAL_TRANSITION);
        });
    }

    function imageLoaded() {
        clearInterval(loadingIntervalId);

        modalWidthBefore = modalImageContainer.clientWidth;
        modalHeightBefore = modalImageContainer.clientHeight;

        modalImage.width /= window.devicePixelRatio;
        imageWidth = modalImage.width;
        imageHeight = modalImage.height;

        modalImageContainer.scrollLeft = (imageWidth - modalImageContainer.clientWidth) / 2;
        modalImageContainer.scrollTop = (imageHeight - modalImageContainer.clientHeight) / 2;

        modalScrollLeft = modalImageContainer.scrollLeft;
        modalScrollTop = modalImageContainer.scrollTop;

        if (imageWidth <= window.innerWidth && imageHeight <= window.innerHeight) {
            modalImage.classList.remove('fit-content');
            modalImage.classList.add('fit-size');
        } else if (!isPortrait()) {
            zoomModalOut();
        }

        if (modalImageContainer.classList.contains('show-loading')) {
            modalImageContainer.classList.remove('show-loading');
        }

        updateZoomButtons();

        modalImage.classList.add('full-opacity');

        if (modalImage.classList.contains('fit-size')) {
            modalClose.focus();
        } else {
            modalImageContainer.focus();
        }

        body.removeEventListener('touchmove', blockTouchMove);

        modalObserver.observe(modalImageContainer);
    }

    Array.from(images).forEach((image) => {
        openModal(image, 'click');
        openModal(image, 'keydown');
    });

    // Close modal

    function closeModal() {
        if (body.classList.contains('unclicable')) return;

        body.classList.add('unclicable');
        body.removeEventListener('touchmove', blockTouchMove);

        clearInterval(loadingIntervalId);
        modalObserver.disconnect();

        lastWindowWidth = window.innerWidth;
        lastWindowHeight = window.innerHeight;

        modal.classList.remove('show-modal');

        openedImage.focus({
            preventScroll: true,
        });

        setTimeout(() => {
            clearModal();

            html.classList.remove('hide-scroll');
            html.style.paddingRight = '';

            body.classList.remove('unclicable');
        }, MODAL_TRANSITION);
    }

    function clearModal() {
        clearTimeout(resizeTimeout);
        clearTimeout(scrollTimeout);

        modalImageContainer.removeEventListener('scroll', trackNativeScroll);
        modalImageContainer.classList.remove('show-loading');

        modalWidthBefore = 0;
        modalHeightBefore = 0;

        modalScrollLeft = 0;
        modalScrollTop = 0;

        modalImage.removeEventListener('load', imageLoaded);
        modalImage.classList.remove('fit-size');
        modalImage.classList.remove('fit-width');
        modalImage.classList.remove('fit-height');
        modalImage.classList.remove('fit-content');
        modalImage.classList.remove('grabbing');
        modalImage.classList.remove('full-opacity');
        modalImage.src = '';
        modalImage.removeAttribute('alt');
        modalImage.removeAttribute('width');
    }

    modalClose.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (
            event.key === 'Escape' &&
            modal.classList.contains('show-modal') &&
            !body.classList.contains('unclicable')
        ) {
            closeModal();
        }
    });

    // Pan modal

    function panModal() {
        let isPanning = false;
        let isDragging = false;

        let startX = 0;
        let startY = 0;

        const panStart = (event) => {
            if (!modalImage.classList.contains('fit-content')) return;
            if ((event.pointerType !== 'mouse' && event.pointerType !== 'pen') || event.button !== 0) return;

            event.preventDefault();

            isPanning = true;
            isDragging = false;

            startX = modalImageContainer.scrollLeft + event.clientX;
            startY = modalImageContainer.scrollTop + event.clientY;

            window.addEventListener('pointermove', panMove);
            window.addEventListener('pointerup', panEnd);
            window.addEventListener('pointercancel', panEnd);
        };

        const panMove = (event) => {
            if (!isPanning) return;

            isDragging = true;

            modalImage.classList.add('grabbing');

            modalImageContainer.scrollTo(startX - event.clientX, startY - event.clientY);
        };

        const panEnd = () => {
            isPanning = false;
            isDragging = false;

            modalImage.classList.remove('grabbing');

            window.removeEventListener('pointermove', panMove);
            window.removeEventListener('pointerup', panEnd);
            window.removeEventListener('pointercancel', panEnd);

            getModalScroll();
        };

        modalImage.addEventListener('pointerdown', panStart);
    }

    panModal();

    // Zoom modal

    function zoomModalOut() {
        getModalScroll();

        const imageProportion = imageWidth / imageHeight;
        const windowProportion = window.innerWidth / window.innerHeight;

        modalImage.classList.remove('fit-content');

        if (isPortrait()) {
            if (imageProportion > windowProportion) {
                modalImage.classList.add('fit-width');
            } else {
                modalImage.classList.add('fit-height');
            }
        } else {
            if (imageProportion < windowProportion) {
                modalImage.classList.add('fit-height');
            } else {
                modalImage.classList.add('fit-width');
            }
        }

        updateZoomButtons();

        if (isPortrait()) {
            zoomIn.focus();
        } else {
            modalImageContainer.focus();
        }

        modalImageContainer.scrollTo(0, 0);
    }

    function zoomModalIn() {
        clearTimeout(scrollTimeout);
        modalImageContainer.removeEventListener('scroll', trackNativeScroll);

        modalImage.classList.remove('fit-width', 'fit-height');
        modalImage.classList.add('fit-content');

        modalImageContainer.scrollTo({
            left: modalScrollLeft,
            top: modalScrollTop,
            behavior: 'auto',
        });

        updateZoomButtons();

        modalImageContainer.focus();
    }

    function toggleModalZoom() {
        if (modalImage.classList.contains('fit-content')) {
            zoomModalOut();
        } else {
            zoomModalIn();
        }
    }

    function updateZoomButtons() {
        if (modalImage.classList.contains('fit-size')) {
            zoomOut.classList.add('disable-zoom');
            zoomIn.classList.add('disable-zoom');

            zoomOut.disabled = true;
            zoomIn.disabled = true;
        } else if (modalImage.classList.contains('fit-content')) {
            zoomOut.classList.remove('disable-zoom');
            zoomIn.classList.add('disable-zoom');

            zoomOut.disabled = false;
            zoomIn.disabled = true;
        } else {
            zoomOut.classList.add('disable-zoom');
            zoomIn.classList.remove('disable-zoom');

            zoomOut.disabled = true;
            zoomIn.disabled = false;
        }
    }

    zoomOut.addEventListener('click', () => {
        zoomModalOut();
    });

    zoomIn.addEventListener('click', () => {
        zoomModalIn();
    });

    document.addEventListener('keydown', (event) => {
        if (modalImage.classList.contains('fit-size')) return;
        if (!modal.classList.contains('show-modal')) return;
        if (body.classList.contains('unclicable')) return;

        if (event.key === ' ' && document.activeElement === modalImageContainer) {
            event.preventDefault();
        }

        if (!isPortrait()) {
            if (document.activeElement === modalImageContainer) {
                if (event.key === 'Enter' || event.key === ' ') {
                    toggleModalZoom();
                    return;
                }
            }
        } else {
            if (event.key === '-') {
                zoomModalOut();
            }
            if (event.key === '=') {
                zoomModalIn();
            }
        }
    });

    function zoomToPoint(event) {
        if (modalImage.classList.contains('fit-size')) return;

        if (!modalImage.classList.contains('fit-content')) {
            const imageRect = modalImage.getBoundingClientRect();
            const containerRect = modalImageContainer.getBoundingClientRect();

            const scale = imageWidth / imageRect.width;

            const clickX = event.clientX - imageRect.left;
            const clickY = event.clientY - imageRect.top;

            modalScrollLeft = clickX * scale - containerRect.width / 2;
            modalScrollTop = clickY * scale - containerRect.height / 2;
        }
        toggleModalZoom();
    }

    let lastMouseClickTime = 0;

    let mouseStartX = 0;
    let mouseStartY = 0;

    modalImage.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'touch') return;

        mouseStartX = event.clientX;
        mouseStartY = event.clientY;
    });

    modalImage.addEventListener('click', (event) => {
        if (event.pointerType === 'touch') return;

        if (event.clientX !== mouseStartX || event.clientY !== mouseStartY) return;

        if (event.timeStamp - lastMouseClickTime < 300) {
            lastMouseClickTime = event.timeStamp;
            return;
        }

        lastMouseClickTime = event.timeStamp;
        zoomToPoint(event);
    });

    let tapCounter = 0;
    let tapTimeoutId = null;

    modalImage.addEventListener('pointerup', (event) => {
        if (event.pointerType !== 'touch') return;

        tapCounter++;

        if (tapCounter === 1) {
            clearTimeout(tapTimeoutId);
            tapTimeoutId = setTimeout(() => (tapCounter = 0), 300);
        } else if (tapCounter === 2) {
            clearTimeout(tapTimeoutId);
            tapCounter = 0;
            zoomToPoint(event);
        }
    });

    // Rotate modal

    function updateModalScroll() {
        const modalWidthAfter = modalImageContainer.clientWidth;
        const modalHeightAfter = modalImageContainer.clientHeight;

        const maxScrollLeft = imageWidth - modalWidthAfter;
        const maxScrollTop = imageHeight - modalHeightAfter;

        const centerX = modalScrollLeft + modalWidthBefore / 2;
        const centerY = modalScrollTop + modalHeightBefore / 2;

        const percentX = centerX / imageWidth;
        const percentY = centerY / imageHeight;

        let targetLeft = imageWidth * percentX - modalWidthAfter / 2;
        let targetTop = imageHeight * percentY - modalHeightAfter / 2;

        modalScrollLeft = Math.round(Math.max(0, Math.min(targetLeft, maxScrollLeft)));
        modalScrollTop = Math.round(Math.max(0, Math.min(targetTop, maxScrollTop)));

        modalImageContainer.scrollTo({
            left: modalScrollLeft,
            top: modalScrollTop,
            behavior: 'auto',
        });

        modalWidthBefore = modalWidthAfter;
        modalHeightBefore = modalHeightAfter;
    }

    let lastWindowWidth = window.innerWidth;
    let lastWindowHeight = window.innerHeight;

    let resizeTimeout = null;
    let isRotating = false;

    const modalObserver = new ResizeObserver((_) => {
        if (!modal.classList.contains('show-modal')) return;

        clearTimeout(resizeTimeout);

        const currentWindowWidth = window.innerWidth;
        const currentWindowHeight = window.innerHeight;

        if (currentWindowWidth === lastWindowWidth && currentWindowHeight === lastWindowHeight) return;

        lastWindowWidth = currentWindowWidth;
        lastWindowHeight = currentWindowHeight;

        isRotating = true;

        resizeTimeout = setTimeout(() => {
            requestAnimationFrame(() => {
                if (!modalImage.classList.contains('fit-content')) {
                    modalImage.classList.remove('fit-size', 'fit-width', 'fit-height');

                    if (imageWidth <= window.innerWidth && imageHeight <= window.innerHeight) {
                        modalImage.classList.add('fit-size');
                    } else {
                        zoomModalOut();
                    }

                    updateZoomButtons();
                }

                updateModalScroll();

                setTimeout(() => {
                    isRotating = false;
                }, 0);
            });
        }, 50);
    });

    let scrollTimeout = null;

    function trackNativeScroll() {
        getModalScroll();

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            modalImageContainer.removeEventListener('scroll', trackNativeScroll);
        }, 50);
    }

    modalImage.addEventListener(
        'touchend',
        () => {
            getModalScroll();

            clearTimeout(scrollTimeout);

            modalImageContainer.addEventListener('scroll', trackNativeScroll, { passive: true });

            scrollTimeout = setTimeout(() => {
                modalImageContainer.removeEventListener('scroll', trackNativeScroll);
            }, 50);
        },
        { passive: true },
    );

    // Focus modal

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Tab' || !modal.classList.contains('show-modal')) return;

        const isFitContent = modalImage.classList.contains('fit-content');
        const isFitSize = modalImage.classList.contains('fit-size');

        const firstElement = modalClose;
        let lastElement = modalImageContainer;

        if (isFitSize) {
            lastElement = modalClose;
        } else if (isPortrait() && !isFitContent) {
            lastElement = zoomIn;
        }

        const activeElement = document.activeElement;

        if (
            isFitSize ||
            (activeElement !== modalClose &&
                activeElement !== zoomOut &&
                activeElement !== zoomIn &&
                activeElement !== lastElement)
        ) {
            event.preventDefault();
            firstElement.focus();
            return;
        }

        if (event.shiftKey) {
            if (activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            if (activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });

    // Modal helpers

    function isPortrait() {
        return window.innerWidth / window.innerHeight <= 1;
    }

    function getModalScroll() {
        if (isRotating) return;
        if (!modalImage.classList.contains('fit-content')) return;

        modalScrollLeft = modalImageContainer.scrollLeft;
        modalScrollTop = modalImageContainer.scrollTop;
    }
}

initModal();

// Srcset reload on orientation change

function initAdaptiveImages() {
    const adaptiveImages = body.querySelectorAll('img[srcset]');

    if (!adaptiveImages.length) return;

    const adaptiveImagesObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const img = entry.target;
            const realWidth = entry.contentRect.width;

            if (realWidth <= 0) continue;

            requestAnimationFrame(() => {
                img.setAttribute('sizes', Math.round(realWidth) + 'px');

                const currentSrcset = img.getAttribute('srcset');
                img.setAttribute('srcset', currentSrcset);
            });
        }
    });

    adaptiveImages.forEach((img) => adaptiveImagesObserver.observe(img));
}

initAdaptiveImages();

// Iframes lazy-loading

function initLazyIframes() {
    const iframes = body.querySelectorAll('iframe[data-src]');

    if (!iframes.length) return;

    const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.dataset.src;
                observer.unobserve(iframe);
            }
        });
    };

    const iframeObserver = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });

    iframes.forEach((iframe) => iframeObserver.observe(iframe));
}

initLazyIframes();

// Accessibility navigation

function initSkipNavigation() {
    const skipNavigation = body.querySelector('.skip-navigation');

    if (!skipNavigation) return;

    skipNavigation.addEventListener('click', () => {
        document.getElementById('skip')?.focus();
    });
}

initSkipNavigation();

// Top scroll button

function initScrollTopButton() {
    const topScrollButton = body.querySelector('.top-scroll-button');

    if (!topScrollButton) return;

    function checkScroll() {
        const hasScroll = html.scrollHeight > window.innerHeight;
        body.classList.toggle('has-scroll', hasScroll);
    }

    checkScroll();
    window.addEventListener('resize', checkScroll);

    const logo = body.querySelector('.logo');

    topScrollButton.addEventListener('click', (event) => {
        window.scrollTo({
            top: 0,
        });

        logo?.focus({
            preventScroll: true,
        });

        if (event.pointerType === 'mouse') {
            logo?.blur();
        }
    });
}

initScrollTopButton();
