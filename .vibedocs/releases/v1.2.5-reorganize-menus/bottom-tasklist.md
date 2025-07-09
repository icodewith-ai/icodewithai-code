# Footer Reorganization Task List - v1.2.5

## Phase 1: Desktop Footer Reorganization (5 Columns)
**Goal**: Implement 5-column desktop footer layout and test thoroughly
**Success Criteria**: 5 columns display correctly on desktop (>1050px), all links work

### Task 1.1: Add Meetup URL to Hugo Config
- **Assignee**: Claude
- **File**: `config/_default/config.toml`
- **Action**: Add `meetup = "https://www.meetup.com/coding-with-ai/"` to the `[params]` section
- **Status**: Pending

### Task 1.2: Update Footer HTML Structure
- **Assignee**: Claude
- **File**: `themes/bymarcelolewin/layouts/partials/footer.html`
- **Action**: Replace current 2-column structure with 5-column structure
- **Details**: 
  - About: Bio, Contact
  - Apps: All Apps, Content Modeling CLI, Galactic Invaders
  - Content: Blog, Presentations
  - Coding with AI: Community Discord, Meetup, Podcast
  - Follow Me: GitHub, NPM, LinkedIn, YouTube, X
- **Use Hugo variables**: `{{ .Site.Params.meetup }}`, `{{ .Site.Params.github }}`, etc.
- **Status**: Pending

### Task 1.3: Update Footer CSS for 5-Column Grid
- **Assignee**: Claude
- **File**: `assets/scss/_components.scss`
- **Action**: Update `.footer-columns` to use CSS Grid with 5 columns
- **Requirements**:
  - Use existing SCSS variables from `_variables.scss`
  - Follow existing patterns in `_components.scss`
  - Desktop only (no mobile changes yet)
  - Maintain existing spacing and styling patterns
- **CSS Changes**:
  ```scss
  .footer-columns {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: clamp($spacing-lg, 4rem, 60px);
    justify-content: center;
  }
  ```
- **Status**: Pending

### Task 1.4: Test Desktop Footer Layout
- **Assignee**: Marcelo
- **Action**: Test desktop footer functionality
- **Test Checklist**:
  - [ ] Hugo dev server runs without errors: `hugo server -D`
  - [ ] 5 columns display correctly on desktop
  - [ ] All links work and point to correct destinations
  - [ ] Visual consistency with existing design
  - [ ] Proper spacing and alignment
  - [ ] External links open in new tabs
  - [ ] Meetup link works correctly
- **Status**: Pending

### Task 1.5: Fix Desktop Issues (if any)
- **Assignee**: Claude
- **Action**: Address any issues found during testing
- **Status**: Pending

### Task 1.6: Final Desktop Testing & Approval
- **Assignee**: Marcelo
- **Action**: Final approval of desktop footer
- **Requirements**: All links work, layout looks good, ready for commit
- **Status**: Pending

### Task 1.7: Commit Desktop Footer Changes
- **Assignee**: Marcelo
- **Action**: Commit and push desktop footer changes to GitHub
- **Status**: Pending

---

## Phase 2: Mobile/Tablet Footer Reorganization (3 Sections)
**Goal**: Implement responsive mobile/tablet layout with 3 reorganized sections
**Success Criteria**: 3 sections display correctly on tablet/mobile (d1050px) with reorganized content

### Task 2.1: Update Footer HTML for Mobile Content Reorganization
- **Assignee**: Claude
- **File**: `themes/bymarcelolewin/layouts/partials/footer.html`
- **Action**: Update HTML structure to support mobile content reorganization
- **Requirements**:
  - About section must include: Bio, Apps (/apps), Blog, Presentations, Contact
  - Coding with AI section: Podcast, Community Discord, Meetup
  - Follow Me section: All current social links
- **Approach**: Use conditional content or CSS to reorganize for mobile
- **Status**: Pending

### Task 2.2: Implement Mobile CSS Grid Layout
- **Assignee**: Claude
- **File**: `assets/scss/_components.scss`
- **Action**: Add mobile/tablet responsive CSS using existing `@include tablet-down` mixin
- **Requirements**:
  - Use existing `$breakpoint-tablet` (1050px)
  - 3 sections in single column on mobile
  - Reorganize content as specified
  - Use existing spacing variables
- **CSS Changes**:
  ```scss
  @include tablet-down {
    .footer-columns {
      grid-template-columns: 1fr;
      gap: $spacing-lg;
    }
    
    // Content reorganization for mobile
    // Implementation details TBD
  }
  ```
- **Status**: Pending

### Task 2.3: Test Mobile/Tablet Footer Layout
- **Assignee**: Marcelo
- **Action**: Test mobile/tablet footer functionality
- **Test Checklist**:
  - [ ] Desktop layout still works correctly (no regression)
  - [ ] Mobile/tablet shows 3 sections in correct order
  - [ ] About section includes: Bio, Apps, Blog, Presentations, Contact
  - [ ] Coding with AI section includes: Podcast, Discord, Meetup
  - [ ] Follow Me section includes all social links
  - [ ] Responsive transition works smoothly at 1050px breakpoint
  - [ ] All links work on mobile
  - [ ] Visual consistency on mobile
- **Status**: Pending

### Task 2.4: Fix Mobile Issues (if any)
- **Assignee**: Claude
- **Action**: Address any issues found during mobile testing
- **Status**: Pending

### Task 2.5: Final Mobile Testing & Approval
- **Assignee**: Marcelo
- **Action**: Final approval of mobile footer
- **Requirements**: Desktop and mobile both work perfectly
- **Status**: Pending

### Task 2.6: Commit Mobile Footer Changes
- **Assignee**: Marcelo
- **Action**: Commit and push mobile footer changes to GitHub
- **Status**: Pending

---

## Implementation Notes

### SCSS Structure to Follow:
- Use variables from `_variables.scss`
- Follow patterns in `_components.scss`
- Use existing mixins from `_mixins.scss`
- Use existing `@include tablet-down` mixin
- No hardcoded values in CSS

### Hugo Template Variables to Use:
- `{{ .Site.Params.meetup }}`
- `{{ .Site.Params.github }}`
- `{{ .Site.Params.npm }}`
- `{{ .Site.Params.linkedin }}`
- `{{ .Site.Params.youtube }}`
- `{{ .Site.Params.twitter }}`

### URL Mapping:
- **About**: `/bio/` (Bio), `/bio/` (Contact)
- **Apps**: `/apps/` (All Apps), `/apps/content-modeling-cli/`, `/apps/galactic-invaders/`
- **Content**: `/blog/`, `/presentations/`
- **Coding with AI**: Discord (from params), Meetup (from params), `/podcast/`
- **Follow Me**: All social links from params

### Testing Requirements:
- Test at desktop resolution (>1050px)
- Test at tablet resolution (d1050px)
- Test link functionality
- Test visual consistency
- Test responsive transitions

### Rollback Plan:
- Git revert if Phase 1 has issues
- Each phase is independently committable
- Can rollback individual phases if needed