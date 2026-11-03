# Shereen Mokone Portfolio

A responsive, single-page portfolio for Shereen Mokone, a front-end and CMS
developer with a focus on digital marketing. The site presents her profile,
career history, skills, selected work, and contact details.

## Features

- Responsive layout with a sticky navigation bar and an accessible mobile menu.
- Hero portrait and About portrait, optimized with `next/image`.
- Selected-work cards with responsive Multiply, FraudCheck, and Ozow project
  mockups.
- Hero and About links for downloading the CV.
- Insights, services, career highlights, skills, and selected-work sections.
- Project cards link to their respective project websites.
- Contact links for email and telephone; the email form opens the visitor's
  default email application.
- Semantic sections, keyboard-accessible navigation, visible focus styling,
  and page metadata for search and social previews.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4, with the portfolio's design tokens and responsive component
  styling in `app/globals.css`
- ESLint 9
- Geist and Geist Mono via `next/font`

Versions are pinned or constrained in `package.json` and `package-lock.json`.

## Portfolio sections

The home page is assembled in this order:

1. Hero and primary calls to action
2. Insights
3. Services
4. About, CV download, and contact call to action
5. Career snapshot and highlights
6. Skills
7. Selected work
8. Contact and footer

Navigation links scroll to these sections. The navigation adapts for smaller
screens with a menu toggle and a full-width Contact link.

## Getting started

### Prerequisites

- Node.js 20.9 or later
- npm

### Install and run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The app does not require environment variables. `next/font/google` retrieves
the Geist font files during the build, so a network connection is needed when
building in a clean environment.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Check TypeScript types without emitting files. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build locally. Run after `npm run build`. |

Before publishing changes, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/
  globals.css             Design tokens, component styles, and responsive rules
  layout.tsx              Root layout, fonts, and SEO/social metadata
  page.tsx                Home page and section composition
components/
  sections/               Navigation and portfolio page sections
  ui/                     Shared button and portrait components
assets/
  shereen hero.png        Hero portrait source image
  shereem about me.png    About portrait source image
  SPORTY Fitness Website Device Mockup.png  E-commerce project mockup
  FraudCheck Responsive Website Mockup.png  FraudCheck project mockup
  OZOW Merchant Website Mockup.png          Ozow project mockup
  CV_ Shereen Mokone.pdf  Latest CV source asset
lib/
  portfolio-data.ts       Skills and selected-project content
public/
  CV.pdf                  CV served from the site root as /CV.pdf
```

## Images, CV, and links

- The two portrait images are imported from `assets/` by
  `components/ui/portrait-artwork.tsx`. Keep those files in the repository;
  Next.js bundles and optimizes them for the deployed site.
- The CV download buttons use the root-relative URL `/CV.pdf`. Keep
  `public/CV.pdf` in the repository so the file is available at that URL after
  deployment. The latest source CV is `assets/CV_ Shereen Mokone.pdf`.
- Internal navigation uses in-page anchors, and the project destinations are
  maintained in `lib/portfolio-data.ts`.
- The contact email and telephone links are maintained in
  `components/sections/contact.tsx`; the LinkedIn profile is linked there too.
  The email form uses a `mailto:` action and therefore relies on the visitor
  having an email application configured.
- When updating or renaming an asset or destination, update its import or URL
  in the corresponding component/data file as well.

## Publish to GitHub and deploy

Pushing this repository to GitHub publishes the **source code**, not a running
Next.js website. For a live site, import the GitHub repository into
[Vercel](https://vercel.com/new), or use another host that supports the Next.js
App Router. GitHub Pages does not run this project as configured; hosting there
would require converting the app to a compatible static export.

To connect this local repository to a new GitHub repository, first create an
empty repository on GitHub, then configure its URL and push the current branch:

```bash
git remote add origin https://github.com/<your-account>/<your-repository>.git
git add .
git commit -m "Prepare portfolio for GitHub"
git push -u origin <your-branch>
```

Replace the URL and `<your-branch>` with your GitHub repository URL and the
branch name shown by `git branch --show-current`. Make sure the `assets/`
directory, `components/`, `lib/`, and `public/CV.pdf` are included in the commit.
The existing `.gitignore` excludes generated build output, dependencies, local
environment files, and other machine-specific files.

## Content to review before launch

- Confirm the email address, telephone number, and contact details in
  `components/sections/contact.tsx`.
- Keep the latest CV in `assets/CV_ Shereen Mokone.pdf` and copy it to
  `public/CV.pdf` whenever it is updated, so the download links stay current.
- Confirm project descriptions and destination URLs in `lib/portfolio-data.ts`.
- Update the metadata in `app/layout.tsx` if the public site title, description,
  or social preview copy changes.
