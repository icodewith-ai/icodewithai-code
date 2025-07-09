# Mobile Menu Implementation Plan - v1.2.4

## Overview
Implement a mobile menu that activates at the tablet breakpoint (992px) and below, featuring a hamburger menu toggle, dark overlay, and includes the logo within the menu overlay.

## Current State Analysis

### Breakpoints (from `_mixins.scss`)
- Mobile: max-width 768px (`$breakpoint-mobile`)
- Tablet: max-width 992px (`$breakpoint-tablet`) 
- Desktop: min-width 993px

### Current Header Structure
- Located in `themes/bymarcelolewin/layouts/partials/header.html`
- Contains logo, environment badge, and navigation
- Simple horizontal layout

## Requirements

### Functional Requirements
1. **Breakpoint Activation**: Mobile menu should activate at tablet breakpoint (992px) and below
2. **Toggle Mechanism**: Hamburger menu to open, X icon to close
3. **Logo Integration**: Include logo in the mobile menu overlay (since it covers the header)
4. **Dark Overlay**: Full-screen dark overlay similar to attached reference image
5. **Menu Items**: All navigation items should be accessible in mobile menu

### Visual Requirements (Based on Reference Image)
- Full-screen dark overlay with semi-transparent background
- Centered navigation items with large, readable text
- Logo positioned at top of menu
- Clean, minimalist design with good spacing
- Smooth transition animations

## Implementation Plan

### Phase 1: HTML Structure Updates

#### 1.1 Update Header Template (`themes/bymarcelolewin/layouts/partials/header.html`)
- Add mobile menu toggle button (hamburger icon)
- Add mobile menu overlay container
- Include logo in mobile menu overlay
- **Reuse existing navigation loop** - Mobile menu will use the same `{{ range .Site.Menus.main }}` loop as desktop navigation for single-source updates

#### 1.2 Structure Changes
```html
<!-- Mobile Menu Toggle Button -->
<button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
</button>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu-overlay">
  <div class="mobile-menu-content">
    <!-- Logo in mobile menu -->
    <div class="mobile-menu-logo">
      <img src="/images/logo-bml.png" alt="By Marcelo Lewin">
    </div>
    
    <!-- Navigation items (same source as desktop) -->
    <nav class="mobile-nav">
      {{ range .Site.Menus.main }}
        {{ if eq .Name "Discord" }}
          <a href="{{ .URL }}" class="btn-primary" target="_blank">{{ .Name }}</a>
        {{ else }}
          <a href="{{ .URL }}">{{ .Name }}</a>
        {{ end }}
      {{ end }}
    </nav>
    
    <!-- Close button -->
    <button class="mobile-menu-close" aria-label="Close navigation menu">
      <span class="close-icon">×</span>
    </button>
  </div>
</div>
```

### Phase 2: CSS Implementation

#### 2.1 Mobile Menu Toggle (Hamburger) - `assets/scss/_components.scss`
- **Follow existing patterns**: Use existing variables (`$neutral-100`, `$transition-fast`, `$spacing-*`)
- **Naming convention**: `.mobile-menu-toggle` following BEM-like structure
- **Hide by default, show only on tablet-down breakpoint**
- **Animated hamburger with 3 lines that transform to X when active**
- **Positioned in header layout using existing spacing variables**

#### 2.2 Mobile Menu Overlay - `assets/scss/_components.scss`
- **Use existing backdrop pattern**: `background-color: rgba($neutral-900, $opacity-backdrop)`
- **Z-index system**: Add `$z-index-mobile-menu: 200` to variables, higher than header
- **Transitions**: Use existing `$transition-fast` for smooth animations
- **Full-screen fixed overlay, hidden by default, shown when active**

#### 2.3 Mobile Menu Content Layout
- **Spacing**: Use existing spacing variables (`$spacing-lg`, `$spacing-xl`)
- **Typography**: Use existing font size variables (`$font-size-xl`, `$font-size-2xl`)
- **Centered vertically and horizontally**
- **Logo at top using existing logo styling patterns**
- **Navigation items with large, readable text**
- **Close button positioned appropriately**

#### 2.4 Navigation Items Styling
- **Reuse existing button system**: Discord button will use existing `.btn-primary` class
- **Typography**: Use existing font variables for consistent sizing
- **Colors**: Use existing color variables (`$primary-500`, `$neutral-100`)
- **Hover effects**: Follow existing hover patterns with primary color
- **Touch-friendly**: Use existing button height variables for adequate touch targets

### Phase 3: Responsive Behavior

#### 3.1 Update `assets/scss/_responsive.scss`
- Use `@include tablet-down` instead of `@include mobile-only`
- Hide desktop navigation at tablet breakpoint and below
- Show mobile menu toggle at tablet breakpoint and below
- Ensure proper header layout adjustments

#### 3.2 Breakpoint Strategy
```scss
@include tablet-down {
  // Hide desktop navigation
  .nav { display: none; }
  
  // Show mobile menu toggle
  .mobile-menu-toggle { display: flex; }
  
  // Header layout adjustments
  .header {
    justify-content: space-between;
    padding: $spacing-sm;
  }
}

@include desktop-up {
  // Hide mobile menu elements
  .mobile-menu-toggle { display: none; }
  .mobile-menu-overlay { display: none !important; }
}
```

