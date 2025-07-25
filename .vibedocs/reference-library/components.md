# UI Components Documentation

This document provides detailed specifications for reusable UI components in the By Marcelo Lewin website.

## Photo Gallery Component

### Overview
The photo gallery component provides an interactive image viewing experience for app showcase pages. It features automatic detection, multiple navigation methods, and responsive design.

### Technical Specifications

#### HTML Structure
```html
<div class="photo-gallery" data-gallery>
    <div class="photo-gallery-container">
        <div class="photo-gallery-track" data-track>
            <div class="photo-gallery-slide" data-slide="0">
                <img src="image01.jpg" alt="App Name gallery image 1" loading="lazy">
            </div>
            <!-- Additional slides... -->
        </div>
        <button class="photo-gallery-nav-arrow photo-gallery-nav-prev" data-prev>‹</button>
        <button class="photo-gallery-nav-arrow photo-gallery-nav-next" data-next>›</button>
    </div>
</div>
```

#### CSS Classes

| Class | Purpose |
|-------|---------|
| `.photo-gallery` | Main container with bottom spacing |
| `.photo-gallery-container` | 16:9 aspect ratio container with overflow hidden |
| `.photo-gallery-track` | Flex container for slides with CSS transforms |
| `.photo-gallery-slide` | Individual image containers (100% width) |
| `.photo-gallery-nav-arrow` | Navigation button base styling |
| `.photo-gallery-nav-prev` | Left arrow positioning |
| `.photo-gallery-nav-next` | Right arrow positioning |

#### JavaScript Functionality
- **File**: `themes/icodewithai/assets/js/photo-gallery.js`
- **Loading**: Conditional (only when gallery exists)
- **Processing**: Hugo Pipes minification

**Features:**
- Click navigation (left/right arrows)
- Keyboard navigation (arrow keys when hovering)
- Touch/swipe gestures for mobile
- Smart arrow display (hidden for single images)
- Smooth CSS transitions
- Drag prevention on images

### Usage

#### Automatic Detection
The gallery automatically appears when the following structure exists:
```
content/apps/app-name/
└── photogallery/
    ├── image01.jpg
    ├── image02.jpg
    └── image03.jpg
```

#### Template Integration
Add to Hugo templates using:
```html
{{ $galleryImages := .Resources.Match "photogallery/*" }}
{{ if $galleryImages }}
<!-- Gallery HTML structure -->
{{ end }}
```

### Visual Design

#### Colors
- **Arrow Background**: `rgba($primary-500, 0.7)` - Primary green with 70% opacity
- **Arrow Text**: `$neutral-100` - White text
- **Container Background**: `$neutral-800` - Dark background
- **Hover States**: Increased opacity and scale transforms

#### Dimensions
- **Container**: 16:9 aspect ratio (responsive)
- **Arrows**: 40px × 40px (desktop), 36px × 36px (mobile)
- **Arrow Font Size**: `$font-size-2xl` (desktop), `$font-size-xl` (mobile)

#### Animations
- **Slide Transitions**: `transform $animation-duration-normal ease-in-out`
- **Arrow Hover**: Scale 1.1 with opacity increase
- **Arrow Active**: Scale 0.95 for click feedback

### Responsive Behavior

#### Desktop
- Full-size arrows (40px)
- Keyboard navigation enabled
- Hover effects active

#### Mobile
- Smaller arrows (36px) 
- Touch/swipe gestures
- Optimized spacing

### Performance Optimizations

#### Lazy Loading
All gallery images use `loading="lazy"` attribute for performance.

#### Conditional Loading
JavaScript only loads when gallery exists:
```html
{{ if $galleryImages }}
{{ $js := resources.Get "js/photo-gallery.js" | minify }}
<script src="{{ $js.RelPermalink }}"></script>
{{ end }}
```

#### Efficient Rendering
- Hardware-accelerated CSS transforms
- Minimal DOM manipulation
- Passive event listeners where possible

---

## Image Optimization Guidelines

### Thumbnail Images (App Cards)

