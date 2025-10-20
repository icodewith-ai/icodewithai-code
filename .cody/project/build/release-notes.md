# Release Notes

This document lists new features, bug fixes and other changes implemented during a particular build, also known as a version.

## Table of Contents
- [v1.5.0-faq-component - October 20, 2025](#v150-faq-component---october-20-2025)
- [v1.4.6-home-page-updates-part-1 - October 20, 2025](#v146-home-page-updates-part-1---october-20-2025)
- [v1.4.5-consolidate-asset-folders](#v145-consolidate-asset-folders)
- [v1.4.4-consolidate-images](#v144-consolidate-images)

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
