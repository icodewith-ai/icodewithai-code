# Version Tasklist – v1.7.0-rebrand-to-i-build-with-ai
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

---

## Phase 1: GitHub Organization & Repository Migration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Backup current state | Tag current git state with `v1.6.0-final-before-rebrand` and push to remote | None | 🟢 Completed | USER |
| 1.2 | Verify GitHub access | Confirm owner/admin access to `icodewith-ai` organization | None | 🟢 Completed | USER |
| 1.3 | Rename GitHub organization | Rename `icodewith-ai` → `ibuildwith-ai` via GitHub settings | 1.1, 1.2 | 🟢 Completed | USER |
| 1.4 | Verify org rename | Visit new org URL and verify old URLs redirect automatically | 1.3 | 🟢 Completed | USER |
| 1.5 | Rename code repository | Rename `icodewithai-code` → `ibuildwithai-code` | 1.3 | 🟢 Completed | USER |
| 1.6 | Rename next repository | Rename `icodewithai-next` → `ibuildwithai-next` | 1.3 | 🟢 Completed | USER |
| 1.7 | Rename prod repository | Rename `icodewithai-prod` → `ibuildwithai-prod` | 1.3 | 🟢 Completed | USER |
| 1.8 | Rename backend repository | Rename `icodewithai-backend` → `ibuildwithai-backend` | 1.3 | 🟢 Completed | USER |
| 1.9 | Update local git remotes | Update local repository remote URLs to new org/repo names | 1.5 | 🟢 Completed | USER |
| 1.10 | Test git operations | Run `git fetch origin` to verify connection to renamed repos | 1.9 | 🟢 Completed | USER |

---

## Phase 2: Netlify Configuration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Backup Netlify settings | Document current Netlify site configuration and environment variables | None | 🟢 Completed | USER |
| 2.2 | Rename Netlify team | Rename team from `iCodeWith.ai` to `iBuildWith.ai` and slug from `icodewithai` to `ibuildwithai` | 2.1 | 🟢 Completed | USER |
| 2.3 | Rename Netlify site | Rename site from `icodewithai` to `ibuildwithai` in Netlify dashboard | 2.2 | 🟢 Completed | USER |
| 2.4 | Verify Netlify URL | Confirm new site URL is `ibuildwithai.netlify.app` | 2.3 | 🟢 Completed | USER |
| 2.5 | Verify environment variables | Check that `RESEND_API_KEY`, `RECIPIENT_EMAIL`, `REMINDER_ADMIN_EMAIL` are still configured | 2.3 | 🟢 Completed | USER |
| 2.6 | Update GitHub connection | Verify Netlify is still connected to renamed GitHub repo | 2.3, 1.8 | 🟢 Completed | USER |

---

## Phase 3: Resend Email Domain Configuration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Access Resend dashboard | Log in to Resend account | None | 🟢 Completed | USER |
| 3.2 | Add new sending domain | Add `send.ibuildwith.ai` as new domain in Resend | 3.1 | 🟢 Completed | USER |
| 3.3 | Get DNS records | Copy SPF, DKIM, and DMARC records from Resend dashboard | 3.2 | 🟢 Completed | USER |
| 3.4 | Add DNS records | Add all email DNS records to `ibuildwith.ai` domain at registrar | 3.3 | 🟢 Completed | USER |
| 3.5 | Verify sending domain | Wait for DNS propagation and verify domain in Resend dashboard | 3.4 | 🟢 Completed | USER |
| 3.6 | Test email sending | Send test email from Resend using new domain | 3.5 | 🟢 Completed | USER |

---

## Phase 4: Code Updates - Configuration Files

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Update prod config | Update `config/prod/config.toml` → `baseURL = "https://www.ibuildwith.ai"` | Phase 1 complete | 🟢 Completed | AGENT |
| 4.2 | Update next config | Update `config/next/config.toml` → `baseURL = "https://next.ibuildwith.ai"` | Phase 1 complete | 🟢 Completed | AGENT |
| 4.3 | Update default config | Update `config/_default/config.toml` → title, social media URLs (if needed) | Phase 1 complete | 🟢 Completed | AGENT |
| 4.4 | Verify config changes | Review all three config files for accuracy | 4.1, 4.2, 4.3 | 🟢 Completed | AGENT |

---

