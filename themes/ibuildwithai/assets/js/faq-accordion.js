/**
 * FAQ Accordion Component
 * Handles accordion behavior where only one FAQ can be open at a time
 */
(function() {
    // Find all FAQ accordion components on the page
    const accordions = document.querySelectorAll('[data-faq-accordion]');

    if (!accordions.length) return;

    // Initialize each accordion independently
    accordions.forEach(function(accordion) {
        const faqItems = accordion.querySelectorAll('[data-faq-item]');
        const faqToggles = accordion.querySelectorAll('[data-faq-toggle]');

        if (!faqToggles.length) return;

        /**
         * Close all FAQ items in this accordion
         */
        function closeAllFaqs() {
            faqToggles.forEach(function(toggle) {
                const content = document.getElementById(toggle.getAttribute('aria-controls'));
                const item = toggle.closest('[data-faq-item]');

                toggle.setAttribute('aria-expanded', 'false');
                if (content) {
                    content.setAttribute('hidden', '');
                }
                if (item) {
                    item.classList.remove('active');
                }
            });
        }

        /**
         * Open a specific FAQ item
         */
        function openFaq(toggle) {
            const content = document.getElementById(toggle.getAttribute('aria-controls'));
            const item = toggle.closest('[data-faq-item]');

            toggle.setAttribute('aria-expanded', 'true');
            if (content) {
                content.removeAttribute('hidden');
            }
            if (item) {
                item.classList.add('active');
            }
        }

        /**
         * Toggle a specific FAQ item
         */
        function toggleFaq(toggle) {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

            // Close all FAQs first
            closeAllFaqs();

            // If this FAQ wasn't already open, open it
            if (!isExpanded) {
                openFaq(toggle);
            }
        }

        // Add click event listeners to all FAQ toggles
        faqToggles.forEach(function(toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleFaq(toggle);
            });

            // Keyboard support for accessibility
            toggle.addEventListener('keydown', function(e) {
                // Enter or Space to toggle
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFaq(toggle);
                }

                // Arrow key navigation between FAQ items
                const currentIndex = Array.from(faqToggles).indexOf(toggle);

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % faqToggles.length;
                    faqToggles[nextIndex].focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = currentIndex === 0 ? faqToggles.length - 1 : currentIndex - 1;
                    faqToggles[prevIndex].focus();
                }
            });
        });
    });
})();
