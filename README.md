# The Beach Bowl

Front-facing site for The Beach Bowl (Door County, WI). Orders hand off to the existing Square ordering site.

## Stack
Next.js 14 (App Router) · Tailwind · Framer Motion · Lucide icons · Fraunces + Inter (Google Fonts).

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (Netlify)
Standard Next.js deploy. Connect the GitHub repo, build command `npm run build`, publish `.next`.

## Structure
- `app/page.tsx` — single-page composition
- `components/` — Nav, Hero, Story, Menu, Visit, Footer
- `lib/menu.ts` — menu data + Square order URL (`ORDER_URL`)

Update the menu or the order link in one place: `lib/menu.ts`.
