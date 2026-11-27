# Kyle Ando — Personal Portfolio

A personal portfolio website prepared for internship/OJT applications. It showcases selected builds, a categorized tech stack, an experience journal, and a contact form.

**Live site:** [https://kyleundo.vercel.app](https://kyleundo.vercel.app)

## Technologies

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 with shadcn/ui primitives and class-variance-authority
- lucide-react, clsx, tailwind-merge, date-fns, react-day-picker, vaul
- Deployed on Vercel

## Setup

Requires Node.js 20.9+ (Next.js 16).

```bash
git clone https://github.com/lKylelUndo/itelective.git
cd itelective
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` (production build), `npm run lint` (ESLint).

## Project structure

- `app/(guest)/` — Home, About, Projects, Blogs (listing, category and date filters, article view), Contact
- `components/common/` — header, footer, cards, contact form, reusable pagination
- `components/features/` — page sections (hero, flagship builds, services, journal, filters)
- `components/ui/` — shadcn/ui primitives
- `constants/` — static content for projects, blogs, services and skills
- `styles/globals.css` — Tailwind v4 theme tokens and base styles

## Screenshots

See the live site for current screenshots: [https://kyleundo.vercel.app](https://kyleundo.vercel.app)