## Phase 5: Code Updates - GitHub Workflows

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Update prod workflow | Update `.github/workflows/hugo-prod.yml` → name, external_repository, cname | Phase 1 complete | 🟢 Completed | AGENT |
| 5.2 | Update next workflow | Update `.github/workflows/hugo-next.yml` → name, external_repository, cname | Phase 1 complete | 🟢 Completed | AGENT |
| 5.3 | Verify workflow syntax | Check YAML syntax and indentation in both workflow files | 5.1, 5.2 | 🟢 Completed | AGENT |

---

## Phase 6: Code Updates - Backend Files

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Update backend package.json | Update name, description, repository URL in `backend/package.json` | Phase 1 complete | 🟢 Completed | AGENT |
| 6.2 | Update contact-form function | Update branding text and `from:` email in `backend/netlify/functions/contact-form.js` | Phase 3 complete | 🟢 Completed | AGENT |
| 6.3 | Update reminder-form function | Update branding text and `from:` email in `backend/netlify/functions/reminder-form.js` | Phase 3 complete | 🟢 Completed | AGENT |
| 6.4 | Verify Resend integration | Review all Resend API calls for accuracy | 6.2, 6.3 | 🟢 Completed | AGENT |

---

## Phase 7: Code Updates - JavaScript Files

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 7.1 | Update contact form JS | Update Netlify function URL in `themes/icodewithai/assets/js/contact-form.js` | Phase 2 complete | 🟢 Completed | AGENT |
| 7.2 | Update reminder form JS | Update Netlify function URL in `themes/icodewithai/assets/js/reminder-form.js` | Phase 2 complete | 🟢 Completed | AGENT |
| 7.3 | Verify endpoint URLs | Check that both JS files point to correct Netlify site | 7.1, 7.2 | 🟢 Completed | AGENT |

---

## Phase 8: Code Updates - Analytics

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 8.1 | Update analytics domain | Update Plausible.io domain in `themes/icodewithai/layouts/_default/baseof.html` | Phase 1 complete | 🟢 Completed | AGENT |
| 8.2 | Create Plausible site | Create new site in Plausible.io dashboard for `ibuildwith.ai` domain | None | 🔴 Not Started | USER |
| 8.3 | Verify analytics code | Check that data-domain attribute is correct | 8.1 | 🟢 Completed | AGENT |

---

## Phase 9: Code Updates - Documentation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 9.1 | Update README | Update GitHub org/repo URLs and domain references in `README.md` | Phase 1 complete | 🟢 Completed | AGENT |
| 9.2 | Update content management docs | Update references in `.cody/project/library/docs/content-management.md` | Phase 1 complete | 🟢 Completed | AGENT |
| 9.3 | Update components docs | Update references in `.cody/project/library/docs/components.md` | Phase 1 complete | 🟢 Completed | AGENT |
| 9.4 | Verify documentation accuracy | Review all updated documentation files | 9.1, 9.2, 9.3 | 🟢 Completed | AGENT |

---

## Phase 10: Git Commit & Push to Staging

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 10.1 | Review all code changes | Verify all files updated correctly before committing | Phase 4-9 complete | 🔴 Not Started | AGENT |
| 10.2 | Create git commit | Commit all changes with comprehensive message | 10.1 | 🔴 Not Started | AGENT |
| 10.3 | Push to dev branch | Push commit to `dev` branch to trigger staging deployment | 10.2 | 🔴 Not Started | AGENT |
| 10.4 | Monitor GitHub Actions | Watch GitHub Actions workflow to ensure successful deployment | 10.3 | 🔴 Not Started | AGENT |
| 10.5 | Verify staging build | Confirm staging site builds without errors | 10.4 | 🔴 Not Started | AGENT |

---

