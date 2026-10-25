import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://precious-bar-logistics-demo.vercel.app';
  const paths = ['', '/join', '/matches'] as const;
  return paths.map((path) => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));
}
