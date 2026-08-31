import type { Metadata } from 'next';
import { FinalCta } from '@/components/FinalCta';
import { MAIL, WA } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato — OrçaAI',
  description: 'Fale com a gente pelo WhatsApp ou e-mail. Sem formulário longo e sem robô de vendas.',
  alternates: { canonical: '/contato' },
};

const PRIMEIRA_CONVERSA = [
  {
    n: '01',
    h: 'Vinte minutos de conversa',
    p: 'A gente pergunta o que você vende, como cobra e quantos orçamentos faz por mês. Se não fizer sentido para o seu caso, a gente fala na hora.',
  },
  {
    n: '02',
    h: 'A gente monta o seu catálogo',
    p: 'Seus itens, suas perguntas, sua tabela. É o trabalho pesado, e é nosso.',
  },
  {
    n: '03',
    h: 'Você testa com clientes de verdade',
    p: 'Com aprovação manual ligada, para você ver cada orçamento antes de ir. Se não gostar, para por aí.',
  },
];

export default function Contato() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">contato</span>
          <h1 style={{ marginTop: 16 }}>Fale com a gente</h1>
          <p className="lead">
            Sem formulário longo e sem robô de vendas. Você manda mensagem, uma pessoa responde.
          </p>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <div className="contatos">
            <div className="canal">
              <h3>WhatsApp</h3>
              <p>
                O caminho mais rápido. A gente responde em horário comercial, e fora dele também
                quando dá.
              </p>
              <a
                className="btn"
                href={`${WA}?text=${encodeURIComponent('Oi! Quero saber mais sobre a OrçaAI')}`}
                rel="noopener"
              >
                Abrir conversa
              </a>
            </div>
            <div className="canal">
              <h3>E-mail</h3>
              <p>Para proposta, parceria, imprensa ou qualquer assunto que peça anexo.</p>
              <a className="btn ghost" href={`mailto:${MAIL}`}>
                {MAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">o que acontece depois</span>
            <h2 style={{ marginTop: 14 }}>Como é a primeira conversa</h2>
            <p>Para você saber no que está entrando antes de mandar a mensagem.</p>
          </div>
          <div className="steps">
            {PRIMEIRA_CONVERSA.map(({ n, h, p }) => (
              <div className="s" key={n}>
                <span className="n">{n}</span>
                <div>
                  <h3>{h}</h3>
                </div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
