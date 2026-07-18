# PRD: Demor Landing Page + PatientApp Portal Split

**Version:** 1.0  
**Date:** July 18, 2026  
**Status:** In progress  
**Owner:** Demor team  

---

## 1. Problem Statement

Demor has white-labeled PatientApp (`patientapp.me`) and connected the root domain `demor.app` to their merchant portal. As a result:

- Visitors to `https://demor.app` immediately see PatientApp's sign-in screen
- There is no marketing landing page or branded first impression
- Sign-up and sign-in work, but there is no top-of-funnel experience

**Goal:** Serve a Demor-branded landing page at `demor.app`, with Sign In / Sign Up buttons that route users to the PatientApp portal on a dedicated subdomain.

---

## 2. Solution Overview

Two-hostname architecture:

| URL | Purpose |
|-----|---------|
| `demor.app` | Next.js landing page (this repo, deployed on Vercel) |
| `app.demor.app` | PatientApp merchant portal (CNAME to PatientApp) |

**User flow:**

1. User visits `https://demor.app` → sees landing page
2. User clicks **Sign Up** or **Sign In** → navigates to `https://app.demor.app`
3. User completes auth inside PatientApp on the white-labeled subdomain

---

## 3. Scope

### In scope (v1)

- [x] Single-page Next.js landing page
- [x] Header with Sign In and Sign Up (top-right)
- [x] Hero with headline, subheadline, Get Started CTA
- [x] Three feature cards
- [x] Footer
- [x] `/login` redirect to portal (for bookmarked URLs)
- [x] `NEXT_PUBLIC_PORTAL_URL` env var for portal links
- [ ] DNS reconfiguration (manual — see Section 4)
- [ ] PatientApp white-label domain change (manual — see Section 4)
- [ ] Deploy to Vercel

### Out of scope (v1)

- Blog, pricing, docs pages
- Custom auth (PatientApp handles all auth)
- Analytics

---

## 4. DNS & Domain Setup (Manual Steps)

### Target DNS records

| Host | Type | Points to | Purpose |
|------|------|-----------|---------|
| `demor.app` | A / ALIAS | Vercel | Landing page |
| `www.demor.app` | CNAME | `cname.vercel-dns.com` | Optional www |
| `app.demor.app` | CNAME | PatientApp-provided target | Merchant portal |

### PatientApp merchant portal

1. Remove `demor.app` as the white-label domain (if currently set)
2. Add `app.demor.app` as the new white-label subdomain
3. Add the CNAME (+ SSL validation records) PatientApp provides
4. Verify `https://app.demor.app` loads with Demor branding

### Vercel deployment

1. Push this repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add custom domain `demor.app`
4. Update DNS at your registrar to point `demor.app` to Vercel
5. Set environment variable: `NEXT_PUBLIC_PORTAL_URL=https://app.demor.app`

---

## 5. Acceptance Criteria

| # | Criterion |
|---|-----------|
| 1 | `https://demor.app` shows Demor landing page, not PatientApp login |
| 2 | `https://app.demor.app` shows PatientApp portal with Demor branding |
| 3 | Sign In / Sign Up / Get Started navigate to portal |
| 4 | Page is mobile-responsive |
| 5 | Both domains have valid HTTPS |
| 6 | `/login` on landing site redirects to portal |

---

## 6. Open Questions

1. Does PatientApp provide a separate signup URL path?
2. What is the exact CNAME target PatientApp provides?
3. Where is `demor.app` registered (Cloudflare, Namecheap, etc.)?
4. Final Demor brand assets (logo, colors, copy)?

---

## 7. Implementation Status

| Phase | Status |
|-------|--------|
| Next.js landing page | Done |
| PRD | Done |
| DNS + PatientApp reconfiguration | Pending (manual) |
| Vercel deploy | Pending |
