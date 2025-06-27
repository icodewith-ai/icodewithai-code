# Content Management

## Creating New Content

Create new blog posts, app pages, or presentations:
```bash
# Blog posts
hugo new content blog/my-new-blog-article.md
hugo new content blog/building-with-claude.md
hugo new content blog/javascript-tips.md

# App showcase pages
hugo new content apps/my-new-app-name.md
hugo new content apps/todo-cli.md
hugo new content apps/weather-widget.md

# Presentations
hugo new content presentations/my-presentation-topic.md
hugo new content presentations/ai-ethics-workshop.md
hugo new content presentations/contentful-masterclass.md
```

## Content Structure

- `content/blog/` - Blog posts
- `content/apps/` - App showcase pages
- `content/presentations/` - Presentation pages

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