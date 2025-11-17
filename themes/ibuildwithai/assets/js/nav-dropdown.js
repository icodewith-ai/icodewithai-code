/**
 * Navigation Dropdown JavaScript
 * Handles desktop and mobile dropdown behavior
 */

class NavDropdown {
  constructor() {
    this.dropdowns = document.querySelectorAll('.nav-dropdown');
    this.init();
  }

  init() {
    // Add click handlers for mobile/touch devices (but not in mobile menu)
    this.dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.nav-dropdown-toggle');
      const menu = dropdown.querySelector('.nav-dropdown-menu');
      
      if (toggle && menu) {
        // Only add click handlers if not in mobile menu
        if (!dropdown.closest('.mobile-nav')) {
          // Handle click/touch events for mobile
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleDropdown(dropdown);
          });
        
          // Close dropdown when clicking outside
          document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
              this.closeDropdown(dropdown);
            }
          });
        
          // Handle keyboard navigation
          toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.toggleDropdown(dropdown);
            } else if (e.key === 'Escape') {
              this.closeDropdown(dropdown);
            }
          });
        }
      }
    });
  }

  toggleDropdown(dropdown) {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    const isOpen = menu.classList.contains('show');
    
    // Close all other dropdowns first
    this.closeAllDropdowns();
    
    if (!isOpen) {
      this.openDropdown(dropdown);
    }
  }

  openDropdown(dropdown) {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    
    menu.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
  }

  closeDropdown(dropdown) {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }

  closeAllDropdowns() {
    this.dropdowns.forEach(dropdown => {
      this.closeDropdown(dropdown);
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NavDropdown();
});

// Export for potential use in other scripts
window.NavDropdown = NavDropdown;