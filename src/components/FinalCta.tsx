import { WA } from '@/lib/site';

// A faixa que fecha todas as páginas menos a 404 — no site estático é o
// parâmetro `final` da função `page()`.
export function FinalCta() {
  return (
    <div className="final" id="falar">
      <div className="wrap">
        <h2>Quer ver rodando no seu negócio?</h2>
        <p>A gente monta o seu catálogo junto com você e você testa com clientes de verdade.</p>
        <a className="btn light" href={WA} rel="noopener">
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  );
}
