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
    
    // Initialize dropdown handlers after menu is opened
    initializeMobileDropdowns();
    
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
    
    // Close all dropdowns when closing mobile menu
    const dropdownMenus = document.querySelectorAll('.mobile-nav .nav-dropdown-menu');
    const dropdownToggles = document.querySelectorAll('.mobile-nav .nav-dropdown-toggle');
    
    dropdownMenus.forEach(menu => menu.classList.remove('show'));
    dropdownToggles.forEach(toggle => toggle.setAttribute('aria-expanded', 'false'));
    
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
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a:not(.nav-dropdown-toggle)');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Close menu when navigating to internal pages
      if (this.hostname === window.location.hostname) {
        closeMobileMenu();
      }
    });
  });
  
  // Initialize mobile dropdown accordions
  function initializeMobileDropdowns() {
    const mobileDropdownToggles = document.querySelectorAll('.mobile-nav .nav-dropdown-toggle');
    
    // Remove any existing event listeners first
    mobileDropdownToggles.forEach(toggle => {
      toggle.removeEventListener('click', handleMobileDropdown);
      toggle.addEventListener('click', handleMobileDropdown);
    });
  }
  
  // Handle mobile dropdown click
  function handleMobileDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const dropdown = this.closest('.nav-dropdown');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    const isOpen = menu.classList.contains('show');
    
    
    // Close all other dropdowns first
    const allMobileDropdowns = document.querySelectorAll('.mobile-nav .nav-dropdown-toggle');
    allMobileDropdowns.forEach(otherToggle => {
      if (otherToggle !== this) {
        const otherDropdown = otherToggle.closest('.nav-dropdown');
        const otherMenu = otherDropdown.querySelector('.nav-dropdown-menu');
        otherMenu.classList.remove('show');
        otherToggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Toggle current dropdown
    if (isOpen) {
      menu.classList.remove('show');
      this.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.add('show');
      this.setAttribute('aria-expanded', 'true');
    }
  }
  
  // Initialize dropdowns on page load
  initializeMobileDropdowns();
});