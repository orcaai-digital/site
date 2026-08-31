import type { Metadata } from 'next';
import Link from 'next/link';
import { FinalCta } from '@/components/FinalCta';
import { WA } from '@/lib/site';

export const metadata: Metadata = {
  title: 'OrçaAI — orçamento no WhatsApp, pronto em minutos',
  description:
    'Seu cliente pede orçamento pelo WhatsApp. A conversa vira um PDF com a sua marca. Você confere e envia.',
  alternates: { canonical: '/' },
};

const RAMOS = [
  'Marmoraria',
  'Serralheria',
  'Vidraçaria',
  'Gráfica',
  'Marcenaria',
  'Buffet e eventos',
  'Assistência técnica',
  'Reforma e obra',
  'Comunicação visual',
  'Toldos e coberturas',
  'Ar-condicionado',
  'Piscinas',
];

export default function Home() {
  return (
    <>
      <section className="page-head">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">orçamento por whatsapp</span>
            <h1 style={{ marginTop: 18 }}>Orçamento no WhatsApp, pronto em minutos.</h1>
            <p className="lead">
              Seu cliente pergunta pelo WhatsApp. A conversa vira um orçamento em PDF com a{' '}
              <strong>sua</strong> marca. Você confere e envia.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <a className="btn" href={WA} rel="noopener">
                Quero ver funcionando
              </a>
              <Link className="btn ghost" href="/como-funciona">
                Como funciona
              </Link>
            </div>
            <p style={{ fontSize: 14, marginTop: 16 }}>Funciona no número que você já usa.</p>
          </div>
          <div className="chat" aria-label="Exemplo de conversa">
            <div className="bar">
              <div className="av" />
              <div>
                <b>Mármores Silva</b>
                <span>online</span>
              </div>
            </div>
            <div className="msgs">
              <div className="m them">
                Boa tarde! Queria um orçamento de bancada de granito pra cozinha.
              </div>
              <div className="m me">Claro! Qual a medida do balcão?</div>
              <div className="m them">2,40 x 0,60</div>
              <div className="m me">Perfeito. Vai com cuba? E qual granito você prefere?</div>
              <div className="m them">Uma cuba, e o preto São Gabriel</div>
              <div className="m file">
                <i>PDF</i> Orçamento nº 128 · Mármores Silva
              </div>
              <div className="tick">enviado 4 min depois da primeira mensagem</div>
            </div>
          </div>
        </div>
      </section>

      <div className="faixa">
        <div className="wrap">
          <div className="dspl">Nunca mais perca cliente por demora.</div>
          <p>Quem responde primeiro, fecha. Todo mundo sabe — o problema é ter tempo.</p>
        </div>
      </div>

      <section className="blk">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">o que é</span>
            <h2 style={{ marginTop: 14 }}>Um atendente que só faz orçamento.</h2>
            <p>
              A OrçaAI conversa com o seu cliente no seu WhatsApp, coleta o que falta para fechar um
              preço e monta o orçamento. Você entra só no fim, para conferir e mandar.
            </p>
          </div>
          <div className="grid g3">
            <div className="card">
              <h3>No número que já é seu</h3>
              <p>
                Nada de trocar o contato que você divulga há anos. Seu cliente não instala nada e não
                cria conta.
              </p>
            </div>
            <div className="card">
              <h3>Com as suas regras</h3>
              <p>
                Sua tabela de preços, seus acabamentos, seus prazos e condições. Nada é inventado.
              </p>
            </div>
            <div className="card">
              <h3>Você aprova antes</h3>
              <p>
                O orçamento só sai depois que você olha. Quando ganhar confiança, libera o envio
                automático.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">como funciona</span>
            <h2 style={{ marginTop: 14 }}>Três passos, e nenhum deles é seu.</h2>
          </div>
          <div className="steps">
            <div className="s">
              <span className="n">01</span>
              <div>
                <h3>O cliente chama</h3>
              </div>
              <p>No mesmo número de sempre. A conversa começa igual a qualquer outra.</p>
            </div>
            <div className="s">
              <span className="n">02</span>
              <div>
                <h3>As perguntas que faltam são feitas</h3>
              </div>
              <p>
                Medida, quantidade, acabamento, prazo — o que o seu tipo de serviço exige. Você
                cadastra uma vez.
              </p>
            </div>
            <div className="s">
              <span className="n">03</span>
              <div>
                <h3>O PDF sai pronto</h3>
              </div>
              <p>
                Com o seu logo, os seus preços e as suas condições. Você confere, ajusta e envia.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 26 }}>
            <Link className="btn ghost" href="/como-funciona">
              Ver o fluxo completo
            </Link>
          </p>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">pra quem é</span>
            <h2 style={{ marginTop: 14 }}>Se o seu preço depende de medida, é pra você.</h2>
          </div>
          <div className="tags">
            {RAMOS.map((ramo) => (
              <span className="tag" key={ramo}>
                {ramo}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 26 }}>
            <Link className="btn ghost" href="/para-quem">
              Ver exemplos por ramo
            </Link>
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
