import type { Metadata } from 'next';
import { FinalCta } from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'Pra quem é — OrçaAI',
  description:
    'Marmoraria, serralheria, gráfica, buffet e todo negócio cujo preço depende de medida. E quando não vale a pena.',
  alternates: { canonical: '/para-quem' },
};

const RAMOS = [
  ['Marmoraria', 'Medida do balcão, número de cubas, tipo de pedra, rodapé e saia, se tem recorte de cooktop.'],
  ['Serralheria', 'Metro linear, altura, tipo de portão, motor, pintura, prazo de instalação.'],
  ['Vidraçaria', 'Medida do vão, espessura, tipo de vidro, ferragem, se é temperado ou laminado.'],
  ['Gráfica', 'Tiragem, formato, papel, cores, acabamento, se tem arte pronta.'],
  ['Marcenaria', 'Ambiente, medidas, material, ferragens, prazo, se tem projeto.'],
  ['Buffet e eventos', 'Data, número de pessoas, tipo de serviço, cardápio, bebidas, local.'],
  ['Assistência técnica', 'Aparelho, modelo, defeito relatado, se está na garantia, se leva ou busca.'],
  ['Toldos e coberturas', 'Vão, tipo de estrutura, lona ou policarbonato, cor, se tem laudo.'],
  ['Comunicação visual', 'Peça, medida, material, instalação, se precisa de projeto e aprovação.'],
  ['Ar-condicionado', 'Ambiente, BTUs, tipo de aparelho, distância da condensadora, infraestrutura existente.'],
] as const;

export default function ParaQuem() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">pra quem é</span>
          <h1 style={{ marginTop: 16 }}>
            Todo negócio que perde venda porque o orçamento demora.
          </h1>
          <p className="lead">
            O critério é simples: se o seu preço depende de medida, quantidade ou acabamento, e a
            conversa começa no WhatsApp, é pra você.
          </p>
        </div>
      </section>

      <section className="blk tight">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">exemplos por ramo</span>
            <h2 style={{ marginTop: 14 }}>O que a OrçaAI pergunta em cada caso</h2>
            <p>
              São as mesmas perguntas que você já faz — cadastradas uma vez para nunca mais escapar
              nenhuma.
            </p>
          </div>
          <div className="seg">
            {RAMOS.map(([ramo, perguntas]) => (
              <div className="r" key={ramo}>
                <span className="k">{ramo}</span>
                <span className="v">{perguntas}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">honestidade</span>
            <h2 style={{ marginTop: 14 }}>Quando a OrçaAI não vale a pena</h2>
            <p>Prefiro te dizer agora do que você descobrir depois de contratar.</p>
          </div>
          <div className="grid g3">
            <div className="card">
              <h3>Preço de prateleira</h3>
              <p>
                Se o que você vende tem preço fixo e público, o cliente não precisa de orçamento —
                precisa de catálogo. É outro problema.
              </p>
            </div>
            <div className="card">
              <h3>Volume muito baixo</h3>
              <p>
                Se você faz dois ou três orçamentos por mês, o tempo que você ganha não paga a conta.
                Volte quando crescer.
              </p>
            </div>
            <div className="card">
              <h3>Preço só depois de ver</h3>
              <p>
                Se nenhum serviço seu pode ser estimado sem visita, a OrçaAI adianta o cadastro e
                agenda — mas não resolve o seu gargalo principal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
