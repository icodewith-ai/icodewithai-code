# CSS Cleanup Checklist - v1.1.5 Project Clean Up

## Phase 1: Eliminate Inline CSS (Critical)
*Objective: Remove all inline `style=""` attributes from HTML templates*

### Pre-Phase 1 Setup
- [ ] Create backup branch: `git checkout -b css-cleanup-phase1`
- [ ] Test current site locally: `hugo server`
- [ ] Take screenshots of key pages for visual comparison

### HTML Template Fixes

#### 1. blog/single.html (2 inline style fixes)
- [ ] **Line 14:** Replace inline div styles with `.blog-back-section` class
  - Remove: `style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #2a2a2a;"`
  - Add: `class="blog-back-section"`
- [ ] **Line 15:** Replace inline link styles with `.blog-back-link` class  
  - Remove: `style="color: var(--primary-color); text-decoration: none; font-weight: 500;"`
  - Add: `class="blog-back-link"`

#### 2. index.html (2 inline style fixes)
- [ ] **Line 17:** Replace inline div alignment with utility class
  - Remove: `style="align-items: flex-start;"`
  - Add: `class="bio-content items-start"` (update existing class)
- [ ] **Line 21:** Replace inline paragraph flex styles with utility classes
  - Remove: `style="display: flex; gap: 2rem; flex-wrap: wrap;"`
  - Add: `class="flex gap-lg flex-wrap"`

#### 3. bio/single.html (1 inline style fix)
- [ ] **Line 59:** Replace inline heading styles with utility class
  - Remove: `style="text-align: center; margin-bottom: 2rem;"`
  - Add: `class="text-center mb-lg"`

### CSS Class Creation in _components.scss

#### Blog Component Styles
- [ ] Add `.blog-back-section` class:
  ```scss
  .blog-back-section {
    margin-top: $spacing-xl;
    padding-top: $spacing-lg;
    border-top: 1px solid $neutral-700;
  }
  ```
- [ ] Add `.blog-back-link` class:
  ```scss
  .blog-back-link {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: $font-weight-medium;
    
    &:hover {
      color: var(--color-primary-hover);
    }
  }
  ```

### Utility Class Verification in _utilities.scss

- [ ] Verify `.items-start` utility exists (should be: `align-items: flex-start;`)
- [ ] Verify `.gap-lg` utility exists (should use: `gap: $spacing-lg;`)
- [ ] Verify `.flex-wrap` utility exists (should be: `flex-wrap: wrap;`)
- [ ] Verify `.text-center` utility exists
- [ ] Verify `.mb-lg` utility exists (should use: `margin-bottom: $spacing-lg;`)

### Phase 1 Testing & Completion
- [ ] Build site: `hugo --environment production`
- [ ] Test locally: `hugo server`
- [ ] Visual comparison: Check all affected pages match original styling
- [ ] Validate HTML: No inline `style=""` attributes remain
- [ ] Git commit: `git add . && git commit -m "Phase 1: Remove all inline CSS from HTML templates"`
- [ ] **PAUSE FOR USER APPROVAL** before Phase 2

---

## Phase 2: Systematize Existing Variables (Consistency)
*Objective: Replace hardcoded SCSS values that have variable equivalents*

### Pre-Phase 2 Setup
- [ ] Create backup branch: `git checkout -b css-cleanup-phase2`
- [ ] Current status: Phase 1 completed and committed

### Transition Consistency Updates

#### _components.scss transition fixes
- [ ] **Line 53:** Replace `transition: all 0.3s ease;` with `transition: $transition-base;`
- [ ] Add new variable to _variables.scss: `$transition-slow: all 0.6s ease;`
- [ ] **Line 66:** Replace `transition: all 0.6s ease;` with `transition: $transition-slow;`

#### _mixins.scss transition fixes
- [ ] **Line 88:** Replace `transition: width 0.3s ease;` with `transition: width $transition-fast;`
- [ ] Add new variable: `$transition-width: width 0.3s ease;` (or use existing pattern)

### Spacing Consistency Updates

