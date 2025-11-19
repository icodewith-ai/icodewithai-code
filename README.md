# iBuildWith.ai Website

This is the source code for iBuildWith.ai website.

## Environment Variables

To run the backend functions (Contact Form, Newsletter), you need to set the following environment variables in Netlify (or `.env` for local development):

### General
*   `RECIPIENT_EMAIL`: The email address where notifications should be sent.

### Resend (Email Sending)
*   `RESEND_API_KEY`: API Key for Resend.

### Mailchimp (Newsletter)
*   `MAILCHIMP_API_KEY`: API Key for Mailchimp.
*   `MAILCHIMP_SERVER_PREFIX`: The server prefix for your Mailchimp account (e.g., `us1`, `us20`).
*   `MAILCHIMP_LIST_ID`: The Audience ID (List ID) where subscribers should be added.