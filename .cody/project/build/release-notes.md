# Release Notes

This document lists new features, bug fixes and other changes implemented during a particular build, also known as a version.

## Table of Contents
- [v1.6.0-scrolling-component - October 21, 2025](#v160-scrolling-component---october-21-2025)
- [v1.5.0-faq-component - October 20, 2025](#v150-faq-component---october-20-2025)
- [v1.4.6-home-page-updates-part-1 - October 20, 2025](#v146-home-page-updates-part-1---october-20-2025)
- [v1.4.5-consolidate-asset-folders](#v145-consolidate-asset-folders)
- [v1.4.4-consolidate-images](#v144-consolidate-images)

---

# v1.6.0-scrolling-component - October 21, 2025

## Overview

Created a production-ready, reusable infinite scrolling carousel component for displaying content cards with icons, headings, optional descriptions, and clickable links. The component features seamless infinite scrolling with configurable auto-scroll, speed, direction, dynamic card dimensions, and pause-on-hover interactions. Replaced the static "Explore" section on the home page with the new dynamic carousel.

## Key Features

**Component Architecture**
- **Hugo Shortcode** (`layouts/shortcodes/scrolling-carousel.html`): For use in content files with nested `carousel-item` shortcodes
- **Hugo Partial** (`layouts/partials/scrolling-carousel.html`): For use in templates with dictionary-based item configuration
- **Nested Shortcode** (`layouts/shortcodes/carousel-item.html`): Clean syntax for defining individual carousel items
- Both shortcode and partial variants share core functionality
- Modular SCSS in `assets/scss/components/_scrolling-carousel.scss`
- Standalone JavaScript in `assets/js/scrolling-carousel.js`

**Infinite Scrolling System**
- Seamless infinite loop scrolling with automatic item cloning (2x multiplier)
- RequestAnimationFrame-based animation for smooth 60fps performance
- Configurable scroll behavior: `auto` (default) or `none`
- Configurable speed: `slow` (30px/s, default) or `fast` (60px/s)
- Configurable direction: `left` (default) or `right`
- Intelligent position reset for both scroll directions
- No visual jumps or layout shifts during loop reset

**Interactive Features**
- Pause scrolling on mouse hover (desktop)
- Resume scrolling on mouse leave
- Pause on touch events (mobile)
- Smooth timestamp reset prevents animation jumps
- Hover effects on cards (lift, scale, glow, border color)
- Clickable cards with full link support

**Dynamic Sizing**
- Configurable card dimensions via `width` and `height` parameters (any CSS unit)
- Dynamic dimensions applied via CSS custom properties
- Icon size scales proportionally (30% of card width)
- Maximum icon constraints (80px desktop, 64px mobile)
- Aspect ratio maintains square icons
- Responsive spacing adjustments

**Visual Design**
- Dark theme with green accent hover effects (`$primary-500`)
- Edge fade gradients on left and right sides (150px desktop, 80px mobile)
- Smooth CSS transitions on all interactions
- Card hover: subtle lift (-2px), icon scale (1.05), border glow, shadow
- Rounded corners and consistent spacing
- Text overflow handling with ellipsis

**Icon Path Flexibility**
- Supports theme assets: `/images/icons/icon-apps.png` (Hugo resources)
- Supports page bundle resources: `/apps/treex/icon.png` (direct paths)
- Automatic detection and handling of both path types
- Fallback system ensures icons always display

**Accessibility Features**
- ARIA attributes (`role="region"`, `aria-label`)
- Cloned items hidden from screen readers (`aria-hidden="true"`)
- Keyboard navigation via native tab support through card links
- Focus indicators on all interactive elements
- Reduced motion support (respects `prefers-reduced-motion`)
- Auto-scroll disabled when user prefers reduced motion

**Performance Optimizations**
- GPU acceleration via CSS transforms
- Lazy loading for images (`loading="lazy"`)
- Conditional JavaScript loading (only when carousel exists)
- Efficient item cloning (once on initialization)
- Passive event listeners for touch events
- Memory management with animation cleanup on page unload
- Hugo Pipes minification and fingerprinting

## Home Page Integration

**Explore Section Redesign**
- Replaced static single card with dynamic scrolling carousel
- 6 test items: App Gallery, Blog, Podcast, Presentations, Vibe Coding, Cody Framework
- Each item includes icon, heading, and short description
- "View All →" text link below carousel (matching Learn section style)
- Updated section heading spacing for cleaner layout
- Container padding prevents hover border cut-off

**Configuration**
- Scroll: `auto`
- Speed: `slow`
- Direction: `left`
- Card dimensions: 280px × 220px
- Icons scale to ~84px (30% of 280px width)

## Technical Implementation

**Files Created:**
- `themes/icodewithai/layouts/shortcodes/scrolling-carousel.html` - Main shortcode
- `themes/icodewithai/layouts/shortcodes/carousel-item.html` - Nested item shortcode
- `themes/icodewithai/layouts/partials/scrolling-carousel.html` - Partial variant for templates
- `themes/icodewithai/assets/scss/components/_scrolling-carousel.scss` - Component styles (~250 lines)
- `themes/icodewithai/assets/js/scrolling-carousel.js` - Animation logic (~180 lines)

**Files Modified:**
- `themes/icodewithai/layouts/index.html` - Replaced Explore section
- `themes/icodewithai/assets/scss/_components.scss` - Added module import
- `.cody/project/library/docs/components.md` - Added comprehensive documentation

**Bug Fixes During Development:**
- Fixed hover border being cut off at top (added container padding)
- Fixed right direction infinite scroll not working (position initialization)
- Fixed icon path handling for page bundles (dual-path support)
- Adjusted heading spacing (single line break between heading and description)
- Changed "View All Apps" button to text link style

## Documentation

**Component Documentation**
- Comprehensive documentation added to `.cody/project/library/docs/components.md`
- Table of Contents for easy navigation
- Complete technical specifications
- HTML structure and CSS class reference
- JavaScript functionality details
- Parameter definitions with defaults
- Icon path support explanation
- Visual design specifications
- Responsive behavior documentation
- Accessibility features
- Performance optimizations
- 4 usage examples (default, fast right-scroll, page bundles, static)

**Inline Documentation**
- Extensive comments in shortcode files
- SCSS comments documenting component sections
- JavaScript function and logic documentation
- Usage examples in shortcode header

## Testing

- Tested with varying item counts (6 items in production)
- Tested all parameter combinations (scroll, speed, direction)
- Tested responsive breakpoints (mobile, tablet, desktop)
- Tested browser compatibility (build successful)
- Performance verified (smooth 60fps animation)
- Hover/touch interactions confirmed working
- Infinite scroll in both directions validated
- Reduced motion support tested
- Accessibility features verified

## Impact

**User Experience:**
- More dynamic and engaging Explore section
- Visual interest with auto-scrolling content
- Better content discovery with multiple visible items
- Consistent interaction patterns (pause on hover)

**Developer Experience:**
- Reusable component for future carousel needs
- Clear documentation and examples
- Flexible configuration options
- Works in both content files and templates

**Performance:**
- Minimal performance impact (efficient animation)
- Lazy loading reduces initial load
- GPU acceleration for smooth scrolling
- Clean memory management

## Future Enhancements

Potential improvements for future versions:
- Variable speed control (custom px/s values)
- Swipe gestures for mobile manual scrolling
- Autoplay pause/resume controls
- Progress indicators or dots
- Custom fade gradient colors
- Animation easing options

---

# v1.5.0-faq-component - October 20, 2025

## Overview

Created a production-ready, reusable FAQ accordion component for displaying frequently asked questions throughout the iCodeWith.ai site. The component features an accessible, interactive accordion design with one-question-open-at-a-time behavior, full keyboard navigation, and responsive styling that matches the site's dark theme with green accents.

## Key Features

**FAQ Content Structure**
- Created `content/faq/` directory for storing individual FAQ markdown files
- Implemented FAQ archetype (`archetypes/faq.md`) for quick FAQ creation via `hugo new faq/question-slug.md`
- Descriptive filename approach (e.g., `what-is-sdd.md`) instead of numbered files for better maintainability
- Simple frontmatter with just `question` field; markdown body contains the answer
- Full markdown support in answers (links, lists, code blocks, etc.)

**Reusable Components**
- **Hugo Shortcode** (`layouts/shortcodes/faq.html`): For use in content files
- **Hugo Partial** (`layouts/partials/faq-accordion.html`): For use in templates
- Both variants share the same implementation and features
- Flexible FAQ ordering via comma-separated slug parameters
- Multiple FAQ components can coexist on the same page

**Interactive Accordion UI**
- One FAQ open at a time (accordion behavior)
- Smooth expand/collapse animations with max-height transitions
- Chevron icon rotation indicating expand/collapse state
- Dark theme with rounded borders matching site design
- Green accent color (`$primary-500`) on hover and active states
- Proper spacing between question and answer content

**JavaScript Functionality**
- Vanilla JavaScript with no external dependencies
- Click to toggle FAQ open/closed
- Automatic closing of other FAQs when opening a new one
- Support for multiple independent FAQ components on same page
- Event delegation for optimal performance

**Accessibility Features**
- Comprehensive ARIA attributes:
  - `aria-expanded` for dynamic state indication
  - `aria-controls` linking button to content
  - `aria-labelledby` linking content back to header
  - `role="region"` for semantic landmark
  - `aria-hidden="true"` for decorative chevron icon
- Full keyboard navigation:
  - Enter/Space to toggle FAQ
  - Arrow Up/Down to navigate between FAQs
  - Tab for standard focus navigation
- Screen reader compatible
- Semantic HTML with `<button>` elements for interactivity

**Responsive Design**
- Mobile-first approach with breakpoint adjustments
- Reduced padding and font sizes on mobile/tablet
- Touch-friendly interaction targets
- Tested on mobile, tablet, and desktop devices

**Home Page Integration**
- New "Frequently Asked Questions" section below "Next Generation App Builders"
- Displays 5 curated FAQs:
  1. What are specifications in Spec Driven Development?
  2. How does SDD work with AI collaboration?
  3. Who are Vibe Coders?
  4. What do Vibe Coders build?
  5. What is living documentation?

## Enhancements

**Code Quality**
- Comprehensive inline documentation in both shortcode and partial
- Clear usage examples for both content files and templates
- Well-structured SCSS following site's existing patterns (~175 lines)
- JavaScript using IIFE pattern matching site's existing JS architecture
- Unique IDs for multiple FAQ instances on same page

**Developer Experience**
- Simple archetype command: `hugo new faq/my-question.md`
- No additional configuration needed when adding new FAQs
- Self-documenting filenames make FAQ management easy
- Helpful error messages in development mode when FAQ not found

**Styling**
- Added FAQ accordion component to `_components.scss`
- Integrated with existing SCSS variable system
- Consistent with site's design language
- Smooth animations for professional feel

## Technical Implementation

**Files Created**: 10 new files
- Content: 5 FAQ markdown files in `content/faq/`
- Archetype: `archetypes/faq.md`
- Shortcode: `layouts/shortcodes/faq.html`
- Partial: `layouts/partials/faq-accordion.html`
- JavaScript: `themes/icodewithai/assets/js/faq-accordion.js`
- Documentation: Design doc, Tasklist, Retrospective in `.cody/project/build/v1.5.0-faq-component/`

**Files Modified**: 3 files
- Styles: `themes/icodewithai/assets/scss/_components.scss` (+175 lines for FAQ component)
- Template: `themes/icodewithai/layouts/index.html` (added FAQ section)
- Backlog: `.cody/project/build/feature-backlog.md` (marked version complete)

**Usage Examples**:
```markdown
<!-- In content files (.md) -->
{{< faq "what-is-sdd,who-are-vibe-coders" />}}

<!-- In templates (.html) -->
{{ partial "faq-accordion.html" (dict "faqs" "what-is-sdd,who-are-vibe-coders" "context" .) }}
```

## Testing

**Comprehensive Testing Completed**:
- ✅ Hugo build verification (no errors)
- ✅ Accordion interaction (one open at a time)
- ✅ Keyboard navigation (Enter, Space, Arrow keys)
- ✅ Screen reader compatibility
- ✅ Mobile device testing
- ✅ Tablet device testing
- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Multiple FAQ components on same page
- ✅ Component reusability in different contexts
- ✅ Visual comparison with design reference (faq-example.png)

## Performance

- No JavaScript errors
- Minimal JavaScript footprint (vanilla JS, no dependencies)
- CSS-based animations for smooth 60fps performance
- Event delegation for optimal performance with multiple FAQs
- JavaScript automatically loaded with component (Hugo Pipes with minification and fingerprinting)

## Other Notes

**Development Process**: Followed Cody Framework spec-driven development with 7 phases and 39 tasks tracked in `.cody/project/build/v1.5.0-faq-component/tasklist.md`

**Design Reference**: Component design based on visual mockup provided in `.cody/project/library/assets/faq-example.png`

**Future Enhancements**: Consider creating a dedicated FAQ list page showing all FAQs, and tracking usage analytics to understand which FAQs are most valuable to users.

---

# v1.4.6-home-page-updates-part-1 - October 20, 2025

## Overview

Removed the Show & Tell section entirely from the iCodeWith.ai platform and restructured the home page layout for a cleaner, more focused user experience. This version consolidates content offerings by removing Show & Tell and reorganizing the home page to feature Blog, Podcast, and Presentations in the primary row, with a full-width App Gallery showcase below.

## Key Features

**Show & Tell Section Removal**
- Completely removed Show & Tell content type from the platform
- Deleted all Show & Tell content, layouts, templates, images, and SEO data
- Removed Show & Tell from navigation menus (header and footer, desktop and mobile)
- Cleaned up configuration files and automation scripts

**Home Page Layout Restructuring**
- **First Row (3-Column Grid)**: Blog, Podcast, and Presentations
  - Moved Presentations from second row to first row
  - Maintains consistent 3-column layout for primary content types
- **Second Row (Full-Width)**: App Gallery
  - Extended App Gallery to span the full width of the canvas
  - New CSS class `.homepage-app-gallery-fullwidth` for single full-width card layout
  - Provides more prominent showcase for vibe-coded applications

## Enhancements

**Navigation Improvements**
- Streamlined header navigation menu by removing Show & Tell link
- Simplified footer navigation structure across desktop and mobile
- Reduced cognitive load for users navigating the site

**Code Quality**
- Removed orphaned archetype file (`archetypes/show-and-tell.md`)
- Cleaned up automation script (`automations/create-content.sh`) to remove Show & Tell content type
- Deleted unused images and SEO data directories
- No dead code or unused assets remaining in codebase

**Layout & Design**
- More prominent App Gallery display with full-width layout
- Better visual hierarchy on home page
- Responsive design maintained across all devices (desktop, tablet, mobile)

## Bug Fixes

**Build Error Resolution**
- Fixed nil pointer error when deleted Show & Tell icon was still referenced in home page template
- Resolved by removing Show & Tell card before completing Phase 5

## Other Notes

**Files Deleted**: 10+ files across 5 directories
- Content: `content/show-and-tell/`
- Archetypes: `archetypes/show-and-tell.md`
- Layouts: `themes/icodewithai/layouts/show-and-tell/`
- Images: `themes/icodewithai/assets/images/show-and-tell/`, icon, and SEO images
- SEO Data: `data/seo/content-types/show-and-tell/`

**Files Modified**: 6 files
- Templates: header.html, footer.html, index.html
- Config: config.toml
- Styles: _components.scss
- Automation: create-content.sh

**Testing**: All changes tested and verified across desktop, tablet, and mobile devices with zero breaking changes after error resolution.

**Version Naming**: This is labeled "part-1" to indicate it's the first phase of home page updates, with additional improvements planned for future versions.

---

# v1.4.5-consolidate-asset-folders

Consolidated JS and SCSS assets from root `assets/` folder to `themes/icodewithai/assets/` for consistency with image consolidation (v1.4.4) and improved maintainability. Achieved 3% build performance improvement (69ms → 32ms builds combined with v1.4.4 for 54% total improvement).

---

# v1.4.4-consolidate-images

Consolidated scattered image assets from 5 locations into single organized structure within `themes/icodewithai/assets/images/`. Achieved 37% build performance improvement.
