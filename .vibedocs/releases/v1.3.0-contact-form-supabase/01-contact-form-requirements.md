# Contact Page with Form

### Overview
This plan implements a contact form using Supabase as the backend database and Edge Functions, with Resend for email delivery.   The form must capture the first name, last name, email, comments box and have a submit button.   All fields are required except the comments box.   It should also have a checkbox for registering to the newsletter.  

The form will appears in a new /contact/ page (single.html page).   It should be in the style of the entire site.  With a heading (Contact Me), a short 1 sentence below it (I will update it later, but something like, fill out the form below....) and then the form below that.

The style of the contact form must follow the style of the entire site and use all the correct design system components, or none exists that are needed, create them properly, along with any new css variables.  Please check /assets/scss for what you need to make it look in the same style as the site.

Once the user submits the form, there should be a "Thank you" message that appears somewhere on the page. It should be configurable via the /content/ folder (so I can update the thank you message).

Once they submit, the information needs to be stored in a database in Supbase and then an email sent to my email address.  If we can make this configurable somewhere, it would be great.

An Edge function in supabase should be triggered once the data is entered in the table, which would connect with resend to send the eamil to me. The email should have "new contact registered" as the subject line and all the fields and values in the email.  If I can also configure the subject line in the same place I configure the Send To email address, it would be great.

Please ask me any questions before we get started.

After I answer all your questions, I need you to create a contact-form-plan.md file with details of how we will go about doing this.

Once I approve that plan and I say we are ready to start, I need you to create a contact-form-tasklist.md file with tasks, organized by phases along with who's responsible for each task (me or you).

You need to store both of those files in the same place.   Once you are done, I'll review everything and give you the go or no go.

Once we start, you will, as you implement things, check off tasks that have been completed in the "contact-form-tasklist.md'

Once we are done completed, I will test everything, we will either fix bugs or if I say we are done, you will then create a retrospective.md file, similar in style (categories and info) to those in other releases in the /releses folder.

You will store that file in the same location as this file.