# Project Memory


## In the previous chat session, we planned in detail a complete SEO sub-system for icodewith.ai website (this project)

## Project Overview
Implement a centralized SEO system for the Hugo site using YAML configuration files with inheritance from defaults.

## Key Files in This Directory
- **readthisfirst.md** - This summary file (start here)
- **starting-prompt.md** - Original user requirements
- **qanda.md** - Complete Q&A session with all decisions made
- **plan.md** - 7-phase implementation plan with detailed tasks

## Quick Summary of Decisions Made

### Architecture
- **File format**: YAML (.yaml) for better readability and comments
- **Structure**: `/data/seo/` folder with defaults.yaml + individual page files
- **Inheritance**: Use `defaults.fieldname` syntax to inherit from defaults
- **Social images**: Organized in `/data/seo/images/` with content-type subfolders

### Folder Structure
```
data/seo/
├── defaults.yaml
├── images/
│   ├── default-social.png
│   └── apps/
│       └── listpage-social.png
├── homepage.yaml
├── aboutmarcelo.yaml
├── apps/
│   ├── listpage.yaml
│   └── individual-app.yaml
└── blog/
    ├── listpage.yaml
    └── individual-post.yaml
```

### Key Implementation Details
- **Single SEO partial**: `/themes/icodewithai/layouts/partials/seo.html`
- **Replace existing SEO**: Remove all SEO code from `baseof.html`, replace with `{{ partial "seo.html" . }}`
- **URL slugs**: Keep in existing Hugo file structure (not in SEO files)
- **Inheritance**: Any field can be added to defaults.yaml and accessed via dot notation
- **Staging**: Keep existing noindex logic for staging environment

### Default Fields Defined
```yaml
# Basic SEO
title: "iCodeWith.ai | Using AI to code and build apps faster than ever before"
site_name: "iCodeWith.ai"
description: "With AI, we can now code and build apps faster than ever before..."
author: "Marcelo Lewin"

# Social Media
social_image: "images/default-social.png"
twitter_card_type: "summary_large_image"

# Technical SEO
robots: "index, follow"
canonical_base_url: "https://icodewith.ai"

# Language/Locale
language: "en-US"
locale: "en_US"
```

## Implementation Approach
**7-phase plan** - each phase can be implemented, tested, and deployed independently:
1. Foundation & Core SEO Partial
2. Social Media & Open Graph
3. Static Pages SEO
4. Content Type List Pages
5. Individual Content Items
6. Advanced Features & Validation
7. Migration & Cleanup

## Current Status
- Planning complete
- All architectural decisions made
- Ready to begin Phase 1 implementation

## Next Steps
1. Review `plan.md` for detailed Phase 1 tasks
2. Create todo list for Phase 1
3. Begin implementation starting with folder structure and defaults.yaml
4. Test each phase before moving to next

## Key User Preferences
- Centralize everything in one location
- Use inheritance to avoid duplication
- Keep existing frontmatter fields (don't break anything)
- YAML format for maintainability
- Comprehensive social media support
- One social image format across all platforms

## For more details, please check out this folder's other documents:
- starting-prompt.md
- qanda.md
- plan.md