# Header Navigation Reorganization Task List - v1.2.5

**Project Status**: Ready to begin implementation

## Phase 1: Create Reusable Dropdown Component ⏳ PENDING
**Goal**: Build foundation dropdown component and basic styling
**Success Criteria**: Dropdown component exists and can be called (may look unstyled initially)

### Task 1.1: Create Dropdown Component Partial
- **Assignee**: Claude
- **File**: `themes/bymarcelolewin/layouts/partials/nav-dropdown.html`
- **Action**: Create reusable Hugo partial for dropdown menus
- **Parameters**:
  - `title`: Group name (e.g., "Content", "Coding with AI") 
  - `items`: Array of menu items with name, url, external properties
- **Features**:
  - External link icon support
  - Proper target="_blank" handling
  - Semantic HTML structure
- **Status**: ⏳ Pending

### Task 1.2: Add Basic Dropdown CSS Structure
- **Assignee**: Claude
- **File**: `assets/scss/_components.scss`
- **Action**: Add dropdown CSS classes and basic structure
- **Add sections**:
  - `.nav-dropdown` (container)
  - `.nav-dropdown-toggle` (parent item)
  - `.nav-dropdown-menu` (dropdown menu)
  - `.nav-dropdown-item` (dropdown items)
  - `.external-link-icon` (external link indicator)
- **Features**: Basic structure, no animations yet
- **Status**: ⏳ Pending

### Task 1.3: Test Basic Component Structure
- **Assignee**: Marcelo
- **Action**: Test that dropdown component can be called without errors
- **Test Checklist**:
  - [ ] Hugo dev server runs without errors: `hugo server -D`
  - [ ] Dropdown component renders (may look unstyled)
  - [ ] No JavaScript errors in console
  - [ ] Basic HTML structure is correct
- **Status**: ⏳ Pending

---

## Phase 2: Desktop Dropdown Functionality ⏳ PENDING
**Goal**: Implement hover-based dropdowns for desktop with animations
**Success Criteria**: Desktop dropdowns work with hover and slide animations

### Task 2.1: Add Desktop Dropdown Styling and Animations
- **Assignee**: Claude
- **File**: `assets/scss/_components.scss`
- **Action**: Add complete desktop dropdown styling
- **Features**:
  - Hover-activated dropdowns
  - Slide down/up animations
  - Proper z-index layering
  - Subtle shadow and border
  - Lighter background than main site
  - External link icons
- **Status**: ⏳ Pending

### Task 2.2: Create Desktop Dropdown JavaScript
- **Assignee**: Claude
- **File**: `assets/js/nav-dropdown.js`
- **Action**: Add JavaScript for desktop dropdown behavior
- **Features**:
  - Enhanced hover handling
  - Close other dropdowns when opening new one
  - Proper event delegation
- **Status**: ⏳ Pending

### Task 2.3: Test Desktop Dropdown Functionality
- **Assignee**: Marcelo
- **Action**: Test desktop dropdown behavior
- **Test Checklist**:
  - [ ] Dropdowns appear on hover
  - [ ] Smooth slide down/up animations
  - [ ] Proper background, shadow, border styling
  - [ ] Only one dropdown open at a time
  - [ ] External link icons appear for Discord/Meetup
  - [ ] Dropdowns disappear on mouse leave
- **Status**: ⏳ Pending

---

## Phase 3: Update Header Navigation Structure ⏳ PENDING
**Goal**: Replace current navigation with new dropdown structure
**Success Criteria**: New navigation structure works on desktop, mobile menu may be broken temporarily

### Task 3.1: Update Desktop Header Navigation
- **Assignee**: Claude
- **File**: `themes/bymarcelolewin/layouts/partials/header.html`
- **Action**: Replace current menu loop with hardcoded dropdown structure
- **Changes**:
  - Use dropdown partial for "Content" and "Coding with AI"
  - Remove Discord special button styling logic
  - Use existing config.toml params for URLs
  - Maintain: Bio, Apps, Contact as regular links
- **Status**: ⏳ Pending

### Task 3.2: Remove Discord Special Styling
- **Assignee**: Claude
- **File**: `assets/scss/_components.scss`
- **Action**: Clean up Discord-specific button styling
- **Changes**:
  - Remove Discord button styling from `.nav`
  - Remove Discord button styling from `.mobile-nav`
  - Clean up any unused CSS
- **Status**: ⏳ Pending

### Task 3.3: Remove Menu System from Config
- **Assignee**: Claude
- **File**: `config/_default/config.toml`
- **Action**: Remove `[menu]` section entirely
- **Result**: Navigation now uses only params (matching footer approach)
- **Status**: ⏳ Pending

### Task 3.4: Test New Desktop Navigation Structure
- **Assignee**: Marcelo
- **Action**: Test desktop navigation with new structure
- **Test Checklist**:
  - [ ] Hugo dev server runs without errors
  - [ ] New navigation structure appears: Bio | Apps | Content ▼ | Coding with AI ▼ | Contact
  - [ ] Content dropdown shows: Blog, Presentations
  - [ ] Coding with AI dropdown shows: Podcast, Discord, Meetup
  - [ ] Discord no longer has green button styling
  - [ ] All internal links work correctly
  - [ ] External links (Discord, Meetup) open in new tabs
  - [ ] External link icons appear
- **Note**: Mobile menu may be broken at this point - that's expected
- **Status**: ⏳ Pending

---

## Phase 4: Mobile Menu Integration ⏳ PENDING
**Goal**: Make dropdowns work in mobile menu as accordion-style
**Success Criteria**: Mobile menu works with accordion dropdowns

