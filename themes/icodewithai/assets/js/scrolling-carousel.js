/**
 * Scrolling Carousel Component
 *
 * Infinite horizontal scrolling carousel with configurable auto-scroll, speed, direction,
 * and card dimensions. Supports hover pause/resume and respects reduced motion preferences.
 *
 * Features:
 * - Infinite seamless scrolling with item cloning
 * - Configurable scroll behavior (auto/none), speed (slow/fast), direction (left/right)
 * - Dynamic card dimensions via width/height parameters
 * - Pause on hover/touch, resume on mouse leave
 * - Reduced motion support for accessibility
 * - Smooth 60fps animation using requestAnimationFrame
 */
(function() {
    'use strict';

    // Configuration constants
    const SPEED_SLOW = 30; // pixels per second
    const SPEED_FAST = 60; // pixels per second
    const CLONE_MULTIPLIER = 2; // How many times to clone the items

    // Find all carousel components on the page
    const carousels = document.querySelectorAll('[data-carousel]');

    if (!carousels.length) return;

    /**
     * Initialize a single carousel instance
     */
    function initCarousel(carousel) {
        const track = carousel.querySelector('[data-carousel-track]');
        const items = track.querySelectorAll('[data-carousel-item]');

        if (!items.length) {
            console.warn('Scrolling carousel: No items found in carousel', carousel);
            return;
        }

        // Read configuration from data attributes
        const config = {
            scroll: carousel.dataset.scroll || 'auto',
            speed: carousel.dataset.speed || 'slow',
            direction: carousel.dataset.direction || 'left',
            width: carousel.dataset.width || '300px',
            height: carousel.dataset.height || '200px'
        };

        // Apply dynamic dimensions to all carousel items
        applyDimensions(carousel, config.width, config.height);

        // Clone items for infinite scroll effect
        cloneItems(track, items);

        // Initialize scrolling if auto-scroll is enabled
        if (config.scroll === 'auto') {
            // Check for reduced motion preference
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (!prefersReducedMotion) {
                startScrolling(carousel, track, config);
            }
        }
    }

    /**
     * Apply dynamic width and height to all carousel items using CSS custom properties
     */
    function applyDimensions(carousel, width, height) {
        carousel.style.setProperty('--carousel-item-width', width);
        carousel.style.setProperty('--carousel-item-height', height);
    }

    /**
     * Clone carousel items for seamless infinite scrolling
     * Creates 2 additional sets of items (original + 2 clones = 3 total sets)
     */
    function cloneItems(track, originalItems) {
        const itemsArray = Array.from(originalItems);

        // Clone items CLONE_MULTIPLIER times
        for (let i = 0; i < CLONE_MULTIPLIER; i++) {
            itemsArray.forEach(function(item) {
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true'); // Hide clones from screen readers
                track.appendChild(clone);
            });
        }
    }

    /**
     * Start the infinite scrolling animation
     */
    function startScrolling(carousel, track, config) {
        let animationId = null;
        let lastTimestamp = null;
        let isPaused = false;

        // Calculate scroll speed in pixels per millisecond
        const speedPxPerMs = (config.speed === 'fast' ? SPEED_FAST : SPEED_SLOW) / 1000;
        const directionMultiplier = config.direction === 'right' ? 1 : -1;

        // Calculate the width of one complete set of original items
        const items = track.querySelectorAll('[data-carousel-item]');
        const originalItemCount = items.length / (CLONE_MULTIPLIER + 1);
        let setWidth = 0;

        // Get the gap value from the track's computed style
        const trackStyle = window.getComputedStyle(track);
        const gap = parseFloat(trackStyle.gap) || parseFloat(trackStyle.columnGap) || 0;

        // Calculate total width of one set including gaps
        for (let i = 0; i < originalItemCount; i++) {
            const item = items[i];
            setWidth += item.offsetWidth;
        }

        // Add gaps: there should be (originalItemCount - 1) gaps between items,
        // plus 1 gap after the last item (before the set repeats)
        setWidth += gap * originalItemCount;

        // Initialize scroll position based on direction
        // For right scrolling, start at negative setWidth so it scrolls into view from left
        let scrollPosition = config.direction === 'right' ? -setWidth : 0;

        /**
         * Animation loop using requestAnimationFrame
         */
        function animate(timestamp) {
            if (!lastTimestamp) {
                lastTimestamp = timestamp;
            }

            if (!isPaused) {
                const deltaTime = timestamp - lastTimestamp;
                const distance = speedPxPerMs * deltaTime * directionMultiplier;

                scrollPosition += distance;

                // Reset position for infinite loop using modulo for smoother wrapping
                if (config.direction === 'left') {
                    // Scrolling left (negative direction)
                    // When we've scrolled past one complete set, wrap back
                    if (scrollPosition <= -setWidth) {
                        scrollPosition = scrollPosition % -setWidth;
                    }
                } else {
                    // Scrolling right (positive direction)
                    // When we've scrolled past zero, wrap back
                    if (scrollPosition >= 0) {
                        scrollPosition = scrollPosition % setWidth - setWidth;
                    }
                }

                // Apply transform
                track.style.transform = `translateX(${scrollPosition}px)`;
            }

            lastTimestamp = timestamp;
            animationId = requestAnimationFrame(animate);
        }

        // Start animation
        animationId = requestAnimationFrame(animate);

        // Pause on hover (desktop)
        carousel.addEventListener('mouseenter', function() {
            isPaused = true;
        });

        carousel.addEventListener('mouseleave', function() {
            isPaused = false;
            lastTimestamp = null; // Reset timestamp to prevent jumps
        });

        // Pause on touch (mobile)
        carousel.addEventListener('touchstart', function() {
            isPaused = true;
        }, { passive: true });

        carousel.addEventListener('touchend', function() {
            isPaused = false;
            lastTimestamp = null; // Reset timestamp to prevent jumps
        }, { passive: true });

        // Store animation ID for potential cleanup
        carousel._carouselAnimationId = animationId;
    }

    // Initialize all carousels on the page
    carousels.forEach(initCarousel);

    // Cleanup on page unload (stop animations)
    window.addEventListener('beforeunload', function() {
        carousels.forEach(function(carousel) {
            if (carousel._carouselAnimationId) {
                cancelAnimationFrame(carousel._carouselAnimationId);
            }
        });
    });
})();
