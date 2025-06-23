## Content Management

Create a new blog or app posts:
```bash
  hugo new content blog/my-new-blog-article.md
  hugo new content blog/building-with-claude.md
  hugo new content blog/javascript-tips.md

  hugo new content apps/my-new-app-name.md
  hugo new content apps/todo-cli.md
  hugo new content apps/weather-widget.md
```

### Content Structure

- `content/blog/` - Blog posts
- `themes/marcelolewin/` - Custom theme files
- `static/` - Static assets
- `hugo.toml` - Site configuration

## Theme Customization

The custom theme is located in `themes/bymarcelolewin/` and includes:

- `layouts/` - HTML templates
- `static/css/` - Stylesheets (preserving original design)
- `layouts/partials/` - Reusable components (header, footer)
- `static/favicon.ico` - Site favicon

### SEO Management

The site includes comprehensive SEO optimization:

#### Meta Tags & Descriptions
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

#### SEO Priority Order
The site automatically uses the best available description:
1. Front matter `description` (highest priority)
2. Front matter `summary` 
3. Site default description from `hugo.toml` (fallback)

#### Included SEO Features
- **Meta descriptions** - Optimized for search engines
- **Open Graph tags** - Facebook, LinkedIn sharing previews
- **Twitter Card support** - Twitter sharing previews
- **Author meta tags** - Content attribution
- **Structured page titles** - "Page Title | By Marcelo Lewin"

#### Social Media Sharing
Content automatically includes proper meta tags for rich previews when shared on:
- Facebook
- LinkedIn
- Twitter/X
- Other social platforms