### Phase 4: JavaScript Functionality

#### 4.1 Create Mobile Menu Script (`assets/js/mobile-menu.js`)
- Toggle mobile menu overlay visibility
- Handle hamburger to X animation
- Close menu when clicking outside content area
- Handle escape key to close menu
- Prevent body scroll when menu is open

#### 4.2 Event Handlers
- Click on hamburger button: Open menu
- Click on close button: Close menu
- Click on overlay background: Close menu
- Escape key: Close menu
- Menu item click: Close menu and navigate

#### 4.3 Accessibility Features
- Proper ARIA attributes
- Focus management
- Keyboard navigation support
- Screen reader compatibility

### Phase 5: Integration

#### 5.1 Update Base Template (`themes/bymarcelolewin/layouts/_default/baseof.html`)
- Include mobile menu JavaScript file
- Ensure proper script loading order

#### 5.2 Asset Pipeline
- Add mobile menu JS to Hugo asset pipeline
- Minify and fingerprint for production
- Include in build process

## File Changes Required

### New Files
- `assets/js/mobile-menu.js` - Mobile menu JavaScript functionality

### Modified Files
- `themes/bymarcelolewin/layouts/partials/header.html` - Add mobile menu HTML
- `assets/scss/_variables.scss` - Add mobile menu z-index variable (`$z-index-mobile-menu: 200`)
- `assets/scss/_components.scss` - Add mobile menu styles following existing patterns
- `assets/scss/_responsive.scss` - Update responsive behavior
- `themes/bymarcelolewin/layouts/_default/baseof.html` - Include mobile menu script

### CSS Standards Compliance
- **Variables**: Only add `$z-index-mobile-menu: 200` to maintain z-index hierarchy
- **Existing Components**: Reuse `.btn-primary`, existing spacing, colors, and transitions
- **Naming Convention**: Follow existing BEM-like patterns (`.mobile-menu-toggle`, `.mobile-menu-overlay`)
- **File Organization**: Add components to `_components.scss` with proper section headers
- **Responsive**: Use existing mixins (`@include tablet-down`, `@include desktop-up`)

## Technical Considerations

### Maintainability
- **Single Source Navigation**: Both desktop and mobile menus use the same Hugo menu system (`{{ range .Site.Menus.main }}`)
- **DRY Principle**: No code duplication - update navigation items in one place (Hugo config)
- **Consistent Logic**: Same templating logic for special items (Discord button) in both menus
- **CSS Standards Compliance**: Follow existing CSS patterns, naming conventions, and reuse existing components
- **Variable Consistency**: Use existing SCSS variables for spacing, colors, transitions, and z-index values

### Performance
- Mobile menu overlay hidden by default to avoid render blocking
- Efficient JavaScript with event delegation
- CSS transitions for smooth animations

### Accessibility
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management when opening/closing menu
- Proper color contrast for readability

### Browser Compatibility
- CSS Grid/Flexbox for layout (modern browser support)
- CSS transforms for animations
- Fallbacks for older browsers if needed

### Mobile Experience
- Touch-friendly button sizes (minimum 44px)
- Smooth scrolling disabled when menu open
- Proper viewport handling
- Fast tap response times

## Testing Checklist

### Functional Testing
- [ ] Menu opens on hamburger button click
- [ ] Menu closes on X button click
- [ ] Menu closes on outside click
- [ ] Menu closes on escape key
- [ ] Navigation items work correctly
- [ ] Logo displays properly in menu

### Responsive Testing
- [ ] Menu activates at 992px and below
- [ ] Desktop navigation hidden at tablet/mobile
- [ ] Mobile menu hidden at desktop
- [ ] Header layout adjusts properly
- [ ] Menu overlay covers entire viewport

### Cross-browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Color contrast
- [ ] ARIA attributes

## Success Criteria

1. **Breakpoint Activation**: Mobile menu successfully activates at tablet breakpoint (992px) and below
2. **Visual Design**: Menu matches reference image with dark overlay and centered content
3. **Logo Integration**: Logo appears in mobile menu overlay
4. **Smooth Animations**: Hamburger transforms to X, menu fades in/out smoothly
5. **Accessibility**: Meets WCAG 2.1 AA standards
6. **Performance**: No negative impact on page load times
7. **Cross-browser**: Works consistently across all major browsers

## Risk Assessment

### Low Risk
- CSS styling and layout
- Basic JavaScript functionality
- Hugo asset pipeline integration

### Medium Risk
- Cross-browser compatibility
- Mobile touch interactions
- Accessibility compliance

### High Risk
- Complex animation timing
- Z-index conflicts with existing elements
- Performance on slower devices

## Timeline Estimate

- **Phase 1** (HTML): 30 minutes
- **Phase 2** (CSS): 1-2 hours
- **Phase 3** (Responsive): 30 minutes
- **Phase 4** (JavaScript): 1-1.5 hours
- **Phase 5** (Integration): 15 minutes
- **Testing & Refinement**: 30-45 minutes

**Total Estimated Time**: 3.5-4.5 hours

## Notes

- Reference image shows centered menu items with large text
- Logo should be positioned at top of mobile menu
- Menu overlay should cover the entire viewport
- Consider adding subtle animations for enhanced user experience
- Ensure menu items have adequate touch targets for mobile use 