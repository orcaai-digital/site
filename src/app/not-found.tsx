import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página não encontrada — OrçaAI',
  description: 'Esse link não existe mais.',
};

// Única página sem a faixa final de CTA — igual ao `final=False` do site estático.
export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="eyebrow">página não encontrada</span>
        <h1 style={{ marginTop: 16 }}>Esse link não existe mais.</h1>
        <p className="lead" style={{ margin: '20px auto 30px' }}>
          Pode ter sido movido ou digitado errado. Volte para o início ou chame a gente.
        </p>
        <Link className="btn" href="/">
          Ir para o início
        </Link>
      </div>
    </section>
  );
}
