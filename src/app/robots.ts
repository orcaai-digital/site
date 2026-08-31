import type { MetadataRoute } from 'next';
import { DOM } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${DOM}/sitemap.xml`,
  };
}
