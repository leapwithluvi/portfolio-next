import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s | ${seo.author}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author, url: seo.url }],
  creator: seo.author,
  publisher: seo.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    url: seo.url,
    siteName: seo.author,
    locale: 'en_US',
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.author,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [seo.image],
    creator: seo.twitterHandle,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon.png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: seo.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
             __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": seo.author,
              "url": seo.url,
              "image": `${seo.url}${seo.image}`,
              "sameAs": [
                "https://github.com/leapwithluvi",
                "https://www.linkedin.com/in/leapwithluvi",
                "https://www.instagram.com/leapwithluvi",
                "https://www.twitter.com/leapwithluvi"
              ],
              "jobTitle": "Fullstack Developer & AI/ML Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": seo.description
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": seo.title,
              "url": seo.url,
              "author": {
                "@type": "Person",
                "name": seo.author
              },
              "description": seo.description,
              "keywords": seo.keywords
            })
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
          {/* Global Vertical Dividers - Synced with 1280px Container */}
          <div className="absolute left-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border/50 hidden xl:block pointer-events-none z-0" />
          <div className="absolute right-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border/50 hidden xl:block pointer-events-none z-0" />
          
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