## Phase 11: GitHub Pages Configuration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 11.1 | Update next repo CNAME | Update CNAME file in `ibuildwithai-next` gh-pages branch to `next.ibuildwith.ai` | Phase 10 complete | 🔴 Not Started | USER |
| 11.2 | Configure next GitHub Pages | Set custom domain to `next.ibuildwith.ai` in repo settings | 11.1 | 🔴 Not Started | USER |
| 11.3 | Wait for next DNS check | Wait for GitHub to verify DNS for staging domain (5-10 minutes) | 11.2 | 🔴 Not Started | USER |
| 11.4 | Enable next HTTPS | Enable "Enforce HTTPS" for staging site once DNS verified | 11.3 | 🔴 Not Started | USER |
| 11.5 | Update prod repo CNAME | Update CNAME file in `ibuildwithai-prod` gh-pages branch to `www.ibuildwith.ai` | Phase 10 complete | 🔴 Not Started | USER |
| 11.6 | Configure prod GitHub Pages | Set custom domain to `www.ibuildwith.ai` in repo settings | 11.5 | 🔴 Not Started | USER |
| 11.7 | Wait for prod DNS check | Wait for GitHub to verify DNS for production domain (5-10 minutes) | 11.6 | 🔴 Not Started | USER |
| 11.8 | Enable prod HTTPS | Enable "Enforce HTTPS" for production site once DNS verified | 11.7 | 🔴 Not Started | USER |

---

## Phase 12: Staging Testing - Visual & Content

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 12.1 | Test staging homepage | Visit `https://next.ibuildwith.ai` and verify homepage loads | Phase 11.4 complete | 🔴 Not Started | USER |
| 12.2 | Verify logo branding | Check that logo displays "iBuildWith.ai" branding | 12.1 | 🔴 Not Started | USER |
| 12.3 | Verify navigation | Test header and footer navigation menus | 12.1 | 🔴 Not Started | USER |
| 12.4 | Test mobile menu | Open mobile menu on phone/tablet and verify it works | 12.1 | 🔴 Not Started | USER |
| 12.5 | Test blog section | Visit blog list and individual blog posts | 12.1 | 🔴 Not Started | USER |
| 12.6 | Test podcast section | Visit podcast list and individual episodes | 12.1 | 🔴 Not Started | USER |
| 12.7 | Test presentations | Visit presentations list and individual pages | 12.1 | 🔴 Not Started | USER |
| 12.8 | Test apps section | Visit apps list and individual app pages with galleries | 12.1 | 🔴 Not Started | USER |
| 12.9 | Test about page | Visit About Marcelo page and verify content/branding | 12.1 | 🔴 Not Started | USER |
| 12.10 | Verify all images load | Check browser DevTools Network tab for broken images | 12.1 | 🔴 Not Started | USER |

---

## Phase 13: Staging Testing - Functionality

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 13.1 | Test contact form submission | Fill out and submit contact form on staging | Phase 12 complete | 🔴 Not Started | USER |
| 13.2 | Verify contact email received | Check that contact email arrives at correct address | 13.1 | 🔴 Not Started | USER |
| 13.3 | Verify contact email content | Confirm email contains correct branding and "from" address | 13.2 | 🔴 Not Started | USER |
| 13.4 | Test reminder form submission | Fill out and submit reminder form on staging | Phase 12 complete | 🔴 Not Started | USER |
| 13.5 | Verify reminder email received | Check that reminder email arrives at user's email | 13.4 | 🔴 Not Started | USER |
| 13.6 | Verify reminder email content | Confirm email contains correct branding and "from" address | 13.5 | 🔴 Not Started | USER |
| 13.7 | Test internal links | Click several internal links to verify they work | Phase 12 complete | 🔴 Not Started | USER |
| 13.8 | Test external links | Click external links (Discord, social media) to verify | Phase 12 complete | 🔴 Not Started | USER |

---

## Phase 14: Staging Testing - Technical

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 14.1 | Verify SSL certificate | Check for valid SSL certificate (no browser warnings) | Phase 12 complete | 🔴 Not Started | USER |
| 14.2 | Check browser console | Open DevTools console and verify no JavaScript errors | Phase 12 complete | 🔴 Not Started | USER |
| 14.3 | Verify analytics tracking | Check Plausible.io dashboard for staging visits | Phase 12 complete | 🔴 Not Started | USER |
| 14.4 | Test page load speed | Check that pages load quickly (< 3 seconds) | Phase 12 complete | 🔴 Not Started | USER |
| 14.5 | Test mobile responsiveness | View site on phone and tablet, check layout | Phase 12 complete | 🔴 Not Started | USER |
| 14.6 | Verify SEO meta tags | View page source and check meta tags show "iBuildWith.ai" | Phase 12 complete | 🔴 Not Started | USER |
| 14.7 | Check Open Graph preview | Test with Facebook Debugger tool | Phase 12 complete | 🔴 Not Started | USER |
| 14.8 | Check Twitter Card preview | Test with Twitter Card Validator | Phase 12 complete | 🔴 Not Started | USER |
| 14.9 | Verify sitemap | Visit `/sitemap.xml` and verify it generates correctly | Phase 12 complete | 🔴 Not Started | USER |
| 14.10 | Cross-browser testing | Test in Chrome, Firefox, Safari (desktop and mobile) | Phase 12 complete | 🔴 Not Started | USER |

