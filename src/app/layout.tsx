import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { DOM } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(DOM),
  title: 'OrçaAI',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    images: ['/assets/img/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/assets/img/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/img/favicon-32.png', sizes: '32x32' },
    ],
    apple: '/assets/img/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* As duas famílias vêm do Google Fonts, igual ao site estático. O CSS
            depende do eixo `wdth` do Archivo (font-variation-settings), então a
            URL precisa continuar pedindo a variable font com os dois eixos. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Instrument+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
