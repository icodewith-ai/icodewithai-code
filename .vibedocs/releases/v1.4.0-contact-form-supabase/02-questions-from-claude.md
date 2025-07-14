# Questions from Claude

## Technical Configuration Questions

### 1. What's your Supabase project URL and do you have the necessary API keys set up?
>I don't have a project set up yet.  I do have an account set up with them.  I'll need your help here (steps).

### 2. What's your Resend API key, and what email address should receive the contact form submissions?
>I don't have one.  I need to create an account with them and do whatever needs to get done to get it working.  So I'll need steps here too.

### 3. Where would you like the email recipient and subject line to be configurable - in a config file, environment variables, or the `/content/` folder?
> If we can do it in the /content/ folder, for anything I need to configure for the form, that would be great.  One place for everything.

## Site Structure Questions

### 4. What's the URL/route where you want the contact form to appear (e.g., `/contact`, `/contact-us`)?
> /contact/ (single.html page)

### 5. Should this be a dedicated contact page or a component that can be embedded elsewhere?
> Good question. Can we make it a component, but only embed it in the /contact/ page for now?

## Current Tech Stack Questions

### 6. What framework is your site built with (Astro, Next.js, Nuxt, etc.)?
> It's Hugo.  Please review my site if you need to, but you should know this by looking at the folder structure and reviewing all the documentation in the .vibedocs folder.

### 7. Are you already using Supabase elsewhere in the project, or is this the first integration?
> Nope. first time.

## Design/UX Questions

### 8. Should the "Thank you" message replace the form entirely, or appear above/below it while keeping the form visible?
> Not sure.  What's the standard?  Or most popular way of doing it?

*From Claude* For Question #8 (Thank you message): The most popular/standard approach is to replace the form with the thank you
  message. This provides clear visual feedback that the submission was successful and prevents duplicate submissions.

### 9. For the newsletter checkbox - should this be stored in the same database table or separately?
> Yes please.  SO I'm thinking a boolean for it?

### 10. Do you want any client-side validation beyond the required fields?
> First Name, Last Name, Email are required.  Email must be an email.  Comments field must be at least 3 characters long, if filled out, otherwise, it can be left empty.   Errors should be highlighted in red (or a nice color that compliments my current color schema)

## Hugo-Specific Questions

### 11. Since Hugo generates static sites, how do you want to handle the form submission? Are you planning to:
- Use Hugo's static form handling with a separate API endpoint?
- Implement client-side JavaScript to submit directly to Supabase?
- Use a service like Netlify Forms or similar?

*From Claude* For Question #11 (Technical architecture): Yes, exactly! Since you're on GitHub Pages (static hosting), the best
  approach is:
  1. Client-side JavaScript submits form data directly to a Supabase Edge Function
  2. The Edge Function inserts data into the database and triggers the email via Resend
  3. This works perfectly with GitHub Pages since no server-side processing is needed on your site

> I'm not sure here. I need your help.   My site is hosted in GitHub pages.  When the user submits the form, would it go to a serverless function in supabase that inserts the content into the DB and then sends out an email through Resend?  Not sure here.  YOur recommendation is required here. 

### 12. Do you have any existing JavaScript/API handling in your Hugo setup, or would this be the first dynamic functionality?
> Nothing. It's the first dynamic functionality.