#### _components.scss spacing fixes
- [ ] **Line 564:** Replace `padding-left: 15px;` with appropriate spacing variable
- [ ] **Line 565:** Replace `margin: 20px 0;` with spacing variables
- [ ] **Line 574:** Replace `padding-left: 30px;` with spacing variables  
- [ ] **Line 577:** Replace `margin-bottom: 5px;` with micro-spacing variable
- [ ] **Line 586:** Replace `padding-left: 30px;` with spacing variables
- [ ] **Line 589:** Replace `margin-bottom: 5px;` with micro-spacing variable

#### Add micro-spacing variables to _variables.scss
- [ ] Add: `$spacing-2xs: 0.25rem;` (4px)
- [ ] Add: `$spacing-micro: 0.3125rem;` (5px) 
- [ ] Add: `$spacing-tight: 0.9375rem;` (15px)
- [ ] Add: `$spacing-loose: 1.875rem;` (30px)

#### _layout.scss spacing fixes
- [ ] **Line 21:** Replace `3.8rem` with `$hero-bottom-padding: 3.8rem;` (add to variables)

### Phase 2 Testing & Completion
- [ ] Build site: `hugo --environment production`
- [ ] Test locally: `hugo server`
- [ ] Visual comparison: Verify no visual changes
- [ ] Git commit: `git add . && git commit -m "Phase 2: Systematize existing variable usage"`
- [ ] **PAUSE FOR USER APPROVAL** before Phase 3

---

## Phase 3: Extend Variable System (Enhancement)
*Objective: Add missing variables for commonly used values*

### Pre-Phase 3 Setup
- [ ] Create backup branch: `git checkout -b css-cleanup-phase3`
- [ ] Current status: Phase 2 completed and committed

### Add New Variable Categories to _variables.scss

#### Animation & Transitions Section
- [ ] Add section comment: `// Animation & Transitions - Extended`
- [ ] Add: `$transition-slow: all 0.6s ease;`
- [ ] Add: `$animation-duration-fast: 0.3s;`
- [ ] Add: `$animation-duration-normal: 0.4s;`

#### Effect Distances Section  
- [ ] Add section comment: `// Effect Distances`
- [ ] Add: `$hover-lift-distance: -4px;`
- [ ] Add: `$slide-distance: 20px;`
- [ ] Add: `$underline-offset: -4px;`
- [ ] Add: `$underline-height: 2px;`

#### Opacity Levels Section
- [ ] Add section comment: `// Opacity Levels`
- [ ] Add: `$opacity-light: 0.1;`
- [ ] Add: `$opacity-medium: 0.2;`
- [ ] Add: `$opacity-strong: 0.3;`
- [ ] Add: `$opacity-backdrop: 0.7;`

#### Component Dimensions Section
- [ ] Add section comment: `// Component Dimensions`
- [ ] Add: `$scrollbar-width: 8px;`
- [ ] Add: `$bio-image-max-width: 280px;`
- [ ] Add: `$bio-image-min-height: 300px;`
- [ ] Add: `$certificate-image-width: 120px;`
- [ ] Add: `$footer-logo-size: 72px;`
- [ ] Add: `$footer-logo-size-mobile: 60px;`
- [ ] Add: `$card-min-width: 400px;`
- [ ] Add: `$bio-page-max-width: 900px;`
- [ ] Add: `$footer-column-min-width: 120px;`

#### Special Layout Section
- [ ] Add section comment: `// Special Layout Values`
- [ ] Add: `$hero-bottom-padding: 3.8rem;`

### Replace Hardcoded Values with New Variables

#### _base.scss updates
- [ ] **Line 60:** Replace `width: 8px;` with `width: $scrollbar-width;`

#### _components.scss updates
- [ ] **Line 103:** Replace `letter-spacing: 0.02em;` with `$letter-spacing-tight: 0.02em;`
- [ ] **Line 110:** Replace `bottom: -4px;` with `bottom: $underline-offset;`
- [ ] **Line 113:** Replace `height: 2px;` with `height: $underline-height;`
- [ ] **Line 214:** Replace `max-width: 280px;` with `max-width: $bio-image-max-width;`
- [ ] **Line 216:** Replace `min-height: 300px;` with `min-height: $bio-image-min-height;`  
- [ ] **Line 354:** Replace `width: 120px;` with `width: $certificate-image-width;`
- [ ] **Line 726-727:** Replace `width: 72px; height: 72px;` with `width: $footer-logo-size; height: $footer-logo-size;`
- [ ] Replace all rgba opacity values with new opacity variables
- [ ] **Line 844:** Replace `min-width: 120px;` with `min-width: $footer-column-min-width;`

