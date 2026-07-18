# Demor Landing Page

Marketing landing page for [demor.app](https://demor.app). Sign In / Sign Up buttons route to the PatientApp merchant portal at `app.demor.app`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and set your portal URL:

```env
NEXT_PUBLIC_PORTAL_URL=https://app.demor.app
```

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add domain `demor.app` in project settings
4. Point DNS for `demor.app` to Vercel (not PatientApp)
5. Set `NEXT_PUBLIC_PORTAL_URL=https://app.demor.app` in Vercel env vars

## DNS architecture

| Host | Purpose |
|------|---------|
| `demor.app` | This Next.js landing page (Vercel) |
| `app.demor.app` | PatientApp merchant portal (CNAME to PatientApp) |

See [PRD-landing-page.md](./PRD-landing-page.md) for full setup instructions.

## Project structure

```
app/
  page.tsx          Landing page
  login/page.tsx    Redirects to portal
components/
  Header.tsx        Logo + Sign In / Sign Up
  Hero.tsx          Headline + CTAs
  Features.tsx      Feature cards
  Footer.tsx
lib/
  config.ts         Portal URL from env
```
