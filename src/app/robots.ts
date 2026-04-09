import { MetadataRoute } from 'next';
import { seo } from '@/data/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${seo.url}/sitemap.xml`,
  };
}
