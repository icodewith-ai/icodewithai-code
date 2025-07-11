# SEO System Maintenance Guide

## Overview
This guide explains how to maintain and update the centralized SEO system for iCodeWith.ai. All SEO content is managed through YAML files, making it easy to update titles, descriptions, and social media content without touching code.

## Folder Structure

### SEO Content Files
```
data/seo/
├── defaults.yaml                    # Site-wide defaults (MOST IMPORTANT)
├── content-types/                   # Content type specific SEO
│   ├── apps/
│   │   ├── listpage.yaml           # Apps listing page (/apps/)
│   │   ├── galactic-invaders.yaml  # Individual app (optional)
│   │   └── my-app.yaml             # Individual app (optional)
│   ├── blog/
│   │   ├── listpage.yaml           # Blog listing page (/blog/)
│   │   ├── post-name.yaml          # Individual post (optional)
│   │   └── another-post.yaml       # Individual post (optional)
│   ├── presentations/
│   │   ├── listpage.yaml           # Presentations listing (/presentations/)
│   │   └── presentation-name.yaml  # Individual presentation (optional)
│   └── podcast/
│       ├── listpage.yaml           # Podcast listing (/podcast/)
│       └── episode-name.yaml       # Individual episode (optional)
└── single-pages/                   # Static pages
    ├── homepage.yaml               # Homepage (/)
    └── aboutmarcelo.yaml           # About page (/about-marcelo/)
```

### Social Media Images
```
static/images/seo/
├── default-social.png              # Default image (1200x630px)
├── content-types/                  # Future: Content-type specific images
│   ├── apps/
│   ├── blog/
│   ├── presentations/
│   └── podcast/
└── single-pages/                   # Future: Page-specific images
    ├── homepage-social.png
    └── aboutmarcelo-social.png
```

## How Inheritance Works

### The Inheritance Chain
When someone visits a page, the SEO system looks for content in this order:

1. **Individual SEO file** (e.g., `galactic-invaders.yaml`)
2. **Content-type list page** (e.g., `apps/listpage.yaml`)
3. **Site defaults** (`defaults.yaml`)

### Inheritance Syntax
Use `"defaults.fieldname"` to inherit from defaults.yaml:

```yaml
title: "My Custom Title"
description: "defaults.description"  # Uses description from defaults.yaml
author: "defaults.author"            # Uses author from defaults.yaml
```

## Maintenance Tasks

### 1. Updating Site-Wide SEO (Most Common)
**File**: `data/seo/defaults.yaml`

**When to update:**
- Site description changes
- Twitter handle changes
- Default social image changes
- Site branding updates

**Example:**
```yaml
title: "iCodeWith.ai | Using AI to code and build apps faster than ever before"
description: "Your new site description here"
social_image: "images/seo/default-social.png"
```

### 2. Updating Content Type Pages
**Files**: `data/seo/content-types/[type]/listpage.yaml`

**When to update:**
- Change how blog listing page appears in search
- Update apps page description
- Modify presentation page branding

**Example for blog listing:**
```yaml
title: "AI Development Blog | Your New Title Here"
description: "Your new blog description"
social_image: "defaults.social_image"
social_image_alt: "Custom alt text for blog listing"
```

### 3. Creating Individual Content SEO
**Files**: `data/seo/content-types/[type]/[content-slug].yaml`

**When to create:**
- Important blog posts that need custom SEO
- Key apps that should stand out
- Special presentations or episodes

**Naming convention:**
- For `/apps/my-app/` → create `apps/my-app.yaml`
- For `/blog/my-post/` → create `blog/my-post.yaml`
- For `/presentations/my-talk/` → create `presentations/my-talk.yaml`

### 4. Updating Static Pages
**Files**: `data/seo/single-pages/[page].yaml`

**When to update:**
- Homepage messaging changes
- About page updates
- New static pages added

## Content Guidelines

### Title Best Practices
- **Homepage**: Focus on main value proposition
- **About**: Personal/professional branding
- **Blog posts**: Include keywords, make clickable
- **Apps**: Highlight what the app does
- **Presentations**: Include topic and value

### Description Best Practices
- **Length**: 150-160 characters ideal
- **Action-oriented**: Use verbs like "Learn", "Discover", "Build"
- **Value-focused**: What will the reader get?
- **Avoid**: Generic descriptions, keyword stuffing

### Social Media Alt Text
- **Be descriptive**: Explain what's in the image
- **Include branding**: Mention iCodeWith.ai
- **Match content**: Alt text should relate to the page topic

## Social Media Images

### Current Setup
**All pages use the same image**: `images/seo/default-social.png`

### Image Specifications
- **Size**: 1200x630 pixels (required)
- **Format**: PNG or JPG
- **File size**: Under 1MB
- **Design**: Include site branding and key messaging

### Future Custom Images
When ready to create custom images:

1. **Content-type images**: One per content type
   - `static/images/seo/content-types/apps/listpage-social.png`
   - `static/images/seo/content-types/blog/listpage-social.png`

2. **Individual content images**: For special content
   - `static/images/seo/content-types/apps/my-app-social.png`
   - `static/images/seo/content-types/blog/important-post-social.png`

3. **Update YAML files**: Change from `"defaults.social_image"` to specific path

## Quick Reference

### Most Common Updates
1. **Site description**: Edit `defaults.yaml`
2. **Blog listing**: Edit `content-types/blog/listpage.yaml`
3. **Homepage**: Edit `single-pages/homepage.yaml`
4. **Important blog post**: Create `content-types/blog/post-name.yaml`

### When to Create Individual SEO Files
✅ **Create for:**
- Important blog posts (cornerstone content)
- Key apps you want to highlight
- Special presentations or popular episodes
- Content with unique value propositions

❌ **Don't create for:**
- Every single blog post (unless each is special)
- Similar apps with same messaging
- Content that works fine with list page SEO

### Testing Your Changes
1. **Local testing**: Run `hugo server` and check page source
2. **Live testing**: Deploy and test with social media debuggers
3. **Social media tools**:
   - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)

## Troubleshooting

### Page not showing custom SEO
- Check file naming: slug must match content folder/file name
- Verify YAML syntax: use YAML validators
- Check inheritance: make sure `"defaults.fieldname"` is quoted

### Social media image not appearing
- Verify image exists at specified path
- Check image size (must be 1200x630px)
- Test with social media debugging tools

### Changes not appearing
- Restart Hugo development server
- Check YAML syntax for errors
- Verify file is in correct folder

## YAML File Template

```yaml
# [Page Name] SEO Configuration
# This file contains SEO settings for [describe page]
# Uses inheritance from defaults.yaml where appropriate

# Basic SEO - Custom content
title: "Your Custom Title | iCodeWith.ai"
description: "Your compelling description that encourages clicks and includes relevant keywords."
author: "defaults.author"

# Social Media - Use default image with custom alt text
social_image: "defaults.social_image"
social_image_alt: "Descriptive alt text that explains the image and relates to this specific page"
twitter_card_type: "defaults.twitter_card_type"
twitter_site: "defaults.twitter_site"
twitter_creator: "defaults.twitter_creator"

# Open Graph Image Properties - inherit from defaults
og_image_width: "defaults.og_image_width"
og_image_height: "defaults.og_image_height"
og_image_type: "defaults.og_image_type"

# Technical SEO - inherit from defaults
robots: "defaults.robots"
canonical_base_url: "defaults.canonical_base_url"

# Language/Locale - inherit from defaults
language: "defaults.language"
locale: "defaults.locale"
```