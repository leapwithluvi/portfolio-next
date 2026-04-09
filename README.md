# 🚀 Modern Fullstack Portfolio Template

A high-performance, SEO-optimized, and visually stunning portfolio template built with **Next.js 15**, **React 19**, and **Tailwind CSS**. Designed for developers who want to showcase their skills, projects, and AI/ML expertise with a premium look.

![Portfolio Preview](/public/images/portfolio.png)

## ✨ Features

- **🎨 Premium Aesthetics**: Sleek dark/light mode with glassmorphism and smooth animations.
- **📱 Fully Responsive**: Optimized for all devices—mobile, tablet, and desktop.
- **🔍 SEO Optimized**: Includes JSON-LD structured data, dynamic sitemap, and OpenGraph/Twitter metadata for social sharing.
- **🌗 Theme Switcher**: Local storage-synced light/dark mode support.
- **🚀 Ultra Fast**: Built on Next.js 15 App Router for maximum performance (Core Web Vitals).
- **📝 Easy Customization**: Centralized data files for all your profile, projects, and skills.
- **⚡ Framer Motion**: Subtle micro-animations for an interactive user experience.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Lucide Icons
- **Animation**: Framer Motion
- **SEO**: Next Metadata API, JSON-LD Schema
- **Deployment**: Vercel Ready

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-next.git
cd portfolio-next
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## ⚙️ Customization Guide

This template is designed to be easily customized. All personal information is stored in the `src/data` folder. **Simply edit these files to make it yours:**

| File | Description |
|------|-------------|
| `src/data/profile.ts` | Your name, bio, and "About Me" sections. |
| `src/data/seo.ts` | Website title, description, keywords, and social preview settings. |
| `src/data/socials.ts` | Links to your GitHub, LinkedIn, Twitter, etc. |
| `src/data/projects.ts` | Showcase your work with images, descriptions, and repo links. |
| `src/data/techstack.ts` | List your skills grouped by category (Frontend, Backend, etc.). |
| `src/data/experience.ts` | Your work history and internship experience. |
| `src/data/certificates.ts`| Your professional certifications. |

### Adding Images
1. Place your profile picture, project screenshots, and icons in the `public/images/` folder.
2. Update the image paths in the corresponding data files (e.g., `srcImg: "/images/your-project.png"`).

## 🌍 Deployment

### Deploy on Vercel
The easiest way to deploy is through [Vercel](https://vercel.com/new):
1. Import your GitHub repository.
2. The build settings should be automatically detected.
3. Click **Deploy**.

## 📄 License

This project is licensed under the MIT License. Feel free to use it for your own personal portfolio!

---

Built with ⚡ by [Luvi Aprilyansyah Gabriel](https://github.com/leapwithluvi)
