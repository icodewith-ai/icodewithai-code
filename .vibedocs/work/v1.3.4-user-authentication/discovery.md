I want to add the ability for users to log into my site.

We need:
1) Login page. (/login)
2) Sign up page. (/sign)
3) A forgot password page. (/forgot-password)
4) User settings page. (/user-settings)

Once the user logs in, it will take them (for now) to the user settings.   I want to configure where it takes them via the @config/_default/config.toml file (e.g. login_router="/user-settings"). I also want to set the quote you see in the design in the tom file (e.g. login_quote="")

The user settings screen should let them update:

First Name
Last Name
Email Address
Photo

Later will add more.

For the login page, signup page and forgot password page, please see their respective designs pasted in this prompt.

This is the beginning of implementing dynamic functionality.

I know you will have tons of questions, so please ask (I think I want to use Supabase, unless you recommend something else).

Please ask questions below this line in here.  I will answer them in here.

## Questions from AI Agent

**Authentication Backend:**
1. You mentioned Supabase - this is an excellent choice. Should I proceed with Supabase integration, or would you prefer a different solution?

> Supabase is good!

**Technical Architecture:**
2. Since this is a Hugo static site, how do you want to handle the dynamic authentication? Should I:
   - Create the authentication pages as static HTML with JavaScript for API calls to Supabase?
   - Set up a separate authentication service/API?
   - Use Supabase's built-in authentication UI components or build custom forms matching your designs?

> I want something that is secure.   What do you recommend?  I also want an easier implementation, but I don't want to sacrifice security.

**Configuration:**
3. For the login redirect configuration in `config.toml`, what should be the default value for `login_router`?

> default login_router = "/user-settings/"

4. What should be the default quote text for `login_quote` in the config? (I can see the quote in your designs but want to confirm the exact text)

> default login_quote = "Learn how to structure your vibe coding to build production-ready, maintainable apps."

**User Data & Storage:**
5. Besides the user profile fields (First Name, Last Name, Email, Photo), do you need any additional user metadata stored initially?

> Not now, but later we will.

6. For the photo upload, do you want to use Supabase Storage or another service?

> What do you recommend?

**Integration with Current Site:**
7. Should the user authentication affect the main navigation (show user profile/logout when logged in)?

Oh, yes, I forgot about that.   At the top navigation (both desktop and mobile), we should have a square box that is empty (or has their photo) with a pull down menu (using our standards) with, for now, "Settings", pointing to /user-settings/

8. Do you want any protected content areas that require login, or is this just for user profiles for now?

Not yet.  But yes, I will soon after we implement this.


**Environment & Setup:**
9. Do you have a Supabase project already set up, or should I include setup instructions in the implementation?

> I do.  Just ask me what you need and I'll provide you.

10. Should I create the authentication as a new Hugo content section or integrate it differently?

> How you see it best.  As long as we follow hugo standards and best practices.

**URL Structure:**
11. I notice you want `/sign` for signup - should this be `/signup` instead, or do you prefer the shorter `/sign`?

> Yeah, my mistake.  /signup, /login /reset-password /settings

## AI Agent Recommendations & Follow-up

Based on your answers, here are my recommendations:

**Technical Architecture (Question 2):**
For security + ease of implementation, I recommend:
- Custom forms matching your designs (not Supabase UI components)
- Static HTML pages with JavaScript for Supabase API calls
- Use Supabase's built-in security features (JWT tokens, RLS policies)
- Client-side authentication state management
This gives you full design control while leveraging Supabase's proven security.

**Photo Storage (Question 6):**
I recommend Supabase Storage because:
- Seamless integration with your auth system
- Built-in security policies (users can only access their own photos)
- CDN for fast image delivery
- Automatic image optimization options

**Implementation Questions:**

1. **Supabase Configuration:** I'll need:
   - Your Supabase project URL
> Where can I get this?  It's a blank project for now.  I did not create any tables.

   - Your Supabase anon/public key
> Again, you'll have to tell me where to get this.

   - Should I create the user profiles table schema, or do you have one already?
> Please create it.  It's a blank project.

2. **Navigation Integration:** For the user dropdown in navigation:
   - Should the square box show user initials when no photo is uploaded?

> Yes!  Excellent idea.

   - Any specific styling preferences for the dropdown?

> Should follow our standard dropdown we already have in place.

3. **Error Handling:** How should we handle:
   - Network errors during auth operations?
   - Email verification flow (does Supabase send verification emails)?
   - Session expiration?

> What do you recommend for all of these?

4. **URL Updates:** Should I update the discovery document URLs to match your corrected ones (/login, /signup, /reset-password, /settings)?

> Yes.

Let me know your thoughts on these recommendations and answers to the new questions, then I'll create the implementation plan!

> When you create the plan, please store it in the already created plan.md document.

## AI Agent Final Recommendations

**Supabase Setup Instructions:**
✅ **Credentials Status:**
- Project ID: `[REDACTED - stored securely]`
- Project URL: `https://[PROJECT_ID].supabase.co`
- Anon/Public Key: `[REDACTED - stored securely]`

**⚠️ Note:** Actual credentials have been removed from git-tracked files for security.

Ready to begin implementation!

## 🔒 Additional Security Considerations

**CSRF Protection:**
- Keep JWT tokens in memory/localStorage (never cookies)
- Avoid cookie-based session state without strict SameSite & CORS

**Rate Limiting & Brute Force:**
- Enable Supabase auth throttling for login attempts
- Consider adding CAPTCHA (hCaptcha) for login/signup forms

**Token Management:**
- Implement robust auto-refresh for 1-hour JWT expiration
- Handle token refresh failures gracefully

**File Upload Security:**
- Restrict file types (PNG, JPG only)
- Implement file size limits
- Consider virus scanning for public uploads

**Database Design:**
- Remove email from profiles table (use auth.users as source of truth)
- Use database triggers for automatic profile creation
- Implement proper JOIN queries for email access

**XSS Protection:**
- Implement strong Content Security Policy (CSP)
- Protect localStorage-stored JWTs from script injection

**Email Update Security:**
- Handle Supabase's secure email update flow
- Require confirmation emails to both old and new addresses
- Implement proper UI for multi-step email change process

**Error Handling Recommendations:**
- **Network errors:** Show user-friendly messages with retry options
- **Email verification:** Enable Supabase's built-in email confirmation
- **Session expiration:** Auto-redirect to login with friendly message

**URL Updates:**
I'll update the requirements to use the corrected URLs: /login, /signup, /reset-password, /settings

Ready to create the implementation plan in plan.md!