### Task 4.1: Update Mobile Menu HTML Structure
- **Assignee**: Claude
- **File**: `themes/bymarcelolewin/layouts/partials/header.html`
- **Action**: Update mobile menu to support accordion-style dropdowns
- **Changes**:
  - Use same dropdown structure as desktop
  - Ensure proper mobile menu integration
  - Maintain existing mobile menu overlay structure
- **Status**: ⏳ Pending

### Task 4.2: Add Mobile Dropdown CSS
- **Assignee**: Claude
- **File**: `assets/scss/_components.scss`
- **Action**: Add mobile-specific dropdown styles
- **Features**:
  - Accordion-style behavior using `@include tablet-down`
  - Proper mobile menu integration
  - Follow existing mobile menu animation patterns
- **Status**: ⏳ Pending

### Task 4.3: Update Mobile Menu JavaScript
- **Assignee**: Claude
- **File**: `assets/js/mobile-menu.js`
- **Action**: Add accordion dropdown support to mobile menu
- **Features**:
  - Touch/click to expand/collapse dropdowns
  - Only one dropdown open at a time
  - Proper integration with existing mobile menu
- **Status**: ⏳ Pending

### Task 4.4: Test Mobile Navigation
- **Assignee**: Marcelo
- **Action**: Test mobile menu with accordion dropdowns
- **Test Checklist**:
  - [ ] Mobile menu opens correctly (hamburger button)
  - [ ] Dropdown groups can be tapped to expand
  - [ ] Only one dropdown open at a time
  - [ ] Smooth accordion-style animations
  - [ ] All links work in mobile menu
  - [ ] External links open in new tabs
  - [ ] Mobile menu can be closed properly
- **Status**: ⏳ Pending

---

## Phase 5: Final Testing and Refinement ⏳ PENDING
**Goal**: Comprehensive testing and bug fixes
**Success Criteria**: All functionality works across devices and browsers

### Task 5.1: Comprehensive Desktop Testing
- **Assignee**: Marcelo
- **Action**: Full desktop functionality testing
- **Test Checklist**:
  - [ ] All dropdown menus work on hover
  - [ ] Smooth slide animations
  - [ ] Proper styling (background, shadow, border)
  - [ ] External link icons display correctly
  - [ ] All internal links navigate correctly
  - [ ] External links open in new tabs
  - [ ] No JavaScript errors in console
  - [ ] Performance is acceptable
- **Status**: ⏳ Pending

### Task 5.2: Comprehensive Mobile Testing
- **Assignee**: Marcelo
- **Action**: Full mobile functionality testing
- **Test Checklist**:
  - [ ] Mobile menu opens/closes correctly
  - [ ] Accordion dropdowns work on touch
  - [ ] Animations follow mobile patterns
  - [ ] All links work in mobile menu
  - [ ] External links open in new tabs
  - [ ] Mobile menu usability is good
  - [ ] No mobile-specific bugs
- **Status**: ⏳ Pending

### Task 5.3: Responsive Breakpoint Testing
- **Assignee**: Marcelo
- **Action**: Test behavior at 1050px breakpoint
- **Test Checklist**:
  - [ ] Smooth transition between desktop and mobile
  - [ ] No visual glitches at breakpoint
  - [ ] Functionality switches correctly
  - [ ] No regressions in existing behavior
- **Status**: ⏳ Pending

### Task 5.4: Fix Any Issues Found
- **Assignee**: Claude
- **Action**: Address any bugs or issues found during testing
- **Status**: ⏳ Pending

### Task 5.5: Final Approval
- **Assignee**: Marcelo
- **Action**: Final approval of all navigation functionality
- **Requirements**: Desktop and mobile both work perfectly
- **Status**: ⏳ Pending

---

## Implementation Notes

### URL Mappings to Verify
- **Bio**: `{{ .Site.Params.bio }}` → `/bio/`
- **Apps**: `{{ .Site.Params.apps }}` → `/apps/`
- **Blog**: `{{ .Site.Params.blog }}` → `/blog/`
- **Presentations**: `{{ .Site.Params.presentations }}` → `/presentations/`
- **Podcast**: `{{ .Site.Params.podcast }}` → `/podcast/`
- **Contact**: `{{ .Site.Params.contact }}` → `mailto:marcelo@bymarcelolewin.com`
- **Discord**: `{{ .Site.Params.discord }}` → External (new tab)
- **Meetup**: `{{ .Site.Params.meetup }}` → External (new tab)

### Files Being Modified
- `themes/bymarcelolewin/layouts/partials/header.html`
- `assets/scss/_components.scss`
- `assets/js/mobile-menu.js`
- `config/_default/config.toml`

### New Files Being Created
- `themes/bymarcelolewin/layouts/partials/nav-dropdown.html`
- `assets/js/nav-dropdown.js`

### Testing Requirements
- Test at desktop resolution (>1050px)
- Test at mobile resolution (≤1050px)
- Test link functionality
- Test animations and transitions
- Test responsive behavior at breakpoint

### Rollback Strategy
- Each phase is independently testable
- Can rollback to previous phase if issues arise
- Git commits after each successful phase
- Full rollback plan available in top-plan.md

### Success Indicators
- ✅ Desktop hover dropdowns work smoothly
- ✅ Mobile accordion dropdowns work smoothly
- ✅ Discord no longer has special button styling
- ✅ External links open in new tabs with icons
- ✅ All internal links work correctly
- ✅ Menu system removed from config.toml
- ✅ Component is reusable for future changes
- ✅ No regressions in existing functionality
- ✅ Performance remains acceptable