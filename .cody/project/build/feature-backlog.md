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