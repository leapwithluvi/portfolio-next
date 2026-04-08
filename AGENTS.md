<!-- BEGIN:nextjs-agent-rules -->
## 1. Project Overview
This project is a modern and reusable developer portfolio template built with Next.js.
It is designed to be easily customizable by editing simple configuration files.

---

## 2. Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- shadcn/ui (for UI components)
- lucide-react (for icons)

---

## 3. Project Structure

- `app/` → routing, layouts, and pages (App Router)
- `components/` → reusable UI components
- `data/` → editable content (profile, projects, social links)
- `public/` → static assets (images, icons)
- `lib/` → utilities and shared logic (e.g., animations)

---

## 4. Core Principles

- Keep components reusable and modular
- Separate UI from data (no hardcoded personal info)
- Prefer simplicity over complexity
- Maintain clean and readable code

---

## 5. Rules

- DO NOT hardcode personal data inside components
- ALWAYS use data from `/data` directory
- Use functional components only
- Use TypeScript for type safety
- Use `"use client"` only when necessary
- Prefer Server Components by default

---

## 6. Styling Guidelines

- Use Tailwind CSS for styling
- Keep class names readable and consistent
- Avoid inline styles unless necessary

---

## 7. Animation Guidelines

- Use Framer Motion for animations
- Keep animations smooth and minimal
- Avoid excessive or distracting effects

---

## 8. Development

Install dependencies:
npm install

Run development server:
npm run dev

---

## 9. Contribution Guidelines

- Keep code clean and maintainable
- Follow existing structure and naming conventions
- Do not introduce unnecessary dependencies
- Ensure components remain reusable

---

## 10. Notes for AI Agents

- This project uses modern Next.js (App Router)
- Avoid deprecated APIs and old patterns (e.g., pages router)
- Always follow the structure and rules defined above
<!-- END:nextjs-agent-rules -->
