# Notstar Media

Notstar Media is a premium multi-page media company website built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and Sanity CMS. It is designed as a polished production foundation for a high-end podcast network, editorial studio, or creator-led media brand.

## Project Overview

- Fully responsive marketing site with premium editorial styling
- CMS-managed homepage, about page, services, team, shows, testimonials, FAQs, site settings, and blog/news
- Dynamic routes for shows and articles
- Embedded Sanity Studio at `/studio`
- Secure tag-based revalidation endpoint at `/api/revalidate`
- Seeded starter content for immediate launch/demo use

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Sanity CMS
- next-sanity
- GROQ
- Portable Text
- ESLint
- Prettier

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Add environment variables:

```bash
cp .env.example .env.local
```

3. Seed the CMS:

```bash
npm run seed
```

4. Start development:

```bash
npm run dev
```

5. Open the site:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Environment Variables

Create `.env.local` with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_REVALIDATE_SECRET=
SANITY_WRITE_TOKEN=
```

Notes:

- `NEXT_PUBLIC_SANITY_*` powers published frontend reads.
- `SANITY_WRITE_TOKEN` is only needed for seeding or authenticated server-side write operations.
- Never commit real secrets.

## Sanity Setup

- Sanity project ID: `jlx9t7dl`
- Dataset: `production`
- Studio route: `/studio`

Content model includes:

- Site settings
- Homepage
- About page
- Team members
- Shows / work items
- Authors
- Blog posts
- Services
- Testimonials
- FAQs

## Useful Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run seed
```

## Deployment Notes

### Vercel

Set these environment variables in Vercel:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_REVALIDATE_SECRET`

`SANITY_WRITE_TOKEN` should only be added if you intentionally need server-side write access in production.

### Revalidation Webhook

Create a Sanity webhook that sends `POST` requests to:

```text
https://YOUR-LIVE-DOMAIN/api/revalidate
```

Recommended webhook settings:

- Events: create, update, delete
- Filter: `_type in ["siteSettings","homepage","aboutPage","teamMember","showItem","author","post","service","testimonial","faq"]`
- Projection: `{_type}`
- Secret: same value as `SANITY_REVALIDATE_SECRET`

## Content Editing Guide

### Edit homepage

- Open Studio
- Go to `Homepage`
- Update hero copy, featured references, stats, testimonials, and CTA
- Publish changes

### Publish a blog post

- Open Studio
- Create or edit a `Blog Post / News Article`
- Fill title, slug, excerpt, category, author, tags, body, and SEO
- Publish the document

### Add a show or work item

- Open Studio
- Create a `Show / Work Item`
- Add description, long-form body, platform links, category, and featured state
- Publish the document

## Final Links

Pending final GitHub and Vercel publishing:

- Live website: pending
- GitHub repo: pending
- Vercel project/dashboard: pending
- Sanity Studio management link: [https://www.sanity.io/manage/project/jlx9t7dl](https://www.sanity.io/manage/project/jlx9t7dl)

After deployment, also use:

- Embedded Studio on the live site: `https://YOUR-LIVE-DOMAIN/studio`

## Verification Status

Completed locally:

- `npm run seed`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- HTTP checks returning `200` for `/`, a blog detail route, and `/studio`

## Next Improvements

- Connect the contact form to an inbox, CRM, or server action
- Add real brand photography or show artwork in Sanity
- Enable Sanity Visual Editing or draft preview if preview workflows become important
- Add analytics, newsletter integration, and richer case-study modules
