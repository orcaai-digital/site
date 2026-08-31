import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Este projeto é auto-contido (package.json e lockfile próprios) porque é
  // espelhado sozinho para o repo orcaai-digital/site. Rodando de dentro do monorepo o
  // Turbopack enxerga dois lockfiles e chuta a raiz errada — aqui a raiz é
  // sempre este diretório.
  turbopack: { root: path.resolve(__dirname) },

  // O site estático que este projeto substitui publicava `/index.html`,
  // `/como-funciona.html` etc. Esses caminhos já estão no sitemap indexado e em
  // links de fora, então continuam válidos — só que agora como redirect
  // permanente para a rota equivalente do App Router.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/como-funciona.html', destination: '/como-funciona', permanent: true },
      { source: '/para-quem.html', destination: '/para-quem', permanent: true },
      { source: '/duvidas.html', destination: '/duvidas', permanent: true },
      { source: '/contato.html', destination: '/contato', permanent: true },
    ];
  },
};

export default nextConfig;
