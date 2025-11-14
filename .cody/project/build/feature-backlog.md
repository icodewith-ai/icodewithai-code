# Feature Backlog

This document lists features and enhancements derived from the plan. It is a living document that will evolve throughout the project. It is grouped by release, with the Backlog tracking all features not added to a release yet.  It is used to create releases to work on.

| Status |  | Priority |  |
|--------|-------------|---------|-------------|
| 🔴 | Not Started | High | High priority items |
| 🟡 | In Progress | Medium | Medium priority items |
| 🟢 | Completed | Low | Low priority items |

## Backlog

| ID  | Feature             | Description                               | Priority | Status |
|-----|---------------------|-------------------------------------------|----------|--------|
| B.1 | Future enhancements | Additional features to be planned | Low | 🟢 Completed |

## v1.7.0-rebrand-to-i-build-with-ai - 🔴 Not Started
Complete rebranding from "iCodeWith.ai" to "I Build With AI" (iBuildWith.ai). Update domain, theme name, logos, configuration files, SEO metadata, content files, GitHub workflows, and all references throughout the codebase. Excludes social media profile URLs (to be updated separately).

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 9.1 | Theme directory rename | Rename `themes/icodewithai/` to `themes/ibuildwithai/` | High | 🔴 Not Started |
| 9.2 | Configuration updates | Update all config.toml files (default, prod, next, local) with new domain and theme name | High | 🔴 Not Started |
| 9.3 | SEO metadata updates | Update 47+ SEO YAML files with new brand name and domain | High | 🔴 Not Started |
| 9.4 | Template file updates | Update all HTML/Hugo template files with new branding, alt text, and references | High | 🔴 Not Started |
| 9.5 | JavaScript updates | Update contact-form.js and reminder-form.js with new Netlify function URLs | High | 🔴 Not Started |
| 9.6 | Backend package updates | Update backend package.json and repository references | High | 🔴 Not Started |
| 9.7 | GitHub workflows update | Update hugo-prod.yml and hugo-next.yml with new domain and repo references | High | 🔴 Not Started |
| 9.8 | Content file updates | Update all markdown content files (blog, podcast, presentations, apps) with new branding | High | 🔴 Not Started |
| 9.9 | People data updates | Update data/people files with new company name and bio references | Medium | 🔴 Not Started |
| 9.10 | Documentation updates | Update README, components.md, content-management.md with new branding | Medium | 🔴 Not Started |
| 9.11 | Logo and asset creation | Create new logo files, favicons, and social share images | High | 🔴 Not Started |
| 9.12 | Analytics updates | Update Plausible.io and analytics tracking domain references | Medium | 🔴 Not Started |

## v1.6.0-scrolling-component - 🟢 Completed
Create a reusable infinite scrolling carousel component for displaying content cards (apps, features, etc.) with configurable auto-scroll, speed, direction, and hover interactions. Replace the current "Explore" section on the home page.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 8.1 | Scrolling carousel shortcode | Create Hugo shortcode with configurable scroll, speed, direction parameters | High | 🟢 Completed |
| 8.2 | Card/box component | Build rectangular cards with icon, heading, optional description, and link | High | 🟢 Completed |
| 8.3 | Infinite scroll JavaScript | Implement seamless infinite loop scrolling with pause on hover | High | 🟢 Completed |
| 8.4 | Scroll controls | Add auto/none toggle, slow/fast speed, left/right direction controls | High | 🟢 Completed |
| 8.5 | Edge fade effect | Implement gradient fade-out on both left and right edges | High | 🟢 Completed |
| 8.6 | SCSS styling | Dark theme styling with green accents, hover effects matching FAQ component | High | 🟢 Completed |
| 8.7 | Home page integration | Replace current "Explore" section with new scrolling component | High | 🟢 Completed |
| 8.8 | Responsive design | Ensure horizontal scrolling works on mobile, tablet, and desktop | High | 🟢 Completed |
| 8.9 | Accessibility | Add ARIA attributes, keyboard navigation support | Medium | 🟢 Completed |
| 8.10 | Documentation | Add inline comments and usage examples for content creators | Medium | 🟢 Completed |

## v1.5.0-faq-component - 🟢 Completed
Create a reusable FAQ accordion component for displaying frequently asked questions throughout the site. Individual FAQ content files stored in `content/faq/` with flexible ordering via Hugo shortcode.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 7.1 | FAQ content structure | Create `content/faq/` folder and archetype template | High | 🟢 Completed |
| 7.2 | FAQ shortcode | Create Hugo shortcode for flexible FAQ display with comma-separated FAQ IDs | High | 🟢 Completed |
| 7.3 | FAQ CSS component | Build accordion-style CSS with dark theme, green accents, and rounded borders | High | 🟢 Completed |
| 7.4 | FAQ JavaScript | Implement accordion interaction (one open at a time, chevron animation) | High | 🟢 Completed |
| 7.5 | Home page integration | Add FAQ section below "Next Generation App Builders" section | High | 🟢 Completed |
| 7.6 | Sample FAQ content | Create 5 sample FAQ markdown files for testing | Medium | 🟢 Completed |
| 7.7 | Responsive design | Ensure FAQ component works on mobile, tablet, and desktop | High | 🟢 Completed |
| 7.8 | Accessibility | Add ARIA attributes for screen readers and keyboard navigation | Medium | 🟢 Completed |

