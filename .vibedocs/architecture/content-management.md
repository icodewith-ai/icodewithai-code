# Content Management

## Creating New Content

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
```

## Content Structure

- `content/blog/` - Blog posts
- `content/apps/` - App showcase pages (page bundles with images)
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