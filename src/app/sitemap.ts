import { MetadataRoute } from 'next';
import { seo } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more routes here if you have subpages like /projects, /blog, etc.
  ];
}
