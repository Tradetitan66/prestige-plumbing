# Prestige Plumbing Heating Ltd — Website

A single-page, high-converting local business landing page for **Prestige
Plumbing Heating Ltd**, a plumbing and heating company serving Penicuik,
Edinburgh and surrounding areas in Midlothian.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Purpose

The page is designed to convert visitors into enquiries through three primary
routes:

- Phone calls — every phone number links to `tel:07761845314`
- WhatsApp enquiries — every WhatsApp link opens `wa.me/447761845314`
- Quote form — validates input, builds a readable message and opens WhatsApp
  with the customer's details pre-filled (nothing is stored on the site)

It showcases real project photography (before/after comparisons) rather than
stock imagery, and focuses on trust, clarity and mobile-first contactability.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Scripts

| Command          | Description                     |
| ---------------- | ------------------------------- |
| `npm run dev`    | Start the development server    |
| `npm run build`  | Create a production build       |
| `npm run start`  | Serve the production build      |
| `npm run lint`   | Run ESLint                      |

## Project structure

```
app/                  # App Router: layout, page, policy pages, globals.css
components/           # Reusable section components (Header, Hero, QuoteForm, ...)
data/site.ts          # Central business info (phone, WhatsApp, links, services)
public/images/projects/  # Real Prestige project photos + logo
```

## Configuration

All business details (phone number, WhatsApp number, email, social links,
service list and project photos) live in one place: `data/site.ts`. Update
this file to keep the whole site in sync.

## Content accuracy

This site intentionally avoids fabricating claims. It does not state
certifications, Gas Safe registration, ratings, review counts, years trading,
awards or insurance details unless they are provided, verified facts. Reviews
use the safe wording "Highly rated by local customers" and link to the Yell
profile. Structured data (JSON-LD) contains only verified business information.
