# Content Management

## Creating New Content

### Multi-Repository Deployment (v1.2.2+)

The website now uses a multi-repository architecture:
- **Source Repository**: Contains Hugo source code, content, and themes
- **Staging**: `dev` branch → `bml-website-next` repository → `next.bymarcelolewin.com`
- **Production**: `main` branch → `bml-website-prod` repository → `www.bymarcelolewin.com`

Create new blog posts, app pages, or presentations:
```bash
# Blog posts
hugo new content blog/my-new-blog-article.md
hugo new content blog/building-with-claude.md
hugo new content blog/javascript-tips.md

# App showcase pages (creates page bundles)
hugo new content apps/my-new-app-name/index.md
hugo new content apps/todo-cli/index.md
hugo new content apps/weather-widget/index.md

# Presentations
hugo new content presentations/my-presentation-topic.md
hugo new content presentations/ai-ethics-workshop.md
hugo new content presentations/contentful-masterclass.md

# Podcast episodes
hugo new content podcast/episode-name.md
hugo new content podcast/ai-product-development.md
hugo new content podcast/no-code-future.md
```

## Content Structure

- `content/blog/` - Blog posts
- `content/apps/` - App showcase pages (page bundles with images)
- `content/podcast/` - Podcast episodes
- `content/presentations/` - Presentation pages

### App Page Bundles
Apps use Hugo page bundles for better organization and image management:

```
content/apps/app-name/
├── index.md                    # App content and metadata
├── thumbnail.jpg/.png          # Optional card thumbnail (480x120px, 4:1 ratio)
└── photogallery/              # Optional photo gallery
    ├── image01.jpg/.png       # Gallery images (800x450px, 16:9 ratio)
    ├── image02.jpg/.png       # Sorted by filename (01, 02, 03...)
    └── image03.jpg/.png
```

### Image Requirements

#### Thumbnails (for cards)
- **Dimensions**: 480x120 pixels (4:1 aspect ratio)
- **Formats**: JPG or PNG
- **File naming**: `thumbnail.jpg` or `thumbnail.png`
- **Purpose**: Displayed on home page and apps list page
- **Behavior**: Only shows if file exists; cards work normally without thumbnails

#### Photo Gallery Images
- **Dimensions**: 800x450 pixels (16:9 aspect ratio) recommended
- **Alternative sizes**: 640x360px (smaller), 1200x675px (larger)
- **Formats**: JPG or PNG (can mix formats in same gallery)
- **File naming**: `image01.jpg`, `image02.jpg`, `image03.jpg`, etc.
- **Sorting**: Images display in filename order (01, 02, 03...)
- **Purpose**: Full photo gallery on app detail pages
- **Behavior**: Only shows if photogallery folder exists with images

#### Image Optimization Tips
- **Compression**: Use 80-85% quality for JPG images
- **File sizes**: Keep under 200KB per image for optimal loading
- **Alt text**: Automatically generated based on app title and image number
- **Lazy loading**: Built-in performance optimization
- **Responsive**: Images scale automatically across all devices

## SEO Management

The site includes comprehensive SEO optimization:

### Meta Tags & Descriptions
Add SEO-friendly descriptions to your content front matter:

**Blog posts:**
```yaml
+++
title = "My Blog Post"
description = "This description appears in Google search results and social media shares"
+++
```

**Apps:**
```yaml
+++
title = "My App"
description = "SEO description for search engines and social media"
+++
```

**Presentations:**
```yaml
+++
title = "My Presentation Topic"
summary = "Brief summary for listing pages"
description = "Detailed description for search engines and social media"
date_time = "2024-07-15T14:00:00-08:00"
timezone = "PST"
presenters = "Marcelo Lewin"
status = "upcoming"
external_url = "https://example.com/presentation-link"
+++

### Podcast Episodes
Podcast episodes use standard markdown files with comprehensive frontmatter:

```yaml
+++
title = "Episode Title"
slug = "episode-slug"
date = "YYYY-MM-DD"
draft = false
status = "published"  # or "upcoming"
description = "Episode description for SEO and listings"
image = "images/podcast/episode-slug.jpg"
episode_url = "https://open.spotify.com/episode/spotify-episode-id"
host = "Marcelo Lewin"
guest = "Guest Name, Guest Title"
+++

Episode content in markdown format...
```

#### Episode Status
- **"published"**: Episode is live and appears in Latest/All Episodes sections
- **"upcoming"**: Episode appears in Upcoming Episodes section

#### Episode Images
- **Location**: `themes/bymarcelolewin/assets/images/podcast/`
- **Naming**: Use episode slug (e.g., `episode-001.jpg`)
- **Dimensions**: 1:1 aspect ratio (square) recommended
- **Formats**: JPG or PNG
```

### SEO Priority Order
The site automatically uses the best available description:
1. Front matter `description` (highest priority)
2. Front matter `summary` 
3. Site default description from `hugo.toml` (fallback)

### Included SEO Features
- **Meta descriptions** - Optimized for search engines
- **Open Graph tags** - Facebook, LinkedIn sharing previews
- **Twitter Card support** - Twitter sharing previews
- **Author meta tags** - Content attribution
- **Structured page titles** - "Page Title | By Marcelo Lewin"

### Social Media Sharing
Content automatically includes proper meta tags for rich previews when shared on:
- Facebook
- LinkedIn
- Twitter/X
- Other social platforms

## Hugo Pipes Image Processing

### Theme Images
Theme images (logos, profile photos, certificates) are processed through Hugo Pipes for optimization and cache busting:

#### File Location
- **Source**: `themes/bymarcelolewin/assets/images/`
- **Generated**: `/public/images/[filename].[hash].[ext]`

#### Supported Images
- `marcelolewin.jpg` - Profile photo for bio page
- `logo-bml.png` - Site logo (header and footer)
- `icon-contentful-certified-content-manager.png` - Certificate badge
- `icon-contentful-certified-professional.png` - Certificate badge
- `podcast/podcast-cover.png` - Main podcast cover image
- `podcast/episode-*.jpg` - Individual episode cover images (1:1 aspect ratio)

#### Template Usage
Images are referenced using Hugo's `resources.Get` function:
```html
{{ $profileImg := resources.Get "images/marcelolewin.jpg" | resources.Fingerprint }}
{{ if $profileImg }}
<img src="{{ $profileImg.RelPermalink }}" alt="Marcelo Lewin" loading="lazy">
{{ end }}
```

#### Benefits
- **Cache Busting**: Fingerprinted URLs ensure proper cache invalidation
- **Error Handling**: Graceful fallbacks when images are missing
- **Performance**: Lazy loading and optimized delivery
- **Consistency**: Unified asset pipeline with SCSS and JavaScript

#### File Management
- **Static Images**: Favicons and PWA icons remain in `static/images/`
- **Theme Images**: Logos, profiles, icons processed through Hugo Pipes
- **Content Images**: App thumbnails and galleries remain as page bundle resources

## SEO and Search Engine Control

### Environment-Specific Search Engine Indexing (v1.2.2+)

The website implements environment-specific search engine control:

- **Production** (`www.bymarcelolewin.com`): Fully indexed by search engines
- **Staging** (`next.bymarcelolewin.com`): Blocked from search engines using `noindex, nofollow` meta tags

This is configured via the `noindex` parameter in `config/next/config.toml` and automatically adds:
```html
<meta name="robots" content="noindex, nofollow">
```

### Testing SEO Configuration
- **Production**: View page source → should NOT contain "noindex"
- **Staging**: View page source → should contain `<meta name="robots" content="noindex, nofollow">`