#### Specifications
- **Dimensions**: 480 × 120 pixels
- **Aspect Ratio**: 4:1 (landscape banner style)
- **File Formats**: JPG (preferred) or PNG
- **File Naming**: `thumbnail.jpg` or `thumbnail.png`
- **Location**: `/content/apps/app-name/thumbnail.jpg`

#### Optimization Settings
- **JPEG Quality**: 80-85% for optimal balance
- **File Size Target**: Under 50KB
- **Color Profile**: sRGB
- **Compression**: Progressive JPEG recommended

#### Content Guidelines
- **Purpose**: Visual preview of the app/project
- **Style**: Clean, professional representation
- **Text**: Minimal text overlay (logo/name acceptable)
- **Contrast**: Ensure good visibility against card backgrounds

### Gallery Images

#### Specifications
- **Dimensions**: 800 × 450 pixels (recommended)
- **Alternative Sizes**: 
  - Small: 640 × 360 pixels (faster loading)
  - Large: 1200 × 675 pixels (higher quality)
- **Aspect Ratio**: 16:9 (widescreen standard)
- **File Formats**: JPG (preferred) or PNG
- **File Naming**: Sequential with zero-padding (`image01.jpg`, `image02.jpg`, etc.)
- **Location**: `/content/apps/app-name/photogallery/`

#### Optimization Settings
- **JPEG Quality**: 80-85% for web display
- **File Size Target**: Under 200KB per image
- **Color Profile**: sRGB
- **Compression**: Progressive JPEG for larger images

#### Content Guidelines
- **Purpose**: Detailed views of app features, interfaces, or results
- **Quantity**: 1-8 images recommended (optimal loading performance)
- **Sequence**: Logical order showing user flow or key features
- **Quality**: High-resolution source material, professionally cropped

### Optimization Tools & Techniques

#### Recommended Tools
- **Online**: TinyPNG, ImageOptim, Squoosh
- **Desktop**: Photoshop (Save for Web), GIMP, ImageOptim (macOS)
- **Command Line**: ImageMagick, jpegoptim, pngcrush

#### Batch Processing Example
```bash
# ImageMagick batch resize and optimize
mogrify -resize 800x450 -quality 85 -format jpg *.png
```

#### Format Selection Guide
- **JPG**: Best for photographs, complex images, gradients
- **PNG**: Best for graphics, logos, images with transparency
- **Mixed**: Can mix formats within same gallery as needed

### Performance Monitoring

#### Key Metrics
- **Page Load Time**: Gallery images should not significantly impact initial page load
- **Largest Contentful Paint (LCP)**: Thumbnails should load quickly for good UX
- **Cumulative Layout Shift (CLS)**: Images should have proper aspect ratios to prevent layout shifts

#### Testing Recommendations
- Test on slow 3G connections
- Verify lazy loading functionality
- Check responsive behavior across devices
- Monitor Core Web Vitals in Google PageSpeed Insights

---

## Card Components

### App Card
Used on home page and apps listing page to display app information.

#### Structure
```html
<div class="app-card">
    <div class="app-card-thumbnail">  <!-- Optional -->
        <img src="thumbnail.jpg" alt="App thumbnail">
    </div>
    <h3>App Title</h3>
    <div class="app-meta">Version info</div>
    <p>App description</p>
    <span class="card-link">Learn more →</span>
</div>
```

#### Features
- Conditional thumbnail display
- Hover lift effects
- Consistent spacing and typography
- Responsive design

### Blog Post Card
Used for blog post previews.

#### Structure
```html
<article class="blog-post-card">
    <h3>Post Title</h3>
    <div class="post-meta">Date and reading time</div>
    <p>Post summary</p>
    <span class="card-link">Read more →</span>
</article>
```

### Podcast Card
Used for podcast episode previews on main podcast page and home page.

#### Structure
```html
<article class="podcast-card">
    <div class="podcast-card-thumbnail">  <!-- 1:1 aspect ratio -->
        <img src="episode-image.jpg" alt="Episode title">
    </div>
    <h3>Episode Title</h3>
    <div class="podcast-meta">Date • Guest Name</div>  <!-- Green styling -->
    <p>Episode description</p>
    <span class="card-link">Listen →</span>
</article>
```

