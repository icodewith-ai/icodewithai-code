# Release Notes

This document lists new features, bug fixes and other changes implemented during a particular build, also known as a version.

## Table of Contents
- [v1.8.1-updates-to-presentation-and-podcast-pages - December 2, 2025](#v181-updates-to-presentation-and-podcast-pages---december-2-2025)
- [v1.8.0-newsletter-page - November 19, 2025](#v180-newsletter-page---november-19-2025)
- [v1.7.0-rebrand-to-i-build-with-ai - November 18, 2025](#v170-rebrand-to-i-build-with-ai---november-18-2025)
- [v1.6.0-scrolling-component - October 21, 2025](#v160-scrolling-component---october-21-2025)
- [v1.5.0-faq-component - October 20, 2025](#v150-faq-component---october-20-2025)
- [v1.4.6-home-page-updates-part-1 - October 20, 2025](#v146-home-page-updates-part-1---october-20-2025)
- [v1.4.5-consolidate-asset-folders](#v145-consolidate-asset-folders)
- [v1.4.4-consolidate-images](#v144-consolidate-images)

---

# v1.8.1-updates-to-presentation-and-podcast-pages - December 2, 2025

## Overview

Enhanced the Podcast and Presentations sections with improved content organization, conditional display logic, and YouTube video embeds for on-demand presentations. This version introduces a new three-tier status system (upcoming, on-demand, completed) for presentations and streamlines the user experience by conditionally displaying sections and embedding videos directly in presentation pages.

## Key Features

**Podcast List Page Updates**
- **Conditional "On-Demand" Heading**: The "On-Demand" section heading now only displays when there are upcoming episodes, preventing confusing empty state scenarios
- Improved visual hierarchy by hiding unnecessary headings when content doesn't exist

**Presentations List Page Updates**
- **New Three-Section Layout**: Presentations now organized into three distinct sections:
  - **Upcoming**: Shows presentations with `status = "upcoming"` sorted by date ascending (soonest first)
  - **On-Demand**: Shows presentations with `status = "on-demand"` sorted by date descending (latest first)
  - **Completed**: Shows presentations with `status = "completed"` sorted by date descending
- **Removed Description Text**: Eliminated `summary` field from presentation cards for cleaner, more scannable list view
- **Better Content Lifecycle**: New on-demand status provides clear path from upcoming → on-demand → completed

**Presentations Single Page Updates**
- **YouTube Video Embeds**: On-demand presentations now embed YouTube videos directly in the page instead of displaying static images
- **Multiple URL Format Support**: Handles various YouTube URL formats:
  - `https://www.youtube.com/watch?v=VIDEO_ID`
  - `https://youtu.be/VIDEO_ID`
  - `https://www.youtube.com/embed/VIDEO_ID`
- **Responsive Video Player**: Uses same video-embed-responsive wrapper as podcast pages for consistent 16:9 aspect ratio
- **Conditional Links Section**: Automatically hides the Links section for on-demand presentations (since video is embedded, external link redundant)
- **Backward Compatible**: Non-on-demand presentations (upcoming, completed) continue displaying images as before

## Code Changes

**Files Modified** (3 files)
- `themes/ibuildwithai/layouts/podcast/list.html` - Added conditional heading display logic
- `themes/ibuildwithai/layouts/presentations/list.html` - Added on-demand section, removed descriptions, updated filtering
- `themes/ibuildwithai/layouts/presentations/single.html` - Added YouTube embed logic, conditional Links section

**Documentation Files Created** (3 files)
- `.cody/project/build/v1.8.1-updates-to-presentation-and-podcast-pages/design.md` - Technical design document
- `.cody/project/build/v1.8.1-updates-to-presentation-and-podcast-pages/tasklist.md` - Implementation task tracking (17 tasks across 5 phases)
- `.cody/project/build/v1.8.1-updates-to-presentation-and-podcast-pages/retrospective.md` - Lessons learned and future improvements

**Documentation Files Modified** (1 file)
- `.cody/project/build/feature-backlog.md` - Marked version as completed

## Technical Implementation

**Hugo Template Logic**
- Leveraged Hugo's `where` function for clean status-based filtering
- Implemented video ID extraction using `findRE` and string manipulation
- Used conditional blocks with `{{ if eq .Params.status "on-demand" }}` for clean branching
- Reused existing CSS classes (`video-embed-responsive`, `podcast-episodes`, `app-card`) for zero CSS changes

**YouTube Video ID Extraction**
- Regex-based URL pattern matching for multiple formats
- Extracts video ID from query parameters (`?v=`) and path segments
- Graceful fallback to image display if URL parsing fails

**Backward Compatibility**
- New "on-demand" status is purely additive
- Existing presentations with "upcoming" or "completed" status unaffected
- No breaking changes to existing content or frontmatter

## Testing

**Comprehensive Testing Completed**
- ✅ Podcast page conditional heading (with/without upcoming episodes)
- ✅ Presentations list three-section layout
- ✅ Status-based filtering (upcoming, on-demand, completed)
- ✅ Date sorting (ascending for upcoming, descending for on-demand/completed)
- ✅ Description removal from presentation cards
- ✅ YouTube video embed functionality
- ✅ Multiple YouTube URL format handling
- ✅ Links section conditional display
- ✅ Responsive behavior (mobile, tablet, desktop)
- ✅ Build and staging deployment verification

## Impact

**User Experience**
- Cleaner presentation list view without redundant descriptions
- Direct video access for on-demand presentations (no extra clicks)
- Clear content organization with three-tier status system
- Reduced clutter by hiding unnecessary Links section for embedded videos

**Content Management**
- New "on-demand" status provides clear content lifecycle
- Easy conversion from completed presentations to on-demand
- Date sorting ensures latest on-demand content appears first

**Developer Experience**
- Reusable YouTube embed pattern for future video implementations
- Clean conditional logic makes templates maintainable
- Zero new CSS demonstrates value of consistent design patterns

## Performance & Metrics

**Build Performance**
- No impact on Hugo build times
- Efficient Hugo template logic with minimal processing overhead

**Timeline**
- Planning & Design: ~1 hour
- Implementation: ~2 hours (3 phases, 10 tasks)
- Testing: Completed by user
- Documentation: ~1 hour
- Total: ~4 hours active development

**Task Distribution**
- Total Tasks: 17
- Phase 1 (Podcast): 1 task
- Phase 2 (Presentations List): 5 tasks
- Phase 3 (Presentations Single): 4 tasks
- Phase 4 (Testing): 6 tasks
- Phase 5 (Documentation): 5 tasks (including git commit and deployment)
- Completion Rate: 100%

## Future Enhancements

**Potential Improvements**
1. Add video play icon overlay on on-demand thumbnails in list view
2. Implement automatic YouTube thumbnail extraction if image not provided
3. Add video duration display for on-demand presentations
4. Create content management documentation for "on-demand" status usage
5. Extract YouTube ID extraction logic into reusable Hugo partial

**Content Strategy**
- Establish process for converting completed presentations to on-demand
- Define guidelines for when to use on-demand vs. completed status
- Plan migration of existing presentations to on-demand where appropriate

## Other Notes

**Development Process**: This version demonstrated the value of phase-based implementation for multi-component changes. Clear dependencies between tasks prevented rework and maintained code quality throughout.

**Reusable Patterns**: Successfully reused YouTube embed structure from podcast pages, proving the value of consistent component patterns across the platform.

**Zero Breaking Changes**: All changes were purely additive, maintaining backward compatibility with existing content while enabling new functionality.

---

# v1.8.0-newsletter-page - November 19, 2025

## Overview

Implemented a dedicated newsletter signup page at `/newsletter` with full integration to Resend (email notifications) and Mailchimp (subscriber list management). The implementation follows the existing contact form design pattern for visual consistency and includes comprehensive security enhancements across all form endpoints (contact, newsletter, and reminder forms).

## Key Features

**Newsletter Signup Page**
- New page at `/newsletter` with clean, focused layout
- Form collecting First Name, Last Name, and Email (all required)
- Design strictly follows existing contact page format for consistency
- "Newsletter" heading with highlight styling matching Blog page
- Subheading: "Sign up to our newsletter to stay up to date"
- Immediate "Thank You" message upon successful submission (no page reload)

**Dual Backend Integration**
- **Resend Integration**: Sends email notification to site owner with subscriber details
- **Mailchimp Integration**: Automatically adds subscriber to configured Mailchimp audience list
- Graceful handling of "Member Exists" scenarios (users already subscribed)
- Environment-based configuration for easy deployment across environments

**Navigation Updates**
- Added "Newsletter" link to top navigation (under "About", above "Contact")
- Added "Newsletter" link to footer navigation (same location)
- Consistent placement across desktop and mobile layouts

**Security Enhancements** (Applied to all forms: contact, newsletter, reminder)
- **CORS Restrictions**: Limited to `https://ibuildwith.ai` and `https://www.ibuildwith.ai` (previously `*`)
- **Rate Limiting**: Reduced from 5 to 3 requests per hour per IP address
- **Email Validation**: Improved regex to require minimum 2-character TLD (blocks invalid emails like `name@xyz.a`)
- Consistent security measures across all three form endpoints

**Client-Side Validation**
- Required field validation for First Name, Last Name, and Email
- Email format validation with improved regex
- Real-time validation on field blur
- Error messages displayed inline
- Focus management for accessibility

## Code Changes

**Frontend Files Created** (3 files)
- `themes/ibuildwithai/layouts/newsletter/single.html` - Newsletter page layout
- `content/newsletter.md` - Newsletter page content
- `themes/ibuildwithai/assets/js/newsletter-form.js` - Form validation and submission logic

**Backend Files Created** (1 file)
- `backend/netlify/functions/newsletter-signup.js` - Netlify Function for dual integration

**Frontend Files Modified** (4 files)
- `themes/ibuildwithai/layouts/partials/header.html` - Added Newsletter link
- `themes/ibuildwithai/layouts/partials/footer.html` - Added Newsletter link
- `themes/ibuildwithai/assets/js/contact-form.js` - Security improvements
- `config/_default/config.toml` - Added newsletter parameter

**Backend Files Modified** (3 files)
- `backend/netlify/functions/contact-form.js` - Security improvements (CORS, rate limit, email validation)
- `backend/netlify/functions/reminder-form.js` - Security improvements (CORS, rate limit, email validation)
- `backend/package.json` - Added `@mailchimp/mailchimp_marketing` dependency

**Documentation Files Created** (5 files)
- `.cody/project/build/v1.8.0-newsletter-page/design.md` - Technical design document
- `.cody/project/build/v1.8.0-newsletter-page/tasklist.md` - Implementation task tracking
- `.cody/project/build/v1.8.0-newsletter-page/walkthrough.md` - Implementation summary
- `.cody/project/build/v1.8.0-newsletter-page/MAILCHIMP_SETUP.md` - Comprehensive Mailchimp setup guide
- `.cody/project/build/v1.8.0-newsletter-page/retrospective.md` - Lessons learned and action items

**Documentation Files Modified** (2 files)
- `README.md` - Added environment variable documentation
- `.cody/project/build/feature-backlog.md` - Marked version as completed

## Environment Variables

**New Variables Required** (3 variables)
- `MAILCHIMP_API_KEY` - API key for Mailchimp integration
- `MAILCHIMP_SERVER_PREFIX` - Server prefix (e.g., `us20`) for API endpoint
- `MAILCHIMP_LIST_ID` - Target audience/list ID for subscribers

**Existing Variables Reused** (2 variables)
- `RESEND_API_KEY` - For sending email notifications
- `RECIPIENT_EMAIL` - Where to send notifications

## Bug Fixes

**CORS Production Issue**
- **Issue**: Forms failing in production with CORS errors
- **Root Cause**: CORS set to `https://ibuildwith.ai` but site accessed via `https://www.ibuildwith.ai`
- **Fix**: Dynamic CORS origin detection supporting both www and non-www variants
- **Impact**: All three forms (contact, newsletter, reminder) now work correctly in production

**Email Validation Too Permissive**
- **Issue**: Email validation accepted single-character TLDs (e.g., `name@xyz.a`)
- **Root Cause**: Regex pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` too broad
- **Fix**: Updated to `/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/` requiring minimum 2-character TLD
- **Impact**: Applied to all forms (contact, newsletter, reminder) for consistency

## Testing

**Comprehensive Testing Completed**
- ✅ Newsletter page rendering and layout
- ✅ Form validation (required fields, email format)
- ✅ Client-side JavaScript functionality
- ✅ Backend function deployment
- ✅ Resend email notification delivery
- ✅ Mailchimp subscriber list integration
- ✅ "Member Exists" scenario handling
- ✅ Success message display
- ✅ CORS functionality (both www and non-www)
- ✅ Rate limiting enforcement
- ✅ Cross-browser compatibility
- ✅ Mobile responsiveness
- ✅ Navigation link placement
- ✅ Security measures across all forms

## Technical Implementation

**Project Methodology**
- Followed Cody Framework spec-driven development approach
- 3 phases with 9 tasks tracked in tasklist.md
- Comprehensive design document created before implementation
- Security-first approach with proactive improvements

**Task Distribution**
- Total Tasks: 9
- Phase 1 (Frontend): 4 tasks
- Phase 2 (Backend): 2 tasks
- Phase 3 (Verification & Documentation): 2 tasks
- All tasks completed successfully

**Architecture Decisions**
- Reused existing CSS classes from contact form (zero new CSS)
- Followed contact form pattern for consistency
- Absolute URLs for Netlify Functions (enables local testing against production)
- Dual integration approach (Resend + Mailchimp) for comprehensive subscriber management

## Performance & Metrics

**Build Performance**
- No impact on Hugo build times
- JavaScript minified and fingerprinted via Hugo Pipes
- Lazy loading maintained for optimal performance

**Security Improvements**
- 3 forms secured with consistent policies
- Rate limit reduced by 40% (5 → 3 requests/hour)
- CORS attack surface reduced from unlimited to 2 specific domains
- Email validation strengthened to prevent invalid submissions

**Timeline**
- Planning & Design: ~1 hour
- Implementation: ~3 hours
- Testing & Bug Fixes: ~2 hours
- Documentation: ~1 hour
- Total: ~7 hours active development

## Impact

**User Experience**
- Easy newsletter signup with minimal friction (3 fields only)
- Immediate feedback with success message
- Consistent design language across all forms
- Mobile-friendly responsive design

**Developer Experience**
- Comprehensive Mailchimp setup guide for easy configuration
- Clear documentation of all environment variables
- Reusable patterns for future form implementations
- Security checklist for future endpoints

**Business Impact**
- Enables email list building for marketing and engagement
- Dual notification system (owner email + Mailchimp list)
- Automated subscriber management
- Professional email delivery via Resend

## Future Enhancements

**Potential Improvements**
1. Add double opt-in confirmation email to subscribers
2. Create unsubscribe page/functionality
3. Add CAPTCHA for additional bot protection
4. Implement honeypot field for spam prevention
5. Add analytics tracking for conversion rates
6. Create subscriber management dashboard
7. Add email preferences/frequency options

**Security Considerations**
1. Monitor rate limiting effectiveness
2. Consider implementing Cloudflare Turnstile (free CAPTCHA alternative)
3. Add email domain blacklist for disposable email services
4. Implement IP reputation checking

## Other Notes

**Development Process**: This version demonstrated the value of security-first thinking. Proactively auditing all forms led to discovering and fixing security gaps across the entire platform, not just the new newsletter feature.

**Cody Framework**: The spec-driven approach with clear phases (Planning → Execution → Verification) ensured comprehensive implementation with proper documentation and testing.

**Mailchimp Integration**: The detailed setup guide (`MAILCHIMP_SETUP.md`) will serve as a template for future third-party API integration documentation.

**CSS Reuse**: Successfully achieved zero new CSS by reusing existing contact form classes, demonstrating the value of consistent design patterns.

---

# v1.7.0-rebrand-to-i-build-with-ai - November 18, 2025

## Overview

Completed comprehensive platform rebrand from "iCodeWith.ai" to "iBuildWith.ai" across entire infrastructure. This major migration included GitHub organization and repository renames, production and staging domain updates, third-party service integrations, Cloudflare redirect implementation for old domain, and Google Search Console migration. The rebrand was executed with zero downtime, no functionality loss, and proper SEO preservation through 301 permanent redirects.

## Key Features

**Infrastructure Migration**
- **GitHub Organization**: Renamed from `icodewith-ai` to `ibuildwith-ai` with automatic URL redirects
- **Repository Renames**: All 4 repositories updated (code, next, prod, backend)
- **Domain Configuration**: Dual-domain setup established
  - Production: `www.ibuildwith.ai` (GitHub Pages + HTTPS)
  - Staging: `next.ibuildwith.ai` (GitHub Pages + HTTPS)
  - Old Domain Redirects: `icodewith.ai` → `www.ibuildwith.ai` (Cloudflare Page Rules)

**Third-Party Service Updates**
- **Netlify**: Team and site renamed to `ibuildwithai` (ibuildwithai.netlify.app)
- **Resend Email**: New sending domain `send.ibuildwith.ai` configured with SPF, DKIM, DMARC records
- **Plausible Analytics**: New site created with updated tracking script
- **Environment Variables**: All Netlify and GitHub Actions secrets verified and maintained

**Cloudflare Redirect Implementation**
- Added `icodewith.ai` domain to Cloudflare (Free Tier)
- Configured DNS records with proxied status (orange cloud)
- Created 2 Page Rules for comprehensive redirect coverage:
  - `www.icodewith.ai/*` → `https://www.ibuildwith.ai/$1` (301)
  - `icodewith.ai/*` → `https://www.ibuildwith.ai/$1` (301)
- Full path and query parameter preservation
- Automatic SSL/TLS with "Always Use HTTPS" enabled
- Cost: $0/month (Cloudflare Free Tier)

**SEO Migration**
- Google Search Console Change of Address submitted (November 18, 2025)
- Both old and new domains verified and active in Search Console
- 301 permanent redirects preserve ~90-99% of link equity
- New sitemap submitted to Google Search Console
- Expected migration completion: ~180 days

## Code Changes

**Configuration Files Updated** (5 files)
- `config/prod/config.toml` → `baseURL = "https://www.ibuildwith.ai"`
- `config/next/config.toml` → `baseURL = "https://next.ibuildwith.ai"`
- `config/_default/config.toml` → Updated title and social media URLs
- `backend/package.json` → Updated name, description, repository URL (2 files)

**GitHub Workflows Updated** (2 files)
- `.github/workflows/hugo-prod.yml` → Updated name, external_repository, cname
- `.github/workflows/hugo-next.yml` → Updated name, external_repository, cname

**Backend Services Updated** (2 files)
- `backend/netlify/functions/contact-form.js` → Updated branding and from email (`contact@send.ibuildwith.ai`)
- `backend/netlify/functions/reminder-form.js` → Updated branding and from email (`contact@send.ibuildwith.ai`)

**Frontend Assets Updated** (3 files)
- `themes/ibuildwithai/assets/js/contact-form.js` → Updated Netlify function URL
- `themes/ibuildwithai/assets/js/reminder-form.js` → Updated Netlify function URL
- `themes/ibuildwithai/layouts/_default/baseof.html` → Updated Plausible analytics script

**Documentation Updated** (3 files)
- `README.md` → Updated GitHub org/repo URLs and domain references
- `.cody/project/library/docs/content-management.md` → Updated references
- `.cody/project/library/docs/components.md` → Updated references

## Bug Fixes

**Sitemap Date Formatting Errors**
- **Issue**: Google Search Console reported 21 "Invalid date" errors in sitemap.xml
- **Root Cause**: Hugo's default sitemap template generated dates that didn't strictly comply with ISO 8601 format
- **Fix**: Created custom sitemap template at `themes/ibuildwithai/layouts/_default/sitemap.xml` with proper date formatting
- **Implementation**: Uses `.Lastmod.Format "2006-01-02T15:04:05-07:00"` for Google-compliant ISO 8601 dates
- **Status**: Fix deployed and ready for Google re-crawl

## Testing

**Comprehensive Testing Completed**
- ✅ Staging deployment verification (next.ibuildwith.ai)
- ✅ Production deployment verification (www.ibuildwith.ai)
- ✅ Contact form functionality and email delivery
- ✅ Reminder form functionality and email delivery
- ✅ Cloudflare redirect testing (all scenarios)
  - Apex domain (http/https)
  - WWW domain (http/https)
  - Path preservation (/blog/, /podcast/, /apps/, etc.)
  - Query parameter preservation
- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Mobile device testing (iOS, Android)
- ✅ SSL/TLS certificate verification
- ✅ Analytics tracking verification (Plausible.io)
- ✅ GitHub Actions workflow execution
- ✅ Zero production errors or downtime

## Technical Implementation

**Project Methodology**
- Followed Cody Framework spec-driven development approach
- 15 phases with 89 discrete tasks tracked in `.cody/project/build/v1.7.0-rebrand-to-i-build-with-ai/tasklist.md`
- Comprehensive design documents created before implementation:
  - `cloudflare-redirect-design.md` - Detailed Cloudflare implementation guide
  - `cloudflare-tasklist.md` - Step-by-step Cloudflare setup tasks
  - `retrospective.md` - Post-project analysis and lessons learned

**Files Created** (4+ files)
- `themes/ibuildwithai/layouts/_default/sitemap.xml` - Custom sitemap template
- `.cody/project/build/v1.7.0-rebrand-to-i-build-with-ai/cloudflare-redirect-design.md`
- `.cody/project/build/v1.7.0-rebrand-to-i-build-with-ai/cloudflare-tasklist.md`
- `.cody/project/build/v1.7.0-rebrand-to-i-build-with-ai/retrospective.md`

**Files Modified**: 20+ files across codebase

**Task Distribution**
- Total Tasks: 89
- USER Tasks: 70 (79%) - Infrastructure changes requiring account access
- AGENT Tasks: 19 (21%) - Code updates and documentation

## Performance & Metrics

**Zero Downtime Migration**
- No production outages during entire rebrand process
- All services remained operational throughout migration
- Staged deployment prevented production issues

**Timeline**
- Planning & Execution: 3 days (November 16-18, 2025)
- Active Work: ~8-10 hours
- DNS/SSL Waiting Time: ~2-3 hours
- Total Tasks Completed: 89 of 89 (100%)

**Infrastructure Stats**
- GitHub Repos Renamed: 4
- Domains Configured: 3
- DNS Records Updated: 10+
- Third-Party Services Updated: 3
- SSL Certificates Provisioned: 3
- Configuration Files Updated: 5
- Workflow Files Updated: 2
- Backend Functions Updated: 2
- Frontend Scripts Updated: 2

## Impact

**User Experience**
- Seamless transition with zero interruption to site visitors
- All existing URLs continue to work via 301 redirects
- No broken links or lost functionality
- Improved brand identity with "iBuildWith.ai" positioning

**Developer Experience**
- Clean infrastructure with consistent branding across all systems
- Comprehensive documentation for future reference
- GitHub repository URLs automatically redirect to new names
- All automation scripts and workflows updated and tested

**SEO Impact**
- Proper 301 redirects preserve search rankings
- Google Search Console Change of Address accelerates migration
- Link equity transfer estimated at 90-99%
- Sitemap date formatting fix ensures proper indexing

## Future Enhancements

**Immediate Next Steps**
1. Monitor Google Search Console weekly for crawl errors (next 4-6 weeks)
2. Verify sitemap fix resolved all date validation errors
3. Capture 30-day analytics baseline on new domain
4. Track keyword rankings to verify SEO equity transfer

**Potential Improvements**
1. Consider renaming `themes/icodewithai/` to `themes/ibuildwithai/` for consistency (low priority)
2. Search codebase for any remaining "iCodeWith.ai" references in comments or unused files
3. Create automated redirect testing script for future domain changes
4. Document this rebrand process as reusable playbook for future migrations

## Other Notes

**Development Process**: This rebrand represents one of the most complex infrastructure changes to date for the platform. Success factors included comprehensive planning, clear task ownership, staged deployment, and thorough testing at each phase.

**Cody Framework**: The spec-driven development approach proved exceptionally effective for managing this 89-task migration across 15 phases with multiple dependencies.

**Cloudflare Benefits**: Free tier provided professional redirect solution with HTTPS support, fast DNS propagation (5-30 minutes vs. 24-48 hours), and automatic SSL certificate management.

**Documentation**: Complete project documentation available in `.cody/project/build/v1.7.0-rebrand-to-i-build-with-ai/` including design docs, tasklists, and retrospective analysis.

---

# v1.6.0-scrolling-component - October 21, 2025

## Overview

Created a production-ready, reusable infinite scrolling carousel component for displaying content cards with icons, headings, optional descriptions, and clickable links. The component features seamless infinite scrolling with configurable auto-scroll, speed, direction, dynamic card dimensions, and pause-on-hover interactions. Replaced the static "Explore" section on the home page with the new dynamic carousel.

## Key Features

**Component Architecture**
- **Hugo Shortcode** (`layouts/shortcodes/scrolling-carousel.html`): For use in content files with nested `carousel-item` shortcodes
- **Hugo Partial** (`layouts/partials/scrolling-carousel.html`): For use in templates with dictionary-based item configuration
- **Nested Shortcode** (`layouts/shortcodes/carousel-item.html`): Clean syntax for defining individual carousel items
- Both shortcode and partial variants share core functionality
- Modular SCSS in `assets/scss/components/_scrolling-carousel.scss`
- Standalone JavaScript in `assets/js/scrolling-carousel.js`

**Infinite Scrolling System**
- Seamless infinite loop scrolling with automatic item cloning (2x multiplier)
- RequestAnimationFrame-based animation for smooth 60fps performance
- Configurable scroll behavior: `auto` (default) or `none`
- Configurable speed: `slow` (30px/s, default) or `fast` (60px/s)
- Configurable direction: `left` (default) or `right`
- Intelligent position reset for both scroll directions
- No visual jumps or layout shifts during loop reset

**Interactive Features**
- Pause scrolling on mouse hover (desktop)
- Resume scrolling on mouse leave
- Pause on touch events (mobile)
- Smooth timestamp reset prevents animation jumps
- Hover effects on cards (lift, scale, glow, border color)
- Clickable cards with full link support

**Dynamic Sizing**
- Configurable card dimensions via `width` and `height` parameters (any CSS unit)
- Dynamic dimensions applied via CSS custom properties
- Icon size scales proportionally (30% of card width)
- Maximum icon constraints (80px desktop, 64px mobile)
- Aspect ratio maintains square icons
- Responsive spacing adjustments

**Visual Design**
- Dark theme with green accent hover effects (`$primary-500`)
- Edge fade gradients on left and right sides (150px desktop, 80px mobile)
- Smooth CSS transitions on all interactions
- Card hover: subtle lift (-2px), icon scale (1.05), border glow, shadow
- Rounded corners and consistent spacing
- Text overflow handling with ellipsis

**Icon Path Flexibility**
- Supports theme assets: `/images/icons/icon-apps.png` (Hugo resources)
- Supports page bundle resources: `/apps/treex/icon.png` (direct paths)
- Automatic detection and handling of both path types
- Fallback system ensures icons always display

**Accessibility Features**
- ARIA attributes (`role="region"`, `aria-label`)
- Cloned items hidden from screen readers (`aria-hidden="true"`)
- Keyboard navigation via native tab support through card links
- Focus indicators on all interactive elements
- Reduced motion support (respects `prefers-reduced-motion`)
- Auto-scroll disabled when user prefers reduced motion

**Performance Optimizations**
- GPU acceleration via CSS transforms
- Lazy loading for images (`loading="lazy"`)
- Conditional JavaScript loading (only when carousel exists)
- Efficient item cloning (once on initialization)
- Passive event listeners for touch events
- Memory management with animation cleanup on page unload
- Hugo Pipes minification and fingerprinting

## Home Page Integration

**Explore Section Redesign**
- Replaced static single card with dynamic scrolling carousel
- 6 test items: App Gallery, Blog, Podcast, Presentations, Vibe Coding, Cody Framework
- Each item includes icon, heading, and short description
- "View All →" text link below carousel (matching Learn section style)
- Updated section heading spacing for cleaner layout
- Container padding prevents hover border cut-off

**Configuration**
- Scroll: `auto`
- Speed: `slow`
- Direction: `left`
- Card dimensions: 280px × 220px
- Icons scale to ~84px (30% of 280px width)

## Technical Implementation

**Files Created:**
- `themes/icodewithai/layouts/shortcodes/scrolling-carousel.html` - Main shortcode
- `themes/icodewithai/layouts/shortcodes/carousel-item.html` - Nested item shortcode
- `themes/icodewithai/layouts/partials/scrolling-carousel.html` - Partial variant for templates
- `themes/icodewithai/assets/scss/components/_scrolling-carousel.scss` - Component styles (~250 lines)
- `themes/icodewithai/assets/js/scrolling-carousel.js` - Animation logic (~180 lines)

**Files Modified:**
- `themes/icodewithai/layouts/index.html` - Replaced Explore section
- `themes/icodewithai/assets/scss/_components.scss` - Added module import
- `.cody/project/library/docs/components.md` - Added comprehensive documentation

**Bug Fixes During Development:**
- Fixed hover border being cut off at top (added container padding)
- Fixed right direction infinite scroll not working (position initialization)
- Fixed icon path handling for page bundles (dual-path support)
- Adjusted heading spacing (single line break between heading and description)
- Changed "View All Apps" button to text link style

## Documentation

**Component Documentation**
- Comprehensive documentation added to `.cody/project/library/docs/components.md`
- Table of Contents for easy navigation
- Complete technical specifications
- HTML structure and CSS class reference
- JavaScript functionality details
- Parameter definitions with defaults
- Icon path support explanation
- Visual design specifications
- Responsive behavior documentation
- Accessibility features
- Performance optimizations
- 4 usage examples (default, fast right-scroll, page bundles, static)

**Inline Documentation**
- Extensive comments in shortcode files
- SCSS comments documenting component sections
- JavaScript function and logic documentation
- Usage examples in shortcode header

## Testing

- Tested with varying item counts (6 items in production)
- Tested all parameter combinations (scroll, speed, direction)
- Tested responsive breakpoints (mobile, tablet, desktop)
- Tested browser compatibility (build successful)
- Performance verified (smooth 60fps animation)
- Hover/touch interactions confirmed working
- Infinite scroll in both directions validated
- Reduced motion support tested
- Accessibility features verified

## Impact

**User Experience:**
- More dynamic and engaging Explore section
- Visual interest with auto-scrolling content
- Better content discovery with multiple visible items
- Consistent interaction patterns (pause on hover)

**Developer Experience:**
- Reusable component for future carousel needs
- Clear documentation and examples
- Flexible configuration options
- Works in both content files and templates

**Performance:**
- Minimal performance impact (efficient animation)
- Lazy loading reduces initial load
- GPU acceleration for smooth scrolling
- Clean memory management

## Future Enhancements

Potential improvements for future versions:
- Variable speed control (custom px/s values)
- Swipe gestures for mobile manual scrolling
- Autoplay pause/resume controls
- Progress indicators or dots
- Custom fade gradient colors
- Animation easing options

---

# v1.5.0-faq-component - October 20, 2025

## Overview

Created a production-ready, reusable FAQ accordion component for displaying frequently asked questions throughout the iCodeWith.ai site. The component features an accessible, interactive accordion design with one-question-open-at-a-time behavior, full keyboard navigation, and responsive styling that matches the site's dark theme with green accents.

## Key Features

**FAQ Content Structure**
- Created `content/faq/` directory for storing individual FAQ markdown files
- Implemented FAQ archetype (`archetypes/faq.md`) for quick FAQ creation via `hugo new faq/question-slug.md`
- Descriptive filename approach (e.g., `what-is-sdd.md`) instead of numbered files for better maintainability
- Simple frontmatter with just `question` field; markdown body contains the answer
- Full markdown support in answers (links, lists, code blocks, etc.)

**Reusable Components**
- **Hugo Shortcode** (`layouts/shortcodes/faq.html`): For use in content files
- **Hugo Partial** (`layouts/partials/faq-accordion.html`): For use in templates
- Both variants share the same implementation and features
- Flexible FAQ ordering via comma-separated slug parameters
- Multiple FAQ components can coexist on the same page

**Interactive Accordion UI**
- One FAQ open at a time (accordion behavior)
- Smooth expand/collapse animations with max-height transitions
- Chevron icon rotation indicating expand/collapse state
- Dark theme with rounded borders matching site design
- Green accent color (`$primary-500`) on hover and active states
- Proper spacing between question and answer content

**JavaScript Functionality**
- Vanilla JavaScript with no external dependencies
- Click to toggle FAQ open/closed
- Automatic closing of other FAQs when opening a new one
- Support for multiple independent FAQ components on same page
- Event delegation for optimal performance

**Accessibility Features**
- Comprehensive ARIA attributes:
  - `aria-expanded` for dynamic state indication
  - `aria-controls` linking button to content
  - `aria-labelledby` linking content back to header
  - `role="region"` for semantic landmark
  - `aria-hidden="true"` for decorative chevron icon
- Full keyboard navigation:
  - Enter/Space to toggle FAQ
  - Arrow Up/Down to navigate between FAQs
  - Tab for standard focus navigation
- Screen reader compatible
- Semantic HTML with `<button>` elements for interactivity

**Responsive Design**
- Mobile-first approach with breakpoint adjustments
- Reduced padding and font sizes on mobile/tablet
- Touch-friendly interaction targets
- Tested on mobile, tablet, and desktop devices

**Home Page Integration**
- New "Frequently Asked Questions" section below "Next Generation App Builders"
- Displays 5 curated FAQs:
  1. What are specifications in Spec Driven Development?
  2. How does SDD work with AI collaboration?
  3. Who are Vibe Coders?
  4. What do Vibe Coders build?
  5. What is living documentation?

## Enhancements

**Code Quality**
- Comprehensive inline documentation in both shortcode and partial
- Clear usage examples for both content files and templates
- Well-structured SCSS following site's existing patterns (~175 lines)
- JavaScript using IIFE pattern matching site's existing JS architecture
- Unique IDs for multiple FAQ instances on same page

**Developer Experience**
- Simple archetype command: `hugo new faq/my-question.md`
- No additional configuration needed when adding new FAQs
- Self-documenting filenames make FAQ management easy
- Helpful error messages in development mode when FAQ not found

**Styling**
- Added FAQ accordion component to `_components.scss`
- Integrated with existing SCSS variable system
- Consistent with site's design language
- Smooth animations for professional feel

## Technical Implementation

**Files Created**: 10 new files
- Content: 5 FAQ markdown files in `content/faq/`
- Archetype: `archetypes/faq.md`
- Shortcode: `layouts/shortcodes/faq.html`
- Partial: `layouts/partials/faq-accordion.html`
- JavaScript: `themes/icodewithai/assets/js/faq-accordion.js`
- Documentation: Design doc, Tasklist, Retrospective in `.cody/project/build/v1.5.0-faq-component/`

**Files Modified**: 3 files
- Styles: `themes/icodewithai/assets/scss/_components.scss` (+175 lines for FAQ component)
- Template: `themes/icodewithai/layouts/index.html` (added FAQ section)
- Backlog: `.cody/project/build/feature-backlog.md` (marked version complete)

**Usage Examples**:
```markdown
<!-- In content files (.md) -->
{{< faq "what-is-sdd,who-are-vibe-coders" />}}

<!-- In templates (.html) -->
{{ partial "faq-accordion.html" (dict "faqs" "what-is-sdd,who-are-vibe-coders" "context" .) }}
```

## Testing

**Comprehensive Testing Completed**:
- ✅ Hugo build verification (no errors)
- ✅ Accordion interaction (one open at a time)
- ✅ Keyboard navigation (Enter, Space, Arrow keys)
- ✅ Screen reader compatibility
- ✅ Mobile device testing
- ✅ Tablet device testing
- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Multiple FAQ components on same page
- ✅ Component reusability in different contexts
- ✅ Visual comparison with design reference (faq-example.png)

## Performance

- No JavaScript errors
- Minimal JavaScript footprint (vanilla JS, no dependencies)
- CSS-based animations for smooth 60fps performance
- Event delegation for optimal performance with multiple FAQs
- JavaScript automatically loaded with component (Hugo Pipes with minification and fingerprinting)

## Other Notes

**Development Process**: Followed Cody Framework spec-driven development with 7 phases and 39 tasks tracked in `.cody/project/build/v1.5.0-faq-component/tasklist.md`

**Design Reference**: Component design based on visual mockup provided in `.cody/project/library/assets/faq-example.png`

**Future Enhancements**: Consider creating a dedicated FAQ list page showing all FAQs, and tracking usage analytics to understand which FAQs are most valuable to users.

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
