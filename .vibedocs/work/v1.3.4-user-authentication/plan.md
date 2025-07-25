# User Authentication System Implementation Plan
## Version: v1.3.4-user-authentication

## Overview
Implement a complete user authentication system using Supabase backend with custom forms matching the provided designs. The system will include login, signup, password reset, and user settings pages with secure authentication flow.

## Architecture

### Technology Stack
- **Frontend:** Hugo static site with custom JavaScript
- **Backend:** Supabase (Authentication + Database + Storage)
- **Authentication:** Supabase Auth with JWT tokens
- **Storage:** Supabase Storage for user profile photos
- **Security:** Row Level Security (RLS) policies

### URL Structure
- `/login` - User login page
- `/signup` - User registration page  
- `/reset-password` - Password reset page
- `/settings` - User settings/profile page

## Phase 1: Foundation Setup

### 1.1 Supabase Configuration
- Get Supabase project URL and anon key from user
- Create user profiles table schema
- Set up Row Level Security policies
- Configure authentication settings
- Enable email confirmation

### 1.2 Hugo Configuration
- Add authentication config to `config.toml`:
  - `login_router = "/settings/"`
  - `login_quote = "Learn how to structure your vibe coding to build production-ready, maintainable apps."`
- Create environment variables for Supabase credentials

### 1.3 Base JavaScript Authentication Module
- Create `auth.js` module for Supabase integration
- Implement session management
- Add authentication state handling
- Create utility functions for user operations

## Phase 2: Database Schema

### 2.1 User Profiles Table
```sql
-- Clean schema without email duplication (auth.users is source of truth)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

**Note:** Using "profiles" follows Supabase convention - separates auth data (auth.users) from app-specific user data (public.profiles). Email is accessed via JOIN queries when needed.

### 2.2 Automatic Profile Creation Trigger
```sql
-- Creates a trigger function that inserts a new row into public.profiles
-- whenever a new user is created in auth.users.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (new.id);
  RETURN new;
END;
$$;

-- Drop the trigger if it already exists, to be safe
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 2.3 Row Level Security Policies
- Users can only read/update their own profile
- Secure photo access policies
- Profile queries use JOIN with auth.users for email access

### 2.4 Storage Bucket
- Create `avatars` bucket for profile photos
- Set up storage policies for user access

### 2.5 Database Helper Functions
- Create functions for profile queries with email JOIN
- Implement secure profile update functions

## Phase 3: Authentication Pages

### 3.1 Login Page (`/login`)
- Create Hugo layout matching design
- Implement login form with email/password
- Add "Forgot Password?" link
- Add "Sign Up" link
- Form validation and error handling
- Redirect to configured route after login

### 3.2 Signup Page (`/signup`)
- Create Hugo layout matching design  
- Implement registration form with email/password
- Add "Sign In" link
- Form validation and error handling
- Email confirmation flow
- Auto-redirect after successful registration

### 3.3 Password Reset Page (`/reset-password`)
- Create Hugo layout matching design
- Implement password reset form
- Handle reset token from email
- Password strength validation
- Success/error messaging

## Phase 4: User Settings Page

### 4.1 Settings Page (`/settings`)
- Create Hugo layout for user profile
- Display current user information
- Implement profile update form:
  - First Name
  - Last Name  
  - Email Address (secure multi-step update flow)
  - Profile Photo upload
- Photo upload with preview
- Form validation and success messaging

### 4.2 Secure Email Update Flow
- Use `supabase.auth.updateUser()` for email changes
- Handle confirmation emails to both old and new addresses
- Implement proper UI feedback for multi-step process
- Show pending email change status
- Handle email update confirmation and errors

### 4.3 Profile Photo Handling
- Implement drag-and-drop photo upload
- Image preview before upload
- Image compression/resizing
- Supabase Storage integration
- Photo deletion functionality
- File type restrictions (PNG, JPG only)
- File size limits (e.g., 2MB max)
- Basic file validation and sanitization

### 4.4 Settings Page Logic
- Connect all settings functionality
- Integrate profile updates with database
- Handle form submissions and validation
- Manage loading states and user feedback

## Phase 5: Navigation Integration

### 5.1 User Profile Dropdown
- Add user profile square box to navigation
- Show user photo or initials when logged out
- Implement dropdown menu using existing standards
- Add "Settings" link to dropdown
- Add "Logout" functionality

### 5.2 Authentication State Management
- Show/hide navigation elements based on auth state
- Handle session expiration gracefully
- Persistent login across page refreshes

## Phase 6: Security & Error Handling

### 6.1 Security Implementation
- Implement robust JWT token auto-refresh (1-hour expiration)
- Keep JWT tokens in memory/localStorage (never cookies)
- Implement strong Content Security Policy (CSP) for XSS protection
- Validate all user inputs and sanitize data
- Enable Supabase auth rate limiting/throttling
- Add CAPTCHA for login/signup forms (hCaptcha)
- Implement secure file upload restrictions

### 6.2 Error Handling
- Network error recovery with retry options
- User-friendly error messages
- Session expiration handling
- Email verification reminders
- Form validation feedback

## Phase 7: Styling & Polish

### 7.1 CSS Integration
- Integrate authentication pages with existing SCSS
- Ensure responsive design across all devices
- Match existing design system
- Add loading states and transitions

### 7.2 User Experience
- Add loading spinners during operations
- Implement smooth transitions
- Add success animations
- Optimize form interactions

## Phase 8: Testing & Deployment

### 8.1 Testing
- Test all authentication flows
- Verify email confirmation process
- Test password reset functionality
- Check responsive design on mobile
- Test error scenarios

### 8.2 Documentation
- Create setup instructions for Supabase
- Document authentication flow
- Add troubleshooting guide
- Update configuration documentation

## Implementation Order

1. **Phase 1:** Foundation Setup
2. **Phase 2:** Database Schema  
3. **Phase 3:** Authentication Pages
4. **Phase 4:** User Settings Page
5. **Phase 5:** Navigation Integration
6. **Phase 6:** Security & Error Handling
7. **Phase 7:** Styling & Polish
8. **Phase 8:** Testing & Deployment

## Configuration Requirements

The user will need to provide:
- Supabase Project URL
- Supabase Anon/Public Key
- Confirmation of email settings in Supabase

## Success Criteria

- [ ] Users can register new accounts
- [ ] Users can log in with email/password
- [ ] Users can reset forgotten passwords  
- [ ] Users can update their profile information
- [ ] Users can upload/change profile photos
- [ ] Navigation shows user status appropriately
- [ ] All pages match provided designs
- [ ] System is secure and follows best practices
- [ ] All error cases are handled gracefully
- [ ] System works on desktop and mobile devices

## Next Steps

1. Get Supabase credentials from user
2. Begin Phase 1 implementation
3. Create database schema
4. Start building authentication pages

Ready to begin implementation!