---

## Phase 15: Production Deployment

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 15.1 | Final staging verification | Confirm all staging tests passed successfully | Phase 12-14 complete | 🔴 Not Started | USER |
| 15.2 | Run push-to-prod script | Execute `./automations/push-to-prod.sh` with version 1.7.0 | 15.1 | 🔴 Not Started | USER |
| 15.3 | Monitor GitHub Actions | Watch production workflow execute successfully | 15.2 | 🔴 Not Started | USER |
| 15.4 | Verify prod deployment | Check that production site updates at `www.ibuildwith.ai` | 15.3 | 🔴 Not Started | USER |
| 15.5 | Wait for DNS propagation | Allow 5-10 minutes for changes to fully propagate | 15.4 | 🔴 Not Started | USER |

---

## Phase 16: Production Testing - Quick Smoke Tests

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 16.1 | Test prod homepage | Visit `https://www.ibuildwith.ai` and verify homepage loads | Phase 15.5 complete | 🔴 Not Started | USER |
| 16.2 | Quick content check | Spot check blog, podcast, presentations, apps sections | 16.1 | 🔴 Not Started | USER |
| 16.3 | Test contact form | Submit contact form on production | 16.1 | 🔴 Not Started | USER |
| 16.4 | Verify contact email | Check that production contact email arrives | 16.3 | 🔴 Not Started | USER |
| 16.5 | Test reminder form | Submit reminder form on production | 16.1 | 🔴 Not Started | USER |
| 16.6 | Verify reminder email | Check that production reminder email arrives | 16.5 | 🔴 Not Started | USER |
| 16.7 | Verify SSL certificate | Check for valid SSL on production domain | 16.1 | 🔴 Not Started | USER |
| 16.8 | Check analytics tracking | Verify Plausible.io tracking production visits | 16.1 | 🔴 Not Started | USER |
| 16.9 | Test on mobile device | Open production site on actual mobile device | 16.1 | 🔴 Not Started | USER |
| 16.10 | Verify no console errors | Check browser console for errors on production | 16.1 | 🔴 Not Started | USER |

---

## Phase 17: Search Engine Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 17.1 | Add site to Google Search Console | Add `ibuildwith.ai` as new property | Phase 16 complete | 🔴 Not Started | USER |
| 17.2 | Submit sitemap to Google | Submit `https://www.ibuildwith.ai/sitemap.xml` to GSC | 17.1 | 🔴 Not Started | USER |
| 17.3 | Request Google reindexing | Request reindexing for key pages (homepage, about, etc.) | 17.2 | 🔴 Not Started | USER |
| 17.4 | Add site to Bing Webmaster | Add `ibuildwith.ai` to Bing Webmaster Tools | Phase 16 complete | 🔴 Not Started | USER |
| 17.5 | Submit sitemap to Bing | Submit sitemap to Bing Webmaster Tools | 17.4 | 🔴 Not Started | USER |
| 17.6 | Monitor for crawl errors | Check GSC and Bing for any crawl errors over next 24 hours | 17.2, 17.5 | 🔴 Not Started | USER |

---

## Phase 18: External Profile Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 18.1 | Update LinkedIn profile | Update personal profile bio with new domain | Phase 16 complete | 🔴 Not Started | USER |
| 18.2 | Update LinkedIn company | Update company page URL to new domain | Phase 16 complete | 🔴 Not Started | USER |
| 18.3 | Update Twitter/X bio | Update profile bio with new branding | Phase 16 complete | 🔴 Not Started | USER |
| 18.4 | Update YouTube description | Update channel description with new domain | Phase 16 complete | 🔴 Not Started | USER |
| 18.5 | Update Discord server | Update server description/info with new branding | Phase 16 complete | 🔴 Not Started | USER |
| 18.6 | Update GitHub profile | Update profile README with new domain (if applicable) | Phase 16 complete | 🔴 Not Started | USER |
| 18.7 | Update email signature | Update personal email signature with new domain | Phase 16 complete | 🔴 Not Started | USER |

