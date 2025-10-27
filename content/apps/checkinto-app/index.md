+++
title = "CheckInto App"
description = "A mobile-first web app that enables self-service check-in for in-person community event attendees with real-time raffle functionality and full multi-tenant support."
url_slug = "checkinto-app"
github_url = "https://github.com/bymarcelolewin/checkinto-app"
npm_url = ""
preview_url = "https://github.com/bymarcelolewin/checkinto-app"
preview_label = "Learn More"
date_created = "2025-08-13T10:33:30-0700"
date_updated = "2025-09-10T10:33:30-0700"
current_version = "1.3.2"
draft = false
builder = "Marcelo Lewin"
+++

A mobile-first web application that enables seamless self-service check-in for in-person community event attendees with real-time raffle functionality and full multi-tenant support.

## Purpose

This application streamlines the check-in process for community events by providing a simple, branded experience that:
- Eliminates manual attendance tracking
- Collects attendee information digitally
- Provides venue details to checked-in attendees
- Enables real-time raffle winner announcements during events
- Scales to support multiple community organizers through subdomain architecture

## How It Works

**For Attendees:**
1. Visit your community's custom URL: `https://{communityname}.checkinto.io/{eventId}`
2. Complete the simple three-screen flow:
   - **Welcome Screen** - Event-specific landing page with community branding
   - **Check-In Form** - Provide name, email, and an interesting fact
   - **Confirmation Screen** - View venue details and watch for raffle announcements

**Example:** [https://codingwithai.checkinto.io/082025](https://codingwithai.checkinto.io/082025)

## Key Features

### ✅ Core Check-In Flow
- Mobile-optimized responsive design
- Event-specific branding and messaging
- Real-time form validation
- Duplicate email handling (upsert logic)

### ✅ Raffle System
- Real-time winner announcements
- Support for multiple raffle rounds
- Personalized messaging for winners vs. non-winners
- Admin-triggered winner selection via Supabase Edge Functions

### ✅ Multi-Tenant Architecture
- **Complete data isolation** - Each community maintains separate attendees, venues, and talent
- **Subdomain-based routing** - Secure event access via `{communityname}.checkinto.io/{eventId}`
- **Cross-community flexibility** - Same user can participate in multiple communities independently
- **Scalable design** - Support for unlimited community organizers without conflicts

## Tech Stack

- **Frontend**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS with mobile-first design
- **Backend**: Supabase (PostgreSQL database, API, Edge Functions)
- **Hosting**: Vercel with custom domain routing
- **Domain**: Both checkinto.io and chkin.io with subdomain architecture

## Production Deployment

The application is deployed on Vercel with:
- Automatic deployments from main branch
- Custom domain configuration through Namecheap
- SSL certificates automatically managed
- Environment variables securely configured