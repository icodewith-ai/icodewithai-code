// =============================================================================
// MOBILE MENU
// =============================================================================

(function() {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Get mobile menu elements (ensure single instances)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const body = document.body;
    
    // Check if required elements exist
    if (!mobileMenuToggle || !mobileMenuOverlay) {
      console.warn('Mobile menu elements not found');
      return;
    }
    
    // State management
    let isMenuOpen = false;
    
    // Open mobile menu
    function openMenu() {
      if (isMenuOpen) return;
      
      isMenuOpen = true;
      mobileMenuToggle.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      body.style.overflow = 'hidden'; // Prevent body scroll
      
      // Set focus to toggle button for accessibility
      mobileMenuToggle.focus();
      
      // Add ARIA attributes
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
      mobileMenuOverlay.setAttribute('aria-hidden', 'false');
    }
    
    // Close mobile menu
    function closeMenu() {
      if (!isMenuOpen) return;
      
      isMenuOpen = false;
      mobileMenuToggle.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      body.style.overflow = ''; // Restore body scroll
      
      // Return focus to toggle button for accessibility
      mobileMenuToggle.focus();
      
      // Update ARIA attributes
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      mobileMenuOverlay.setAttribute('aria-hidden', 'true');
    }
    
    // Toggle mobile menu
    function toggleMenu() {
      if (isMenuOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    // Event Listeners
    
    // Toggle button click
    mobileMenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      toggleMenu();
    });
    
    // Overlay background click (close menu when clicking outside content)
    mobileMenuOverlay.addEventListener('click', function(e) {
      // Only close if clicking on the overlay itself, not the content
      if (e.target === mobileMenuOverlay) {
        closeMenu();
      }
    });
    
    // Mobile nav links click (close menu after navigation)
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
    
    // Keyboard event handlers
    document.addEventListener('keydown', function(e) {
      // Close menu on Escape key
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
      
      // Trap focus within menu when open
      if (isMenuOpen && e.key === 'Tab') {
        trapFocus(e);
      }
    });
    
    // Focus trap function for accessibility
    function trapFocus(e) {
      const focusableElements = mobileMenuOverlay.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) {
        // Shift + Tab (backwards)
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab (forwards)
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
    
    // Handle window resize to close menu on desktop
    window.addEventListener('resize', function() {
      // Close menu if window is resized to desktop size
      if (window.innerWidth > 992 && isMenuOpen) {
        closeMenu();
      }
    });
    
    // Initialize ARIA attributes
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuOverlay.setAttribute('aria-hidden', 'true');
    
    // Add role attributes for accessibility
    mobileMenuOverlay.setAttribute('role', 'dialog');
    mobileMenuOverlay.setAttribute('aria-label', 'Mobile navigation menu');
    
    console.log('Mobile menu initialized successfully');
  });
})(); 