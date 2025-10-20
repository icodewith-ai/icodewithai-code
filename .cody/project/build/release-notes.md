# Release Notes

This document lists new features, bug fixes and other changes implemented during a particular build, also known as a version.

## Table of Contents
- [v1.4.6-home-page-updates-part-1 - October 20, 2025](#v146-home-page-updates-part-1---october-20-2025)
- [v1.4.5-consolidate-asset-folders](#v145-consolidate-asset-folders)
- [v1.4.4-consolidate-images](#v144-consolidate-images)

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