## v1.4.6-home-page-updates-part-1 - 🟢 Completed
Remove Show & Tell section entirely and update home page layout by moving Presentations box to Show & Tell's position and extending App Gallery to full width.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 6.1 | Delete Show & Tell content | Remove `content/show-and-tell/` directory | High | 🟢 Completed |
| 6.2 | Delete Show & Tell archetypes | Remove `archetypes/show-and-tell.md` | High | 🟢 Completed |
| 6.3 | Delete Show & Tell SEO data | Remove `data/seo/content-types/show-and-tell/` directory | High | 🟢 Completed |
| 6.4 | Delete Show & Tell layouts | Remove `themes/icodewithai/layouts/show-and-tell/` directory | High | 🟢 Completed |
| 6.5 | Delete Show & Tell images | Remove 3 image locations (show-and-tell folder, icon, SEO images) | High | 🟢 Completed |
| 6.6 | Remove Show & Tell from navigation | Remove from header and footer templates | High | 🟢 Completed |
| 6.7 | Remove Show & Tell config | Remove `showandtell` parameter from config files | High | 🟢 Completed |
| 6.8 | Update home page layout | Move Presentations to first row, extend App Gallery to full width | High | 🟢 Completed |
| 6.9 | Update home page CSS | Adjust CSS for new full-width App Gallery layout | Medium | 🟢 Completed |
| 6.10 | Test responsive behavior | Verify layout works on mobile, tablet, and desktop | High | 🟢 Completed |

## v1.4.5-consolidate-asset-folders - 🟢 Completed
Consolidate JS and SCSS assets from root `assets/` folder to `themes/icodewithai/assets/` for consistency with image consolidation (v1.4.4) and improved maintainability. Achieved 3% build performance improvement.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 5.1 | Move JS assets | Move all JS files from `assets/js/` to `themes/icodewithai/assets/js/` | High | 🟢 Completed |
| 5.2 | Move SCSS assets | Move all SCSS files from `assets/scss/` to `themes/icodewithai/assets/scss/` | High | 🟢 Completed |
| 5.3 | Verify asset resolution | Test that Hugo still resolves assets correctly via cascading lookup | High | 🟢 Completed |
| 5.4 | Clean up root assets | Remove empty root `assets/` folder after successful migration | Medium | 🟢 Completed |
| 5.5 | Build performance test | Measure build performance before/after consolidation | Low | 🟢 Completed |

## v1.4.4-consolidate-images - 🟢 Completed
Consolidate scattered image assets from 5 locations into single organized structure within `themes/icodewithai/assets/images/`. Achieved 37% build performance improvement.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 4.1 | Image migration | Move SEO images from static to assets, organize by category | High | 🟢 Completed |
| 4.2 | Template updates | Update 16 template references with TrimPrefix pattern | High | 🟢 Completed |
| 4.3 | Data standardization | Standardize all paths to `/images/...` format | High | 🟢 Completed |
| 4.4 | SEO partial updates | Implement 3-step fallback for social images | High | 🟢 Completed |
| 4.5 | Performance validation | Verify 37% build performance improvement | Medium | 🟢 Completed |

## v1.4.3-support-multiple-presenters-in-prezos - 🟢 Completed
Extend presentations system to support multiple presenters while maintaining backward compatibility with single presenter presentations.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 3.1 | Multi-presenter parsing | Parse comma-separated presenter values from frontmatter | High | 🟢 Completed |
| 3.2 | Name formatting enhancement | Implement proper grammar formatting with Oxford comma rules | High | 🟢 Completed |
| 3.3 | Single.html template updates | Update individual presentation page for multiple presenters | High | 🟢 Completed |
| 3.4 | List.html template updates | Update presentations listing for multiple presenters | High | 🟢 Completed |
| 3.5 | Responsive design maintenance | Ensure multiple presenter boxes maintain responsive behavior | Medium | 🟢 Completed |

## v1.4.1-rename-to-show-and-tell - 🟢 Completed
Rebranding "Built with Vibes" to "Show & Tell" - maintaining the same show format but with a more generic, universally understood name.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 2.1 | Section Rebranding | Rename "Built with Vibes" to "Show & Tell" throughout codebase | High | 🟢 Completed |
| 2.2 | URL Structure Update | Change `/built-with-vibes/` to `/show-and-tell/` | High | 🟢 Completed |
| 2.3 | Directory Structure Rename | Rename all built-with-vibes-related directories and files | High | 🟢 Completed |
| 2.4 | Template Updates | Update Hugo templates with new section references | High | 🟢 Completed |
| 2.5 | CSS Class Renaming | Update CSS classes from `.built-with-vibes-*` to `.show-and-tell-*` | Medium | 🟢 Completed |
| 2.6 | Automation Script Updates | Update content creation scripts for new content type | Medium | 🟢 Completed |
| 2.7 | Navigation Updates | Update site navigation and menus | High | 🟢 Completed |

## v1.4.0-rename-tutorials-to-built-with-vibes - 🟢 Completed
Complete rebranding of the "Tutorials" section to "Built with Vibes" - a new show format where vibe coders share their screens and walk through real projects.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 1.1 | Section Rebranding | Rename "Tutorials" to "Built with Vibes" throughout codebase | High | 🟢 Completed |
| 1.2 | URL Structure Update | Change `/tutorials/` to `/built-with-vibes/` | High | 🟢 Completed |
| 1.3 | Directory Structure Rename | Rename all tutorial-related directories and files | High | 🟢 Completed |
| 1.4 | Template Updates | Update Hugo templates with new section references | High | 🟢 Completed |
| 1.5 | CSS Class Renaming | Update CSS classes from `.tutorial-*` to `.built-with-vibes-*` | Medium | 🟢 Completed |
| 1.6 | Automation Script Updates | Update content creation scripts for new content type | Medium | 🟢 Completed |
| 1.7 | Navigation Updates | Update site navigation and menus | High | 🟢 Completed |