#### _layout.scss updates  
- [ ] **Line 39:** Replace `max-width: 900px;` with `max-width: $bio-page-max-width;`
- [ ] **Line 52:** Replace `minmax(400px, 1fr)` with `minmax($card-min-width, 1fr)`
- [ ] **Line 67:** Replace `minmax(400px, 1fr)` with `minmax($card-min-width, 1fr)`

#### _mixins.scss updates
- [ ] **Line 124:** Replace `0.3s` with `$animation-duration-fast`
- [ ] **Line 128:** Replace `0.4s` with `$animation-duration-normal`  
- [ ] **Line 140:** Replace `translateY(20px)` with `translateY($slide-distance)`
- [ ] Replace hover lift distances with `$hover-lift-distance`

### Phase 3 Testing & Completion
- [ ] Build site: `hugo --environment production`
- [ ] Test locally: `hugo server` 
- [ ] Visual comparison: Verify no visual changes
- [ ] Validate all new variables are used correctly
- [ ] Git commit: `git add . && git commit -m "Phase 3: Add comprehensive variable system"`
- [ ] **PAUSE FOR USER APPROVAL** before Phase 4

---

## Phase 4: Optimization and Documentation (Polish)
*Objective: Finalize cleanup and update documentation*

### Pre-Phase 4 Setup
- [ ] Create backup branch: `git checkout -b css-cleanup-phase4`
- [ ] Current status: Phase 3 completed and committed

### Code Review and Optimization
- [ ] Review all variable usage for consistency
- [ ] Check for any remaining hardcoded values
- [ ] Optimize variable organization in _variables.scss
- [ ] Ensure proper commenting and section organization

### Documentation Updates

#### Update CSS Documentation
- [ ] Update `.vibedocs/architecture/css-documentation.md`
- [ ] Add new variable categories to documentation
- [ ] Update variable examples
- [ ] Add usage guidelines for new variables

#### Create Variable Reference
- [ ] Create quick reference section for all variables
- [ ] Document recommended usage patterns
- [ ] Add examples of proper variable usage

### Final Testing
- [ ] Build production site: `hugo --environment production`
- [ ] Test development site: `hugo server`
- [ ] Cross-browser testing (if applicable)
- [ ] Mobile responsive testing
- [ ] Performance check (CSS bundle size)

### Phase 4 Completion
- [ ] Final git commit: `git add . && git commit -m "Phase 4: Documentation and optimization updates"`
- [ ] Merge cleanup branch to main: `git checkout main && git merge css-cleanup-phase4`
- [ ] Tag release: `git tag v1.1.5-cleanup-complete`
- [ ] Push to remote: `git push origin main --tags`

---

## Success Criteria

### Phase 1 Success
- ✅ Zero inline `style=""` attributes in HTML templates
- ✅ All inline styles moved to appropriate CSS classes
- ✅ Visual appearance unchanged

### Phase 2 Success  
- ✅ All transition durations use variables
- ✅ All spacing values use systematic variables
- ✅ 90%+ consistency in variable usage

### Phase 3 Success
- ✅ Comprehensive variable system covering all common values
- ✅ Component dimensions systematized
- ✅ Animation and effect values standardized

### Phase 4 Success
- ✅ Complete documentation updated
- ✅ Clean, organized variable system
- ✅ Ready for future development

---

## Emergency Rollback Plan

If any phase breaks styling:
1. **Stop immediately**
2. **Rollback:** `git checkout main`
3. **Report issue** with specific details
4. **Debug** the problematic change
5. **Fix and retry** or **skip problematic items**

---

*This checklist ensures systematic, safe implementation of the CSS cleanup with proper testing and rollback capabilities at each phase.*