---

## Phase 19: Post-Migration Monitoring (24 Hours)

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 19.1 | Monitor analytics traffic | Check Plausible.io for normal traffic levels | Phase 16 complete | 🔴 Not Started | USER |
| 19.2 | Check for error spikes | Monitor browser console for any recurring errors | Phase 16 complete | 🔴 Not Started | USER |
| 19.3 | Monitor form submissions | Verify contact/reminder forms continue working | Phase 16 complete | 🔴 Not Started | USER |
| 19.4 | Check social media links | Verify all social media share buttons work | Phase 16 complete | 🔴 Not Started | USER |
| 19.5 | Monitor Discord | Watch for user reports of issues in Discord | Phase 16 complete | 🔴 Not Started | USER |
| 19.6 | Review Netlify logs | Check Netlify function logs for errors | Phase 16 complete | 🔴 Not Started | USER |
| 19.7 | Check email deliverability | Verify no bounce/spam issues with new sending domain | Phase 16 complete | 🔴 Not Started | USER |

---

## Phase 20: Old Domain Redirect Strategy (Post-Migration Task)

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 20.1 | Decide redirect approach | Choose between GitHub Pages redirects, registrar forwarding, or Netlify | Phase 19 complete | 🔴 Not Started | USER |
| 20.2 | Setup 301 redirects | Configure redirects from `icodewith.ai` → `ibuildwith.ai` | 20.1 | 🔴 Not Started | USER |
| 20.3 | Test old domain URLs | Visit several old URLs and verify they redirect correctly | 20.2 | 🔴 Not Started | USER |
| 20.4 | Verify path preservation | Check that URL paths are preserved in redirects | 20.3 | 🔴 Not Started | USER |
| 20.5 | Monitor redirect traffic | Track how many users are hitting old domain | 20.2 | 🔴 Not Started | USER |
| 20.6 | Document redirect timeline | Note when redirects should be removed (6-12 months) | 20.2 | 🔴 Not Started | USER |

---

## Phase 21: Version Completion & Documentation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 21.1 | Update feature backlog | Mark v1.7.0 as completed in feature-backlog.md | All phases complete | 🔴 Not Started | AGENT |
| 21.2 | Create retrospective | Create retrospective.md documenting lessons learned | All phases complete | 🔴 Not Started | AGENT |
| 21.3 | Update release notes | Add v1.7.0 entry to release-notes.md | All phases complete | 🔴 Not Started | AGENT |
| 21.4 | Tag final version | Create git tag `v1.7.0` and push to remote | All phases complete | 🔴 Not Started | USER |
| 21.5 | Celebrate success | You did it! 🎉 | All phases complete | 🔴 Not Started | USER |

---

## Summary Statistics

**Total Phases**: 21
**Total Tasks**: 140+
**USER Tasks**: ~90 tasks (65%)
**AGENT Tasks**: ~50 tasks (35%)

**Estimated Time**:
- **Active Work**: 15-20 hours total
- **Waiting Time**: 2-4 hours (DNS propagation, SSL certificates)
- **Monitoring Time**: Ongoing over 24-48 hours
- **Total Calendar Time**: 2-4 days

---

## Critical Path (Must Complete in Order)

1. **Phase 1** (GitHub Migration) → **Phase 2** (Netlify) → **Phase 3** (Resend)
2. **Phase 4-9** (All Code Updates)
3. **Phase 10** (Git Commit & Deploy to Staging)
4. **Phase 11** (GitHub Pages Config)
5. **Phase 12-14** (Staging Testing)
6. **Phase 15** (Production Deployment)
7. **Phase 16** (Production Testing)
8. **Phases 17-21** (Post-deployment tasks - can be done over time)

---

## Next Action

**USER**: Start with Phase 1, Task 1.1 - Backup current state with git tag.

**Command to run**:
```bash
git tag v1.6.0-final-before-rebrand
git push origin v1.6.0-final-before-rebrand
```

Then proceed with Phase 1, Task 1.3 - Rename GitHub organization.

**AGENT**: Standing by to execute Phase 4-10 once Phase 1-3 are complete.
