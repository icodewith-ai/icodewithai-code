# Contact Form Implementation Plan

## Overview
This plan implements a contact form component for a Hugo static site hosted on GitHub Pages, using Supabase for database storage and Edge Functions, with Resend for email delivery.

## Technical Architecture

### Frontend (Hugo + JavaScript)
- **Contact Page**: New `/contact/` page using Hugo's single.html layout
- **Form Component**: Reusable partial that can be embedded in any page
- **Client-side Validation**: JavaScript validation with visual error feedback
- **Submission Handling**: JavaScript POST to Supabase Edge Function
- **UI Feedback**: Replace form with thank you message on successful submission

### Backend (Supabase)
- **Database Table**: Store contact submissions with newsletter subscription flag
- **Edge Function**: Handle form submissions and trigger email notifications
- **API Integration**: Connect with Resend for email delivery

### Email (Resend)
- **Account Setup**: Create Resend account and configure API key
- **Email Template**: Send formatted emails with all form data to configured recipient

## Implementation Phases

### Phase 1: Setup & Configuration
1. **Supabase Project Setup**
   - Create new Supabase project
   - Generate API keys
   - Configure database table
   
2. **Resend Account Setup**
   - Create Resend account
   - Generate API key
   - Configure sending domain (optional)

3. **Hugo Configuration**
   - Create contact content configuration in `/content/`
   - Add necessary CSS variables and components
   - Set up JavaScript handling

### Phase 2: Database & Backend
1. **Database Schema**
   ```sql
   CREATE TABLE contact_submissions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     first_name TEXT NOT NULL,
     last_name TEXT NOT NULL,
     email TEXT NOT NULL,
     comments TEXT,
     newsletter_signup BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

2. **Supabase Edge Function**
   - Create function to handle form submissions
   - Implement rate limiting (5 submissions per IP per hour)
   - Validate referer header to ensure requests come from your domain
   - Validate and sanitize incoming data
   - Insert into database
   - Trigger email via Resend
   - Return success/error responses

### Phase 3: Frontend Implementation
1. **Content Configuration**
   - Create `/content/contact.md` with form configuration
   - Include: page title, description, thank you message, email recipient, subject line

2. **Hugo Templates**
   - Create contact page layout
   - Build reusable form component partial
   - Add proper heading and description structure

3. **Styling**
   - Analyze existing SCSS structure
   - Create form-specific styles matching site design
   - Add error state styling
   - Ensure responsive design

4. **JavaScript Functionality**
   - Form validation (client-side)
   - Honeypot field implementation (hidden anti-bot field)
   - Submission handling
   - Error display
   - Success state management

### Phase 4: Integration & Testing
1. **API Integration**
   - Connect frontend to Supabase Edge Function
   - Test form submission flow
   - Verify email delivery

2. **Validation Testing**
   - Test all validation rules
   - Verify error states
   - Test success flow

## File Structure

### New Files to Create:
```
/content/contact.md                     # Page content and configuration
/themes/bymarcelolewin/layouts/contact/single.html    # Contact page layout
/themes/bymarcelolewin/partials/contact-form.html     # Reusable form component
/assets/scss/_contact-form.scss         # Form-specific styles
/static/js/contact-form.js              # Form JavaScript functionality
```

### Files to Modify:
```
/assets/scss/styles.scss                # Import new contact form styles
```

## Configuration Approach

All form-related configuration will be stored in `/content/contact.md` frontmatter:

```yaml
---
title: "Contact Me"
description: "Fill out the form below and I'll get back to you as soon as possible."
thankyou_message: "Thank you for your message! I'll get back to you soon."
email_recipient: "your-email@example.com"
email_subject: "New Contact Form Submission"
---
```

## Technical Requirements

### Validation Rules:
- First Name: Required
- Last Name: Required  
- Email: Required, valid email format
- Comments: Optional, minimum 3 characters if provided
- Newsletter: Optional boolean

### Error Handling:
- Client-side validation with immediate feedback
- Server-side validation in Edge Function
- Graceful error messages for users
- Proper error logging in Supabase

### Security Considerations:
- **CORS Configuration**: Restrict API calls to your domain only
- **Rate Limiting**: Limit submissions per IP (5 per hour via Supabase Edge Functions)
- **Honeypot Fields**: Hidden form fields to catch automated bots
- **Input Sanitization**: Strict validation and sanitization of all inputs
- **Referer Header Validation**: Verify requests come from your domain
- **API Key Security**: Use Supabase anon key with Row Level Security policies

## Dependencies

### Third-party Services:
- Supabase (Database + Edge Functions)
- Resend (Email delivery)

### Client-side Libraries:
- Native JavaScript (no additional dependencies)
- Hugo's built-in SCSS processing

## Deployment Notes

Since the site is hosted on GitHub Pages:
- All processing happens client-side or in Supabase
- No server-side Hugo functionality required
- API keys will be public (using Supabase's Row Level Security)
- Form submissions go directly to Supabase Edge Function

This architecture ensures the contact form works seamlessly with GitHub Pages' static hosting while providing robust backend functionality through Supabase.