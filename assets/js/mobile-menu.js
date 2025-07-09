// =============================================================================
// MOBILE MENU
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  
  if (!mobileMenuToggle || !mobileMenuOverlay) {
    return;
  }
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    const isActive = mobileMenuToggle.classList.contains('active');
    
    if (isActive) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }
  
  // Open mobile menu
  function openMobileMenu() {
    mobileMenuToggle.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    const firstFocusableElement = mobileMenuOverlay.querySelector('a, button');
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
  }
  
  // Close mobile menu
  function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Return focus to toggle button
    mobileMenuToggle.focus();
  }
  
  // Event listeners
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  
  // Close menu when clicking on overlay background
  mobileMenuOverlay.addEventListener('click', function(e) {
    if (e.target === mobileMenuOverlay) {
      closeMobileMenu();
    }
  });
  
  // Close menu with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  
  // Close menu on window resize if desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) { // tablet breakpoint
      closeMobileMenu();
    }
  });
  
  // Handle navigation links
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Close menu when navigating to internal pages
      if (this.hostname === window.location.hostname) {
        closeMobileMenu();
      }
    });
  });
});