#### Features
- 1:1 aspect ratio image thumbnails
- Green meta styling (`.podcast-meta`)
- Conditional guest display
- Status-based filtering (upcoming vs published)
- Consistent hover effects

---

## Layout Components

### Podcast Grid Layout
Specialized grid system for displaying podcast episodes in 3-column layout.

#### CSS Classes
- `.podcast-episodes` - Fixed 3-column grid with consistent card widths
- `.podcast-tagline` - Responsive tagline (single line on desktop, wraps on mobile)

#### Structure
```html
<div class="podcast-episodes">
    <!-- Podcast cards -->
</div>
```

#### Responsive Behavior
- **Desktop**: Fixed 3 columns (equal width), left-aligned cards
- **Mobile**: Single column layout
- **Card Behavior**: Cards maintain consistent width regardless of quantity (1, 2, or 3 cards)

#### Usage
- **Podcast main page**: All episode sections
- **Home page**: Latest 3 episodes section

---

## Button Components

### Standardized Button System (v1.2.0)
The site uses a unified button system with two standardized button types that provide consistent behavior across all pages.

#### Button Classes

##### `.btn-primary` - Primary Action Button
**Purpose**: Main call-to-action buttons (Live Preview, Register, Discord)

**Styling**:
- Background: Solid `$primary-600` (#16a34a) - green
- Text: `$neutral-100` (#ffffff) - white
- Height: `$button-height-sm` (40px)
- Hover: Solid `$primary-500` (#22c55e) - lighter green

##### `.btn-secondary` - Secondary Action Button  
**Purpose**: Supporting actions (GitHub, NPM, Learn More, On-Demand)

**Styling**:
- Background: Solid `#3a3a3a` - gray
- Text: `$neutral-100` (#ffffff) - white
- Height: `$button-height-sm` (40px)
- Hover: Solid `#2a2a2a` - darker gray

#### Shared Button Features
- **Animated underline**: Left-to-right animation on hover (green color for both)
- **Lift effect**: `-2px` translateY on hover
- **Drop shadow**: `0 4px 6px rgba(0, 0, 0, $opacity-shadow)` on hover
- **Solid transitions**: No gradients to prevent visual glitches
- **Customizable spacing**: Underline offset adjustable via `bottom` property

#### HTML Usage
```html
<!-- Primary actions -->
<a href="#" class="btn-primary">Live Preview</a>
<a href="#" class="btn-primary">Register</a>

<!-- Secondary actions -->
<a href="#" class="btn-secondary">GitHub</a>
<a href="#" class="btn-secondary">Learn More</a>
```

#### Templates Using Buttons
- `layouts/partials/header.html` - Discord button (`.btn-primary`)
- `layouts/apps/single.html` - Project action buttons
- `layouts/presentations/single.html` - Presentation action buttons

#### Migration History
**v1.2.0**: Standardized from 4+ different button implementations:
- `.discord-btn` → `.btn-primary`
- `.project-link-primary` → `.btn-primary`
- `.project-link-secondary` → `.btn-secondary`
- Removed `.project-link` base class

#### Customization
**Underline Spacing**: Adjust in `_components.scss`
```scss
.btn-primary, .btn-secondary {
  &::after {
    bottom: -11px; // Modify this value to change spacing
  }
}
```

---

## Navigation Components

### Header Navigation
Primary site navigation with responsive behavior.

### Navigation Dropdown Component
Reusable dropdown component for navigation menus with flexible alignment options.

#### Overview
The nav-dropdown component provides an interactive dropdown menu system for navigation items. It supports both left and right alignment, hover interactions, and responsive behavior for mobile devices.

#### Technical Specifications

##### HTML Structure
The component is implemented as a Hugo partial with the following structure:
```html
<div class="nav-dropdown nav-dropdown--right">
    <button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true">
        Menu Title
        <span class="nav-dropdown-arrow" aria-hidden="true">▾</span>
    </button>
    
    <ul class="nav-dropdown-menu" role="menu">
        <li class="nav-dropdown-item" role="none">
            <a href="/link" role="menuitem">Menu Item</a>
        </li>
        <li class="nav-dropdown-item" role="none">
            <a href="/external-link" role="menuitem" target="_blank" rel="noopener noreferrer">
                External Link
                <span class="external-link-icon" aria-hidden="true">↗</span>
            </a>
        </li>
    </ul>
</div>
```

##### CSS Classes
| Class | Purpose |
|-------|---------|
| `.nav-dropdown` | Main container with relative positioning |
| `.nav-dropdown--right` | Modifier for right-aligned dropdown menus |
| `.nav-dropdown-toggle` | Button styling with flex layout and hover effects |
| `.nav-dropdown-arrow` | Animated arrow indicator (rotates on hover/expand) |
| `.nav-dropdown-menu` | Dropdown menu with absolute positioning and transitions |
| `.nav-dropdown-item` | Individual menu item container |
| `.external-link-icon` | Icon for external links |

##### JavaScript Functionality
- **File**: `themes/icodewithai/assets/js/nav-dropdown.js`
- **Loading**: Conditional (only when dropdown exists)
- **Processing**: Hugo Pipes minification

**Features:**
- Click navigation for mobile devices
- Hover activation for desktop
- Keyboard navigation support
- ARIA accessibility attributes
- Smooth CSS transitions
- External link indicators

##### Hugo Partial Usage
```hugo
{{ partial "nav-dropdown" (dict 
    "title" "Menu Title"
    "items" (slice 
        (dict "name" "Internal Link" "url" "/page" "external" false)
        (dict "name" "External Link" "url" "https://example.com" "external" true)
    )
    "align" "right"
) }}
```

**Parameters:**
- `title`: Display text for the dropdown button
- `items`: Array of menu items with `name`, `url`, and `external` properties
- `align`: Optional alignment ("left" or "right") - defaults to "left"

##### Responsive Behavior
- **Desktop (>1050px)**: Hover-activated dropdowns with absolute positioning
- **Mobile (≤1050px)**: Click-activated dropdowns with static positioning
- **Accessibility**: Full ARIA support with keyboard navigation

##### Styling Notes
- Right-aligned dropdowns use `nav-dropdown--right` class
- Dropdown menus positioned with `left: 0` (default) or `right: 0` (right-aligned)
- Smooth transitions for opacity, transform, and visibility
- Z-index management for proper layering

### Mobile Menu Navigation
Interactive navigation system for tablet and mobile devices, providing an overlay-based menu interface.

#### Overview
The mobile menu component provides a responsive navigation solution that activates on screens 1050px and below. It features a hamburger toggle button, full-screen overlay interface, and smooth animations for enhanced user experience.

#### Technical Specifications

##### HTML Structure
```html
<!-- Mobile Menu Toggle Button -->
<button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
</button>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu-overlay">
    <div class="mobile-menu-content">
        <!-- Header with logo -->
        <div class="mobile-menu-header">
            <div class="mobile-menu-logo">
                <a href="/">
                    <img src="logo.png" alt="Logo" class="logo-image">
                </a>
                <span class="env-badge">local</span>
            </div>
        </div>
        
        <!-- Navigation items -->
        <nav class="mobile-nav">
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/contact" class="btn-primary">Contact</a>
        </nav>
    </div>
</div>
```

##### CSS Classes
| Class | Purpose |
|-------|---------|
| `.mobile-menu-toggle` | Hamburger toggle button |
| `.hamburger-line` | Individual hamburger line elements |
| `.mobile-menu-overlay` | Full-screen overlay container |
| `.mobile-menu-content` | Content wrapper within overlay |
| `.mobile-menu-header` | Header section with logo |
| `.mobile-menu-logo` | Logo container |
| `.mobile-nav` | Navigation links container |

##### JavaScript Functionality
- **File**: `assets/js/mobile-menu.js`
- **Loading**: Minified and fingerprinted via Hugo Pipes
- **Processing**: Automatic resource optimization

**Features:**
- Toggle menu visibility with hamburger button
- Close menu with overlay click or escape key
- Focus management for accessibility
- Automatic close on window resize (>1024px)
- Smooth animations and transitions

#### Usage
The mobile menu is automatically integrated into the header partial and activates on tablet and mobile screens. No additional configuration required.

#### Visual Design

##### Colors
- **Background**: `$neutral-800` - Dark overlay background
- **Text**: `$neutral-100` - Light text color
- **Accent**: `$primary-500` - Primary button and hover states
- **Border**: `$neutral-700` - Header border separator

##### Dimensions
- **Toggle Size**: 24px × 18px hamburger button
- **Overlay**: Full viewport coverage
- **Z-index**: `$z-index-mobile-menu: 200`

##### Animations
- **Hamburger**: Smooth rotation and fade transitions
- **Overlay**: Opacity fade-in/out transitions
- **Content**: Smooth slide and fade animations

#### Responsive Behavior

##### Desktop (>1050px)
- Mobile menu toggle hidden (`display: none`)
- Overlay forced hidden (`display: none !important`)
- Standard desktop navigation visible

##### Tablet/Mobile (≤1050px)
- Desktop navigation hidden
- Mobile menu toggle visible
- Overlay system activated

#### Performance Optimizations
- Conditional JavaScript loading
- CSS transitions for smooth animations
- Efficient DOM manipulation
- Debounced resize event handling

#### Accessibility Features
- ARIA labels for screen readers
- Proper focus management
- Keyboard navigation support (escape key)
- Logical tab order within menu

### Footer Navigation
Secondary navigation links organized in columns.

### Back Links
Contextual navigation for returning to listing pages.

---

## Hugo Pipes Image Integration

### Theme Image Components
Theme images are now processed through Hugo Pipes for consistent asset management:

#### Logo Component
**Usage in Templates:**
```html
{{ $logo := resources.Get "images/logo.png" | resources.Fingerprint }}
{{ if $logo }}
<img src="{{ $logo.RelPermalink }}" alt="By Marcelo Lewin Logo" class="logo-image">
{{ end }}
```

**Used in:**
- `layouts/partials/header.html` - Primary navigation
- `layouts/partials/footer.html` - Footer branding

#### Profile Photo Component
**Usage in Templates:**
```html
{{ $profileImg := resources.Get "images/marcelolewin.jpg" | resources.Fingerprint }}
{{ if $profileImg }}
<img src="{{ $profileImg.RelPermalink }}" alt="Marcelo Lewin" class="bio-image" loading="lazy">
{{ end }}
```

**Used in:**
- `layouts/bio/single.html` - Professional bio page

#### Certificate Badge Components
**Usage in Templates:**
```html
{{ $certManager := resources.Get "images/icon-contentful-certified-content-manager.png" | resources.Fingerprint }}
{{ if $certManager }}
<img src="{{ $certManager.RelPermalink }}" alt="Contentful Certified Content Manager" class="certificate-image" loading="lazy">
{{ end }}
```

**Used in:**
- `layouts/bio/single.html` - Professional certifications section

#### Technical Benefits
- **Fingerprinted URLs**: Automatic cache busting for production deployments
- **Error Handling**: Graceful degradation when images are missing
- **Performance**: Lazy loading and optimized asset delivery
- **Consistency**: Unified pipeline with SCSS and JavaScript assets
- **Maintainability**: Centralized image management in assets folder

#### Migration Notes
- **v1.1.9**: Migrated from `static/images/` to `assets/images/` for theme images
- **Favicon Management**: Static favicons remain in `static/images/` for browser compatibility
- **Content Images**: App thumbnails and galleries continue using page bundle resources

---

## Future Component Additions

This document should be expanded as new components are added to the design system:

- Modal/Dialog components
- Form components
- Tab components
- Accordion components
- Toast/notification components

Each new component should include:
- Technical specifications
- Usage guidelines
- Visual design details
- Responsive behavior
- Performance considerations