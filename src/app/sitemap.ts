import type { MetadataRoute } from 'next';
import { DOM } from '@/lib/site';

// As mesmas cinco páginas do sitemap do site estático — a 404 fica de fora.
const ROTAS = ['/', '/como-funciona', '/para-quem', '/duvidas', '/contato'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROTAS.map((rota) => ({
    url: `${DOM}${rota === '/' ? '' : rota}`,
    changeFrequency: 'monthly',
  }));
}
