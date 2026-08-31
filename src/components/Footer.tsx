import Link from 'next/link';
import { CNPJ, MAIL, WA } from '@/lib/site';
import { LogoBranco } from './Logo';

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <LogoBranco />
            <p style={{ maxWidth: '34ch', color: '#8B9098' }}>
              Orçamento no WhatsApp, pronto em minutos. Feito no Brasil, para quem vende serviço sob
              medida.
            </p>
          </div>
          <div>
            <div className="t">Produto</div>
            <Link href="/como-funciona">Como funciona</Link>
            <Link href="/para-quem">Pra quem é</Link>
            <Link href="/duvidas">Dúvidas</Link>
          </div>
          <div>
            <div className="t">Contato</div>
            <a href={WA} rel="noopener">
              WhatsApp
            </a>
            <a href={`mailto:${MAIL}`}>{MAIL}</a>
            <Link href="/contato">Fale com a gente</Link>
          </div>
        </div>
        <div className="legal">
          &copy; {new Date().getFullYear()} OrçaAI &middot; CNPJ {CNPJ}
        </div>
      </div>
    </footer>
  );
}
