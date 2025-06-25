# Contact Form Implementation Task List

## Phase 1: Setup & Configuration

### 1.1 Supabase Setup (You)
- [ ] Create new Supabase project
- [ ] Copy project URL and anon key
- [ ] Configure CORS settings to allow your domain only
- [ ] Share project details with Claude

### 1.2 Resend Setup (You)  
- [ ] Create Resend account
- [ ] Generate API key
- [ ] Verify sending domain (optional but recommended)
- [ ] Share API key with Claude

### 1.3 Content Configuration (Claude)
- [ ] Create `/content/contact.md` with form configuration
- [ ] Add frontmatter for all configurable elements (email, subject, messages)

## Phase 2: Database & Backend

### 2.1 Database Schema (Claude)
- [ ] Create `contact_submissions` table in Supabase
- [ ] Set up Row Level Security (RLS) policies
- [ ] Configure proper permissions for anonymous access

### 2.2 Supabase Edge Function (Claude)
- [ ] Create Edge Function for form handling
- [ ] Implement rate limiting (5 submissions per IP per hour)
- [ ] Add referer header validation
- [ ] Add input validation and sanitization
- [ ] Implement database insertion logic
- [ ] Add Resend email integration
- [ ] Test function deployment and functionality

## Phase 3: Frontend Implementation

### 3.1 Styling Setup (Claude)
- [ ] Analyze existing SCSS structure and variables
- [ ] Create `/assets/scss/_contact-form.scss`
- [ ] Add form component styles matching site design
- [ ] Add error state styling with appropriate colors
- [ ] Ensure responsive design
- [ ] Import new styles in main SCSS file

### 3.2 Hugo Templates (Claude)
- [ ] Create `/themes/bymarcelolewin/layouts/contact/single.html`
- [ ] Create `/themes/bymarcelolewin/partials/contact-form.html` component
- [ ] Add proper form structure with all required fields
- [ ] Implement honeypot field (hidden anti-bot field)
- [ ] Add accessibility features (labels, ARIA attributes)

### 3.3 JavaScript Functionality (Claude)
- [ ] Create `/static/js/contact-form.js`
- [ ] Implement client-side form validation
- [ ] Add real-time error feedback
- [ ] Add honeypot field validation
- [ ] Implement form submission handling
- [ ] Add success/error response handling
- [ ] Implement thank you message display (replace form)

## Phase 4: Integration & Testing

### 4.1 API Integration (Claude)
- [ ] Connect frontend JavaScript to Supabase Edge Function
- [ ] Test form submission with valid data
- [ ] Test form submission with invalid data
- [ ] Verify database entries are created correctly

### 4.2 Email Testing (You + Claude)
- [ ] Test email delivery with form submission
- [ ] Verify email format and content
- [ ] Test email recipient configuration
- [ ] Test custom subject line configuration

### 4.3 Security Testing (Claude)
- [ ] Test CORS restrictions
- [ ] Test rate limiting functionality
- [ ] Test honeypot field effectiveness
- [ ] Test referer header validation
- [ ] Verify input sanitization works

### 4.4 Validation Testing (Claude)
- [ ] Test all required field validations
- [ ] Test email format validation
- [ ] Test comment minimum length validation
- [ ] Test error message display
- [ ] Test success flow and thank you message

### 4.5 User Experience Testing (You)
- [ ] Test form on different devices/screen sizes
- [ ] Verify form matches site design
- [ ] Test form usability and flow
- [ ] Verify thank you message appears correctly
- [ ] Test newsletter checkbox functionality

## Phase 5: Deployment & Final Testing

### 5.1 Production Deployment (You)
- [ ] Deploy changes to GitHub Pages
- [ ] Update contact page configuration with production values
- [ ] Test form on live site

### 5.2 Final Verification (You + Claude)
- [ ] Submit test form on live site
- [ ] Verify database entry created
- [ ] Verify email received
- [ ] Test all security measures on live site
- [ ] Confirm all functionality works as expected

## Phase 6: Documentation & Completion

### 6.1 Documentation (Claude)
- [ ] Update task completion status
- [ ] Create retrospective.md file
- [ ] Document any issues encountered and solutions

### 6.2 Handover (You)
- [ ] Final testing and approval
- [ ] Confirm all requirements met
- [ ] Project completion sign-off

---

## Notes:
- **You** = Tasks requiring account setup, configuration, or final approval
- **Claude** = Technical implementation tasks
- Tasks should be completed in order within each phase
- Some phases can run in parallel (Phase 1 & 3.1 can start simultaneously)
- Mark tasks as complete with [x] as they are finished